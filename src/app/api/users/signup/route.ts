import {NextRequest, NextResponse} from 'next/server';
import {connect} from '@/dbConfig/dbconfig';
import User from '@/models/userModal';
import bcryptjs from 'bcryptjs';

// connect to db
connect();

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json();
        console.log(reqBody);
        
        const {email, username, password} = reqBody;
        // check if the user exists
        const user = await User.findOne({email});
        console.log(user);
        
        if(user){
            return NextResponse.json(
                {error: 'User Already exists!'},
                {status: 400}
            )
        }

        // hash password
        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash( password, salt);
        
        const newUser = new User({
            email,
            username,
            password: hashPassword
        });

        const savedUser = await newUser.save();

        return NextResponse.json({
            message: 'User created sucussfully',
            sucess: true,
            savedUser
        });

    } catch (error:any) {
        console.log("Signup Failed", error.message);
        return NextResponse.json(
            {error: error.message},
            {status: 500}
        );
    }
}