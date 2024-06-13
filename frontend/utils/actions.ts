'use server';

import { cookies } from "next/headers";

export async function handleRefresh() {
    console.log('handleRefresh');
const refreshToken = await getRefreshToken();
const token = await fetch('http://localhost:8000/api/auth/token/refresh',{
    method: 'POST',
    body: JSON.stringify({
        refresh:refreshToken,
        
    }),
    headers:{
        'Accept': 'application/json',
        'content-type': 'application/json'
    }
})
.then(response=>response.json()).then((json)=>{
    console.log('Responce - refresh : ',json);
    if(json.access){
        cookies().set('session_access_token',json.access,{
            httpOnly:true,
            secure:process.env.NODE_ENV === 'production' ,
            maxAge:60 * 60, // 1 hour
            path:'/'
        });
        return json.access;
    }else{
        resetAuthCookies();
    }
})
.catch((err)=>{
    console.log('error',err);
    resetAuthCookies();
    
})

return token;
    
}



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
        maxAge:60 * 60, // 1 hour
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
    if(!accessToken){
        accessToken = await handleRefresh();
    }
    //refresh token late;
    return accessToken ? accessToken : null;
}

export const getRefreshToken = async () => {
    let refreshToken = cookies().get('session_refresh_token')?.value
    //refresh token late;
    return refreshToken;
}