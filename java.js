// console.log("hello world")

// function print(a,b){
//     console.log("hello",a+b)
// }
// print(4,2)

// let geteli = document.getElementsByClassName("heading")
// console.log(geteli[0].textContent)
// console.log(geteli[0].innerText)
// console.log(geteli[0].innerHTML)
// let btn = document.getElementsByClassName("button")
// console.log(btn[0].textContent)
// console.log(btn[0].innerText)


// const docs = document.querySelectorAll(".heading")
// docs.forEach(function(name){
//     console.log(name.textContent)
// })
// const button = document.querySelector(".button")
// console.log(button)
// console.log(button.textContent)
// console.log(button.innerHTML)
// console.dir(button)

// const heading1 = document.querySelector(".heading")
// console.log(heading1.textContent)
// heading1.textContent = "prajapati";
// console.log(heading1.textContent);
// console.log(heading1.textContent = "gol");
// console.log(heading1.textContent);
// heading1.textHTML = "prajapati";
// console.log(heading1.textHTML);
// heading1.innerText = "prajapati";
// console.log(heading1.innerText);

// heading1.innerHTML = "<strong>happy</strong>"
// console.log(heading1.innerHTML)


// const head1  = document.querySelector(".heading")
// head1.setAttribute("class","babbar")
// console.log(head1.getAttribute("class"))

// const head2 = document.querySelector(".image")
// head2.setAttribute("src","https://www.w3schools.com/images/img_course_up_html_160.webp")
// console.log(head2.getAttribute("src"))

// const head1 = document.querySelector(".image")
// head1.setAttribute("src","https://www.w3schools.com/images/img_course_up_html_160.webp")
// console.log(head1.getAttribute("src"))

// let babbar = document.querySelector(".nora")
// let num = document.createElement("button")
// num.innerText = "submit"
// babbar.appendchild(num)
// let link = setAttribute()
// let ptag = document.createElement("p")
// ptag.innerText = "i learn a python"
// babbar.appendchild(ptag)

// let neweliment = document.querySelector(".divs")
// neweliment.innerText = "i am skillance student"
// console.log(neweliment)

// let el = document.createElement("h3")
// el.innerText = "i learned Eventlistner"
// neweliment.append(el)
// let newel = document.querySelector("h3")
// console.log(el)

// let button = document.createElement("button")
// button.innerText = "click me"
// neweliment.append(button)
// let newbutton = document.querySelector("button")
// console.log(button)

// let nhead = document.querySelector("h2")


// button.addEventListener("click",()=>{
//   button.innerText = "just click"
//   el.innerText = "i have comleted dom"
//   nhead.innerText = "hello skilliance devoplepor"
// })

let newdiv = document.querySelector(".divs");
newdiv.innerText = "i am parent for all";

let createpara1 = document.createElement("h1");
createpara1.innerText = "i am go to complete my goal";

let createpara2 = document.createElement("h2");
createpara2.innerText = "i go to complete today task";

let createbutton = document.createElement("button");
createbutton.innerText = "click me";

newdiv.appendChild(createpara1);
newdiv.appendChild(createpara2)
newdiv.appendChild(createbutton);

let body = document.querySelector("body");
let heading1 = document.querySelector(".heading");

let boxes = document.querySelectorAll(".box")
let i = 1
for (let box of boxes){
  box.innerText = `this is my ${i} box`
    i++
};


createbutton.addEventListener("click",function(){
  createpara1.innerText = "completed goal"
  createpara2.innerText = "completed task"
  createbutton.innerText = "accepted"
  createbutton.style.color = "black"
  createpara1.style.color = "white"
    createpara2.style.color = "white"
  newdiv.style.backgroundColor = "black"
  createbutton.style.backgroundColor = "blue"
   heading1.style.color = "white"
  body.style.backgroundColor = "pink"
  changeclass.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOYHdRyAfOynIHW9tfd1rsTyhqaYANJXbkeg&s")

})


// createbutton.addEventListener("click",function(){
//   createpara1.innerText = "completed goal"
// })









// let parentElement=document.querySelector(".parent")


// let mybutton=document.createElement("button");
// mybutton.innerText="click me";

// // creating paragraph element
// let para=document.createElement("p");
// para.innerText="this is a paragraph";

// parentElement.appendChild(mybutton);
// parentElement.appendChild(para);

// mybutton.addEventListener("click",function(){
//   mybutton.innerText="you clicked me";
//   para.innerText="paragraph changed after clicking the button";
// });




// let secondbtn=document.querySelector(".secondbtn");
// secondbtn.addEventListener("click",()=>{
//   let inputElement=document.querySelector("input").value;
//   console.log("input event fired");
//   console.log(inputElement);
// });