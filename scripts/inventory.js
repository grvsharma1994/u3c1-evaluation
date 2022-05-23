const productArray = JSON.parse(localStorage.getItem('products'));
const all_products = document.getElementById("all_products");
// display products
displayProducts(productArray);
function displayProducts(productArray){
    all_products.innerHTML = null;
    productArray.forEach((el,i) => {
        let cart = document.createElement('div');
        let img = document.createElement('img');
        img.src = el.image;
        let type = document.createElement('p');
        type.innerText = el.type;
        let desc = document.createElement('p');
        desc.innerText = el.desc;
        let price = document.createElement('p');
        price.innerText = "Rs. " + el.price;

        let remove = document.createElement('button');
        remove.innerText = 'Remove';
        remove.setAttribute('id','remove_product');
        remove.addEventListener('click',function(){
            removeProduct(i);
        });

        cart.append(img,type,desc,price,remove);
        all_products.append(cart);
    });
}
// Remove product from Local Storage and DOM.
function removeProduct(i){
    productArray.splice(i,1);
    localStorage.setItem('products',JSON.stringify(productArray));
    displayProducts(productArray);
}
// go to the admin(index.html) page
const add_more_product = document.getElementById("add_more_product");
add_more_product.addEventListener('click',changePage);
function changePage(){
    window.location.href = 'index.html';
} 