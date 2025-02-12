// Products Page
fetch("products.json").then((response) =>{
    return response.json();
})
.then((products) =>{
    const productList = document.getElementById("product-list");

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("bg-gray-100", "p-4", "shadow-lg", "text-center", "transition", "duration-300" , "hover:scale-102");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="w-full object-contain rounded"> 
            <h2 class="text-2xl font-semibold">${product.name}</h2>
            <p class=text-xl text-gray-600>${product.price}</p>
            <button class="text-white px-4 py-2 rounded mt-2 bg-indigo-600 hover:bg-indigo-400">
                <a href="product.html?id=${product.id}">View</a>
            </button>
        `;
        productList.append(productCard);
    });
})

// Home Page
fetch("products.json").then((response) =>{
    return response.json();
})
.then((products) =>{
    const indexProductList = document.getElementById("index-product-list");

    products.slice(0, 3).forEach(product =>{
        const indexProductCard = document.createElement("div");
        indexProductCard.classList.add("bg-gray-100", "p-2", "shadow-lg", "text-center", "transition", "duration-300" , "hover:scale-102")
        indexProductCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="w-full object-contain rounded"> 
            <h2 class="text-2xl font-semibold">${product.name}</h2>
            <p class=text-xl text-gray-600>${product.price}</p>
            <button class="text-white px-4 py-2 rounded mt-2 bg-indigo-600 hover:bg-indigo-400">
                <a href="product.html?id=${product.id}">View</a>
            </button>
        `;
        indexProductList.append(indexProductCard)
    })
})

// Single Product
const urlParams = new URLSearchParams(window.location.search);
const productID = urlParams.get("id");

fetch("products.json").then((response) =>{
    return response.json()
})
.then((products) =>{
    const productContent = document.getElementById("content");
    const product = products.find(p => p.id == productID);
    productContent.innerHTML = `
            <h1 class="text-4xl my-6">${product.name}</h1>
            <div class="grid grid-cols-1 sm:grid-cols-2">
                <div class="">
                    <img src="${product.image}" alt="${product.name}" class="w-150 rounded transition duration-300 hover:scale-105">
                </div>
                <div class="text-left">
                    <h1 class="text-xl font-semibold my-6">Description:</h1>
                    <p>${product.description}</p>
                    <div class="grid grid-cols-2 gap-4 mt-6">
                        <div class="justify-self-end"> 
                            <p class=text-4xl text-gray-600>${product.price}</p>
                        </div>
                        <div> 
                             <button class="text-white px-4 py-2 rounded mt-2 bg-indigo-600 hover:bg-indigo-400">Enquire</button>
                        </div>
                    </div>
                </div>
            </div>
        `
})