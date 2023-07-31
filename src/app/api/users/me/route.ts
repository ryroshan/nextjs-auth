import {getTokeUserDetails} from '@/helper/getTokeUserDetails';
import User from '@/models/userModal';
import { connect } from '@/dbConfig/dbconfig';
import { NextRequest, NextResponse } from 'next/server';


// connect to db
connect()

export async function GET(request: NextRequest){
    try {
        const userId = await getTokeUserDetails(request);
        const user = await User.findOne({_id: userId }).select("-password");
        console.log("userId", userId);
        console.log("user", user);
    
        return NextResponse.json({
          message: "User Found!",
          data: user,
        });
      } catch (error:any) {
        console.log(error);
        return NextResponse.json(
            {error: error.message},
            {status: 400}
        )
        
    }
}