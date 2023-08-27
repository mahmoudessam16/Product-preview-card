// change image on mobile
if (innerWidth < 700) {
    document.querySelector("img[alt='product']").src = "./images/image-product-mobile.jpg";
} 
if (innerWidth >= 700) {
    document.querySelector("img[alt='product']").src = "./images/image-product-desktop.jpg";
}
