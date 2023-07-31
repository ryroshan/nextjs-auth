import { NextRequest, NextResponse } from "next/server";
import { connect } from "./dbConfig/dbconfig";
export async function middleware(request: NextRequest){

    await connect();

    const path = request.nextUrl.pathname;
    const isPublicPath = path == '/signup' || path == '/login';

    const token = request.cookies.get('token')?.value || '';

    if(isPublicPath && token){
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }
    if(!isPublicPath && !token){
        return NextResponse.redirect(new URL('/login', request.nextUrl));
    }
}

// matching paths

export const config = {
    matcher: [
        '/',
        '/profile',
        '/login',
        '/signup',
    ]
}
