window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    const price = params.get('price');
    const image = params.get('image');

    // Display product details on the page
    document.getElementById('product-name').textContent = name;
    document.getElementById('product-price').textContent = `Price: ₱${price}`;
    document.getElementById('product-image').src = image;
};

function buyNow(name, price, image) {
    // Construct the URL with query parameters
    const url = `order.html?name=${encodeURIComponent(name)}&price=${price}&image=${encodeURIComponent(image)}`;
    
    // Redirect to the order.html page with the product details
    window.location.href = url;
}