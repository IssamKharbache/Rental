const apiRequests =  {
 get: async function (url:string): Promise<any>{

    return new Promise((resolve,reject)=>{
        fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`,{
            method: 'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
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
  
  return new Promise((resolve,reject)=>{
    fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`,{
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        ,
        body:data,
    }).then(response=>response.json())
    .then((json)=>{
        console.log('Response',json);
        resolve(json);
    })
    .catch((err)=>{
        reject(err);
    })
})
 }
}


export default apiRequests;