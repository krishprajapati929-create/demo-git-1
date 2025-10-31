let task = document.querySelector("#ename")
let email = document.querySelector("#enum")
let password = document.querySelector("#eemail")
let button = document.querySelector("#btn")
let ul = document.querySelector("#display")
button.addEventListener("click",()=>{
    let newname = task.value.trim()
    let newemail = email.value.trim()
    let newnum = password.value.trim()
    if(newname == "" || newemail == "" || newnum == ""){
        alert("Pls Fill All Details")
    }else{
    let name1 = document.createElement("li");
    let email1 = document.createElement("li");
    let num1 = document.createElement("li");
    name1.textContent = newname
    email1.textContent = newemail
    num1.textContent = newnum
   localStorage.setItem(`${i}All details`,JSON.stringify({name:newname,email:newemail,password:newnum}));
    let newbtn = document.createElement("button")
    newbtn.innerText = "delete"
    newbtn.addEventListener("click",()=>{
        name1.remove()
        email1.remove()
        num1.remove()
    })
    name1.appendChild(newbtn);
    ul.appendChild(name1);
    ul.appendChild(email1);
    ul.appendChild(num1);
    task.value = ""
    email.value = ""
    password.value = ""
    }
})
