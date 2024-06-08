'use server';

import { cookies } from "next/headers";


export const handleLogin = async (userId:string,accessToken:string,refreshToken:string) =>{

    //how long we store the userid in the cookie
    cookies().set('session_userId',userId,{
        httpOnly:true,
        secure:process.env.NODE_ENV === 'production' ,
        maxAge:60 * 60 * 24 * 7, // 1 week
        path:'/'
    });
 //access token
    cookies().set('session_access_token',accessToken,{
        httpOnly:true,
        secure:process.env.NODE_ENV === 'production' ,
        maxAge:60 * 60, // 60 minutes
        path:'/'
    });
    cookies().set('session_refresh_token',refreshToken,{
        httpOnly:true,
        secure:process.env.NODE_ENV === 'production' ,
        maxAge:60 * 60 * 24 * 7, // 1 week
        path:'/'
    });
}


export const resetAuthCookies = async () => {
    cookies().set('session_userId','');
    cookies().set('session_access_token','');
    cookies().set('session_refresh_token','');

}

//get data

export const getUserId = async () => {
    const userId = cookies().get('session_userId')?.value;
    return userId ? userId : null;
}


export const getAccessToken = async () => {
    let accessToken = cookies().get('session_access_token')?.value
    //refresh token late;
    return accessToken ? accessToken : null;
}