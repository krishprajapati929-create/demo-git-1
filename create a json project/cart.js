async function loadCart(){
    const res = await fetch("http://localhost:3000/cart")
    const cartItems = await res.json()
    const Container = document.querySelector("#cart-container")
    Container.innerHTML=""
    if(cartItems.length===0){
        Container.innerHTML="<h1>no items  in cart</h1>"
        return
    }
    cartItems.forEach(item=>{
        const div = document.createElement("div")
        div.className = "cart-item";
        div.innerHTML= `
  
        <img src=${item.poster} alt=${item.title} class="cart-poster-img" width="100">

        <div class="cart-info">
        <div class="cart-title">${item.title}</div>
        <div class="cart-year">${item.year}</div>
        <div class="cart-genre">${item.category}</div>
        <div class="cart-rating">⭐${item.rating}</div>
        <button onclick="removefromcart(${item.id})">remove</button>
        </div> 
        ` 
        Container.appendChild(div)
    })
}
async function removefromcart(id){
    await fetch(`http://localhost:3000/cart/${id}`,{
        method:"DELETE"
    })
    loadCart()
    

}
loadCart()