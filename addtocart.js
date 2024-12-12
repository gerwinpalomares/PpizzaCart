const product = [
    {
        id: 0,
        image: '4.jpg',
        title: 'Hawaian Pizza',
        price: 140,
    },
    {
        id: 1,
        image: '5.jpg',
        title: 'Cheese Pizza',
        price: 150,
    },
    {
        id: 2,
        image: '8.jpg',
        title: 'Buffalo Pizza',
        price: 180,
    },
    {
        id: 3,
        image: '7.jpg',
        title: 'Meat Pizza',
        price: 150,
    },
    {
        id: 4,
        image: '1.jpg',
        title: 'BBQ Pizza',
        price: 140,
    },
    {
        id: 1,
        image: '2.jpg',
        title: 'Margarita Pizza',
        price: 160,
    },
];

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>Php ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displapycart();
}

function delElement(a){
    cart.splice(a, 1);
    displapycart();
}

function displapycart(a){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "Php "+0+".00";
    }
    else {
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "Php "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:16px;'>${title}</p>
                <h2 style='font-size: 15px;'>Php ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}
// Get the "Buy Now" button and add a click event listener
const buyNowButton = document.querySelector('.sidebar button');
buyNowButton.addEventListener('click', function() {
    // Clear the cart by setting it to an empty array
    cart = [];
    
    // Update the cart display
    displapycart();
    
    // Optional: Display a confirmation message (you can remove this if not needed)
    alert("Your purchase has been completed.");
});
