
// const addbtn = document.querySelector("#addbtn")
// const input = document.querySelector("#taskinput")
// const tasklist = document.querySelector("#tasklist")

// addbtn.addEventListener("click",()=>{
//     const tasktext = input.value.trim()
//     if(tasktext==""){
//         alert("please enter a task")
//     }else{
//         const li = document.createElement("li")
//         li.textContent=tasktext;
//         localStorage.setItem("firstname",tasktext)
//         let newbtn = document.createElement("button")
//         newbtn.textContent = "delete"
//         newbtn.addEventListener("click",()=>{
//             li.remove()
//         })
//         li.appendChild(newbtn)
//         tasklist.appendChild(li)
//         input.value="";
//     };
    

// });
// localStorage.setItem("firstname", JSON.stringify({name:"krish",age:22,gender:"male"}));
// let value = localStorage.getItem('firstname') 
// console.log(value)
// localStorage.setItem("firstname","krish",)
// localStorage.setItem("secondname","krish",)

// sessionStorage.setItem("lastname","smith");


// document.querySelector("#grandparent").addEventListener("click",()=>{
//     console.log("grandparent")
// })
// document.querySelector("#parent").addEventListener("click",(event)=>{
//     console.log("parent")
//     event.stopImmediatePropagation()  
//     // \^<== this is stopping propegation
// })
// document.querySelector("#btn").addEventListener("click",()=>{
//     console.log("button")
// })