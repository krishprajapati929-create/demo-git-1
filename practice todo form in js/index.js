let task = document.querySelector("#ename")
let email = document.querySelector("#enum")
let password = document.querySelector("#eemail")
let button = document.querySelector("#btn")
let ul = document.querySelector("#display")
let carking1 = document.querySelector("#carking1")
button.addEventListener("click",()=>{
    let newname = task.value.trim()
    let newemail = email.value.trim()
    let newnum = password.value.trim()
    if(newname == "" || newemail == "" || newnum == ""){
        alert("Pls Fill All Details")
    }else{
    //     carking1.setAttribute("href", "http://127.0.0.1:5501/cars%20flex%20web%20page/flex.html");
    // carking1.click();
    let list = document.createElement("li")
        list.innerHTML=`
        <strong>name:</strong>${newname} |
        <strong>email:</strong>${newemail} |
        <strong>num:</strong>${newnum}
        `
  localStorage.setItem("AllDetails", JSON.stringify({
  name: newname,
  email: newemail,
  password: newnum
}));
    let newbtn = document.createElement("button")
    newbtn.className="removebtn"
    newbtn.innerText = "delete"
    newbtn.addEventListener("click",()=>{
        list.remove()
    })
    list.appendChild(newbtn)
    ul.appendChild(list)
    task.value = ""
    email.value = ""
    password.value = ""
            
    }
    
})
