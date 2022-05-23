//store the products array in localstorage as "products"
const productArray = JSON.parse(localStorage.getItem('products')) || [];

const products = document.getElementById("products");
products.addEventListener('submit',addProduct);
function addProduct(){
    event.preventDefault();
    let product = {
        type : products.type.value,
        desc : products.desc.value,
        price : products.price.value,
        image : products.image.value
    };
    productArray.push(product);
    console.log(product)
    localStorage.setItem('products',JSON.stringify(productArray));
    products.reset();
}

const show_products = document.getElementById("show_products");
show_products.addEventListener('click',changePage);
function changePage(){
    window.location.href = 'inventory.html';
} 