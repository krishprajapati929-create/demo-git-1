const carousalImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7zODw5Ey6jBd_7mpiPcVwHpq7VG-pZ0Nw9g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7oq4nLllaNTJWNbEHg3icx129yGwfR1Ar3w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ889_SlnIzvZQrnLzKF467gy5JsfMy3bY3HA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuLf1NM3PcR6ZXNcAooYjw_ylzg2H2adWRVg&s",
    "https://i.ytimg.com/vi/5hWgFj-3J-k/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDXURggicCLNLIo-PA_1-Iu68AUeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaVSWCaGAWiUF0P3OPwKFomwBtcc77AGc35w&s"
   , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO9Q4RgS84bHZXfKHgYngwhUuKWafoXm4kqQ&s"
]
currentslide = 0

const indexcontainer = document.querySelector(".display-container")
function initcrousal(){
    indexcontainer.innerHTML=""
    carousalImages.forEach((imageurl,index)=>{
        const slide = document.createElement("div")
    slide.className="slidecrousal"
        if(index===0){
            slide.classList.add("active")
        }
        const newimg = document.createElement("img")
        newimg.className="imageclass"
        newimg.src=imageurl
        newimg.alt=`slide${index+1}`
        slide.appendChild(newimg)
        indexcontainer.appendChild(slide)
    })
}

function liveimage(){
    const slideselect=document.querySelectorAll(".slidecrousal")
    slideselect.forEach((slide,index)=>{
        if(currentslide===index){
            slide.classList.add("active")
        }else{slide.classList.remove("active")}
    })
}
function autoNext(){
    currentslide=(currentslide+1)%carousalImages.length
    console.log(currentslide)
    liveimage()
}
function changeSlide(direction){
    currentslide = (currentslide+direction+carousalImages.length)%carousalImages.length
    liveimage()
}


setInterval(autoNext,2000)
initcrousal()