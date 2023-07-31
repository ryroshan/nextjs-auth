import {NextRequest, NextResponse} from 'next/server';
import jwt from 'jsonwebtoken';

export function getTokeUserDetails(request: NextRequest) {
    try {
      const token = request.cookies.get('token')?.value || '';
      console.log('Token:', token);
  
      const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);
      console.log('Decoded Token:', decodedToken);
  
      return decodedToken.id;
    } catch (error: any) {
      console.log('Token Decoding Error:', error.message);
      throw new Error(error.message);
    }
  }
  