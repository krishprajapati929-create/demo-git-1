const carousalImages = [
    "https://www.kalyanjewellers.net/images/banners/gold_banner.jpg",
    "https://www.kalyanjewellers.net/images/banners/gift.webp",
    "https://www.kalyanjewellers.net/images/chairman-wide.jpg"
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

            <img class="img" src=${movie.poster} alt=${movie.title}>
        </div>
        <div class="info">
            <div class="movietitle">${movie.title}</div>
            <div class="movieid"></div>
            <div class="moviecetegory">${movie.category}</div>
            <div class="movierank">${movie.rank}</div>
            <div class="movieyear">${movie.year}</div>
            <button class="card-favourite cardbtn">favourite</button>
            <button class="card-cart cardbtn">cart</button>
        </div>
        
    `
    const cartbtn = carddiv.querySelector(".card-cart")
    cartbtn.addEventListener("click",()=>(handlecart(movie)))
    cardContainer.appendChild(carddiv)
    })
}
async function handlecart(movie){
    try{
        const res = await fetch(`http://localhost:3001/cart?id=${movie.id}`)
        const exixting = await res.json()
        console.log(movie)
        if(exixting.length>0){
            alert(`${movie.title} is already in cart`)
        }
        await fetch("http://localhost:3001/cart",{
            method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
        })
        alert(`${movie.title} add to cart`)

    }catch(err){
        console.log(err)
    }
}
loadmovies()
setInterval(autoNext,2000)
initcrousal()