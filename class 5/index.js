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
let allmovies = []

const displaycontainer = document.querySelector(".display-container")
const cardContainer = document.querySelector(".card-container")
function initcrousal(){
    displaycontainer.innerHTML=""
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
        displaycontainer.appendChild(slide)
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

    liveimage()
}
function changeSlide(direction){
    currentslide = (currentslide+direction+carousalImages.length)%carousalImages.length
    liveimage()
}
async function loadmovies(){
    try {
    const response = await fetch("http://localhost:3001/Movies") 
    if(!response){
        console.log("failed to fached movies")
    }
    allmovies = await response.json() 
    console.log("data",allmovies)
    displaymovies()
    } catch (err) {
        console.log(err)
    }
}
function displaymovies(){
    if(!cardContainer){
        console.log("movies container is not found")

    }
    if(!allmovies||allmovies.length===0){
        displaycontainer.innerHTML=" <h1 style='color: white; text-align: center;'>no Movies availavle</h1>"
    }
    allmovies.forEach(movie=>{
    const carddiv = document.createElement("div")
    carddiv.className="movie-card"
    carddiv.innerHTML=`
        <div class="movieposter">

            <img class="img"src=${movie.poster} alt=${movie.title}>
        </div>
        <div class="imfo">
            <div class="movietitle">${movie.title}</div>
            <div class="movieid"></div>
            <div class="moviecetegory">${movie.category}</div>
            <div class="movierank">${movie.rank}</div>
            <div class="movieyear">${movie.year}</div>
            <button class="card-cart">cart</button>
            <button class="card-favourite">favourite</button>
        </div>
        
    `
    cardContainer.appendChild(carddiv)
    })
}

loadmovies()
setInterval(autoNext,2000)
initcrousal()