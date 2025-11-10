// console.log("krish")
// let data = fetch("https://jsonplaceholdr.typicode.com/albums").then(response=>{
//     return response.json()
// }).then(dat=>{
//     console.log(dat)
// }).catch(err=>{
//     console.log(err)
// })



// let promise = new Promise((resolve,reject)=>{
//     let success = true
//     if (success){
//         resolve("success fatched")
//     }{
//         reject("not fached")
//     }
// })
// promise.then((res)=>{
//     console.log(res)
// }).catch((arr)=>{
//     console.log(arr)
// })
// console.log(promise)


async function getdata(){
    try{
    let response = await fetch("http://localhost:3000/posts");
    let data = await response.json();
    console.log(data);
    }catch(error){
        console.log("we are find the error",error)
    }
};
getdata()
