async function loadcart(){
    const res = await fetch("http://localhost:3001/cart")
    const allcart = await res.json()
    const container = document.querySelector(".cart-container")
    container.innerHTML=""
    if(allcart.length===0){
        container.innerHTML="<h1>no items in cart</h1>"
        return
    }
    allcart.forEach(item=>{
    const div = document.createElement("div")
    div.className="cartcard"
    div.innerHTML=`
            <img class="img" src=${item.poster} alt=${item.title}>
        <div class="info">
            <div class="movietitle">${item.title}</div>
            <div class="movieid"></div>
            <div class="moviecetegory">${item.category}</div>
            <div class="movierank">${item.rank}</div>
            <div class="movieyear">${item.year}</div>
            <button onclick="removefromcart(${item.id})"></button>
        </div>
    `
    container.appendChild(div)
    })
}
async function removefromcart(id){
    await fetch(`http://localhost:3001/cart/${id}`,{
        method:"DELETE"
    })
    loadcart()
}
loadcart()