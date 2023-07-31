import { connect } from "@/dbConfig/dbconfig";
import User from "@/models/userModal";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from "next/server";


// connect to the DataBase
connect()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json();
        console.log("coming as request body", reqBody);
        
        const {username, password} = reqBody;
        // check if user exists
        const user = await User.findOne({username});
        if(!user){
            return NextResponse.json(
                {error: "User Does't Exists!"},
                {status: 400}
            )
        }

        // check if the password is correct
     const validPassword = await bcryptjs.compare(password, user.password);
        if(!validPassword){
            return NextResponse.json(
                {error: "Invalid Password"},
                {status : 400}
            )
        }

        // create token data
        const tokenData = {
            id : user._id,
            username: user.username,
            email: user.email
        }

        console.log(tokenData);
        

    //     // create token
       const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: '1d'});
        

      const response = NextResponse.json({
        message: "Login SucussFully!",
        success: true,
      });
      
      response.cookies.set('token', token, {httpOnly: true});
      return response;

    } catch (error:any) {
        console.log("Login Failed", error.message);
        return NextResponse.json(
            {error: error.message},
            {status: 500}
        )
        
    }
}