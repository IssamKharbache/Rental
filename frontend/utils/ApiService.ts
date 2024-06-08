import { getAccessToken } from "./actions";

const apiRequests =  {
 get: async function (url:string): Promise<any>{
      const token = await getAccessToken();
    return new Promise((resolve,reject)=>{
        
        fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`,{
            method: 'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then(response=>response.json())
        .then((json)=>{
            // console.log('Response',json);
            resolve(json);
        })
        .catch((err)=>{
            console.log(err);
        })
    })
 },
 post : async function (url:string,data:any): Promise<any>{
   const token = await getAccessToken();
  return new Promise((resolve,reject)=>{
    fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`,{
        method: 'POST',
        headers:{
            'Authorization': `Bearer ${token}`
        }
        ,
        body:data,
    }).then(response=>response.json())
    .then((json)=>{
      
        resolve(json);
    })
    .catch((err)=>{
        reject(err);
    })
})
 },
 postWithoutToken : async function (url:string,data:any): Promise<any>{
    
   return new Promise((resolve,reject)=>{
     fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`,{
         method: 'POST',
         headers:{
             'Accept': 'application/json',
             'Content-Type': 'application/json',
         }
         ,
         body:data,
     }).then(response=>response.json())
     .then((json)=>{
        
         resolve(json);
     })
     .catch((err)=>{
         reject(err);
     })
 })
  }
}


export default apiRequests;