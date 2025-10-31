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
        carking1.setAttribute("href", "http://127.0.0.1:5501/cars%20flex%20web%20page/flex.html");
    carking1.click();
        let email1 = document.createElement("li");
    let num1 = document.createElement("li");
    name1.textContent = newname
    email1.textContent = newemail
    num1.textContent = newnum
  localStorage.setItem("AllDetails", JSON.stringify({
  name: newname,
  email: newemail,
  password: newnum
}));
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
