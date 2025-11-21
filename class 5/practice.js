const params = new URLSearchParams (window.location.search);
const MovieId = params.get("id");
console.log(MovieId)
const container = document.querySelector(".practice-container")
async function comingdata(){
    try{
    const res = await fetch(`http://localhost:3001/Movies?id=${MovieId}`)
    const data = await res.json()
    const singlemovie = data[0]
    handledata(singlemovie)
    }catch(err){
        console.log("data",err)
    } 
}
function handledata(singlemovie){
    container.innerHTML=
    `
        <div class="movieposter">
            <img class="img" src=${singlemovie.poster} alt=${singlemovie.title}>
        </div>
        <div class="info">
            <div class="movietitle">${singlemovie.title}</div>
            <div class="movieid"></div>
            <div class="moviecetegory">${singlemovie.category}</div>
            <div class="movierank">${singlemovie.rank}</div>
            <div class="movieyear">${singlemovie.price}</div>
            <button class="card-favourite cardbtn">favourite</button>
            <button class="card-cart cardbtn">cart</button>
        </div>
    `
}
comingdata()