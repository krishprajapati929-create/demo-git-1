const params = new URLSearchParams(window.location.search);
const movieId = params.get("id");

const container = document.querySelector(".single-container");

if (!movieId) {
    container.innerHTML = "<h1>No item selected</h1>";
} else {
    loadSingleMovie(movieId);
}
async function loadSingleMovie(id) {
    try {
        const res = await fetch(`http://localhost:3000/Movies/${id}`);

        if (!res.ok) {
            container.innerHTML = "<h1>Failed to load data</h1>";
            return;
        }

        const movie = await res.json();
        console.log("single movie data:", movie);

        renderSingleMovie(movie);

    } catch (err) {
        console.log(err);
        container.innerHTML = "<h1>Error loading data</h1>";
    }
}
function renderSingleMovie(movie) {
    container.innerHTML = `
        <div class="single-card">
            <div class="single-poster">
                <img src="${movie.poster}" alt="${movie.title}" class="single-img" />
            </div>
            <div class="single-info">
                <h1 class="single-title">${movie.title}</h1>
                <p class="single-category"><b>Category:</b> ${movie.category}</p>
                <p class="single-rank"><b>Rank:</b> ${movie.rank}</p>
                <p class="single-year"><b>Year:</b> ${movie.price}</p>
                <button class="single-cart-btn">🛒Add to Cart</button>
                <button class="single-back-btn">⚡Buy Now</button>
            </div>
        </div>
    `;
    const cartBtn = container.querySelector(".single-cart-btn");
    cartBtn.addEventListener("click", () => {
        handlecart(movie);
    });
    const backBtn = container.querySelector(".single-back-btn");
    backBtn.addEventListener("click", () => {
        window.location.href = "index.html";
    });
}