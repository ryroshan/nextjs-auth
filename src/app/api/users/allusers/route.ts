import User from '@/models/userModal';
import { connect } from '@/dbConfig/dbconfig';
import {NextResponse, NextRequest} from 'next/server';

 connect()

export async function GET(request: NextRequest){
try {
    const allUsers = await User.find();
    console.log(allUsers);
    
    return NextResponse.json(
        {
            message:'Got all users SuccessFully ',
            status: 200,
            data: allUsers
        }
    );

} catch (error:any) {
    console.log(error);
    return NextResponse.json(
        {error: error.message},
        {status:500}
        )
}

}
