
const addbtn = document.querySelector("#addbtn")
const input = document.querySelector("#taskinput")
const tasklist = document.querySelector("#tasklist")

addbtn.addEventListener("click",()=>{
    const tasktext = input.value.trim()
    if(tasktext==""){
        alert("please enter a task")
    }else{
        const li = document.createElement("li")
        li.textContent=tasktext;
        let newbtn = document.createElement("button")
        newbtn.textContent = "delete"
        newbtn.addEventListener("click",()=>{
            li.remove()
        })
        li.appendChild(newbtn)
        tasklist.appendChild(li)
        input.value="";
    }
    

})
