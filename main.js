const products = [
    {
        id: 1,
        img: "./src/dish/1.jpg",
        title: "Dal Makhani",
        tagline: "Rich lentils, tomato gravy, cream delight.",
        des: "Rich Black lentil delicacy, prepared with lushes tomato gravy, cream and butter served with choice of breads or rice served with choice of breads or rice.",
        price: 219,
        featured: false,
        rate: "3.9(54)",
        category: "Dinner"
    },
    {
        id: 2,
        img: "./src/dish/2.png",
        title: "Spicy Mix Vegetable",
        tagline: "Seasonal veggies in rich Indian spices.",
        des: "Seasonal vegetables tossed in rich Indian spices",
        price: 149,
        featured: false,
        rate: "4.4(88)",
        category: "Lunch"
    },
    {
        id: 3,
        img: "./src/dish/5.jpg",
        title: "Masala Soya Chaap",
        tagline: "Soya chaap, aromatic spices, tomato gravy.",
        des: "Soya chaap cooked with aromatic spices, onion & tomato gravy",
        price: 279,
        featured: false,
        rate: "4.7(30)",
        category: "Snacks"
    },
    {
        id: 4,
        img: "./src/dish/4.jpg",
        title: "Paneer Butter Masala",
        tagline: "Spicy tomato Makhani, Cottage cheese delight.",
        des: "Rich and spicy tomato Makhani Gravy with Cottage cheese finished with Butter",
        price: 279,
        featured: false,
        rate: "4.3(43)",
        category: "Dinner"
    },
    {
        id: 5,
        img: "./src/dish/6.jpg",
        title: "Pao Bhaji",
        tagline: "Mumbai Style Spicy Mashed Vegetables Delight.",
        des: "Mumbai Style Spicy Mashed Vegetables Served With Buttery Bread Roll",
        price: 199,
        featured: false,
        rate: "4.3(75)",
        category: "Snacks"
    },
    {
        id: 6,
        img: "./src/dish/7.png",
        title: "Butter Chicken",
        tagline: "Tandoori chicken delight.",
        des: "Smooth and rich tomato-based makhani gravy with cream and butter with tandoori chicken",
        price: 349,
        featured: true,
        rate: "4.0(88)",
        category: "Dinner"
    },
    {
        id: 7,
        img: "./src/dish/8.jpg",
        title: "Special Veg Thali",
        tagline: "Dal Makhani, Paneer, Mix Veg, Indian feast.",
        des: "(Dal Makhani+ Paneer Of The Day+ Mix Veg + Raita + Rice+ 1 Butter Naan + 1 Butter Roti+ Gulab Jamun+ Salad)",
        price: 419,
        featured: false,
        rate: "3.9(165)",
        category: "Dinner"
    },
    {
        id: 8,
        img: "./src/dish/9.jpg",
        title: "Tangri Kebab",
        tagline: "Tender chicken drumstick, tandoori marination.",
        des: "Tender and succulent chicken drumstick, tandoori masala marination",
        price: 399,
        featured: false,
        rate: "4.3(131)",
        category: "Dinner"
    },
    {
        id: 9,
        img: "./src/dish/10.png",
        title: "Punjabi Chole",
        tagline: "Classic Punjab dish.",
        des: "A classic dish from the Punjab, which is flavored with a large assortment of spice powders",
        price: 219,
        featured: true,
        rate: "3.8(58)",
        category: "Lunch"
    },
    {
        id: 10,
        img: "./src/dish/11.jpeg",
        title: "Chicken Seekh Kebab",
        tagline: "Chicken on bone, malai marination delight.",
        des: "Chicken on bone, malai marination, cooked in tandoor",
        price: 369,
        featured: false,
        rate: "4.8(64)",
        category: "Dinner"
    },
    {
        id: 11,
        img: "./src/dish/12.jpg",
        title: "Dum Chicken Biryani",
        tagline: "Slow-cooked, flavorsome Chicken, Basmati Rice.",
        des: "Traditional slow-cooked, flavorsome Chicken lag with Long Grain Basmati Rice Served with Raita",
        price: 379,
        featured: false,
        rate: "4.1(170)",
        category: "Dinner"
    },
    {
        id: 12,
        img: "./src/dish/14.jpeg",
        title: "Butter Chicken Roll",
        tagline: "Authentic butter chicken in ulta tawa.",
        des: "Authentic butter chicken wrapped in a ulta tawa",
        price: 249,
        featured: false,
        rate: "4.0(26)",
        category: "Snacks"
    },
    {
        id: 13,
        img: "./src/dish/15.jpeg",
        title: "Kadhai Paneer Gravy",
        tagline: "Perfect blend, onion tomato tadka, spices.",
        des: "Prefect blend of onion tomato tadka and indian spices with Cottage Cheese and bell peppers",
        price: 279,
        featured: false,
        rate: "4.4(64)",
        category: "Dinner"
    },
    {
        id: 14,
        img: "./src/dish/18.png",
        title: "Chilly Chicken Dry",
        tagline: "Boneless chicken with red chilies.",
        des: "Made of chunks of boneless chicken mixed with dry red chilies, finely chopped ginger and garlic, onions.",
        price: 220,
        featured: true,
        rate: "3.6(745)",
        category: "Dinner"
    },
    {
        id: 15,
        img: "./src/dish/19.jpg",
        title: "Dragon Chicken",
        tagline: "Batter-fried, spices, Indo Chinese delight.",
        des: "Dragon chicken is a popular Indo Chinese non-vegetarian starter recipe. Dragon chicken is made from batter-fried chicken and then cooked in lots of spices.",
        price: 214,
        featured: false,
        rate: "4.1(256)",
        category: "Snacks"
    },
    {
        id: 16,
        img: "./src/dish/20.png",
        title: "Mexican Pizza",
        tagline: "Flavorful mix mozzarella.",
        des: "Flavourful mix of red capsicum, green capsicum,onion, black olives, sweet corn and 100% mozzarella Cheese with a signature spice.",
        price: 319,
        featured: true,
        rate: "4.0(156)",
        category: "Dinner"
    },
    {
        id: 17,
        img: "./src/dish/bk/17.jpg",
        title: "Classic Pancakes",
        tagline: "Fluffy pancakes served with maple syrup.",
        des: "Classic fluffy pancakes served with a generous drizzle of maple syrup.",
        price: 129,
        featured: false,
        rate: "4.5(42)",
        category: "Breakfast"
    },
    {
        id: 18,
        img: "./src/dish/bk/18.jpg",
        title: "Avocado Toast",
        tagline: "Healthy and delicious avocado on toast.",
        des: "Sliced ripe avocado on top of toasted bread, seasoned to perfection.",
        price: 169,
        featured: false,
        rate: "4.2(34)",
        category: "Breakfast"
    },
    {
        id: 19,
        img: "./src/dish/bk/19.jpg",
        title: "Egg Benedict",
        tagline: "Classic breakfast dish with poached eggs.",
        des: "English muffin halves topped with Canadian bacon, poached eggs, and hollandaise sauce.",
        price: 199,
        featured: false,
        rate: "4.8(52)",
        category: "Breakfast"
    },
    {
        id: 20,
        img: "./src/dish/bk/20.jpg",
        title: "Fruit Parfait",
        tagline: "Healthy and refreshing fruit parfait.",
        des: "Layers of yogurt, granola, and mixed fruits for a delightful breakfast.",
        price: 149,
        featured: false,
        rate: "4.4(27)",
        category: "Breakfast"
    },
    {
        id: 21,
        img: "./src/dish/bk/21.jpg",
        title: "Omelette",
        tagline: "Customized omelette with your favorite fillings.",
        des: "Fluffy omelette with a variety of fillings, served with toast.",
        price: 179,
        featured: false,
        rate: "4.6(38)",
        category: "Breakfast"
    },
    {
        id: 22,
        img: "./src/dish/bk/22.jpg",
        title: "Smoothie Bowl",
        tagline: "Refreshing smoothie bowl with assorted toppings.",
        des: "Blended fruit smoothie topped with granola, nuts, and fresh berries.",
        price: 159,
        featured: false,
        rate: "4.3(45)",
        category: "Breakfast"
    }
];




const fav = document.querySelector(".swiper-wrapper");
const dsfav = products.map((item, index) => {
    if (item.featured == true) {
        return `
        <div class="swiper-slide">
        <!--  -->
        <div class="herosec">
            <div class="left">
                <div class="context">
                    <div class="op">
                        <div class="retragular"></div>
                        <div class="text">
                            <p id="bold2">${item.tagline}</p>
                            <p id="reg2">${item.title}</p>
                        </div>
                    </div>
                    <div class="op">
                        <div class="retragular2"></div>
                        <p id="detail">${item.des}
                        </p>
                    </div>
                    <div class="buts">
                        <button id="btn2">Order Now</button>
                        <button id="btn3">Contact Us</button>
                    </div>
                </div>
            </div>
            <div class="right">
                <img id="food" src=${item.img} alt="">
            </div>
        </div>
        <!--  -->
    </div>
        `
    }

})

fav.innerHTML = dsfav.join("");

// navbar
let sectionEls = document.querySelectorAll("section")
let navlinks = document.querySelectorAll(".nav ul a")
navlinks.forEach(navlink => {
    navlink.addEventListener('click', () => {
        navlinks.forEach(nav => nav.classList.remove("active"))
        navlink.classList.add('active');
    })
})
let currentSection = "hero";
window.addEventListener('scroll', () => {
    sectionEls.forEach(sectionEl => {
        if (window.scrollY >= sectionEl.offsetTop) {
            currentSection = sectionEl.id;
        }
    })
    navlinks.forEach(navlink => {
        if (navlink.href.includes(currentSection)) {
            navlinks.forEach(nav => nav.classList.remove("active"))
            navlink.classList.add('active');
        }
    })
})

function loader() {
    document.querySelector(".loader_con").classList.add('fade-out');
}
function fadeOut() {
    setInterval(loader, 3000)
}
window.onload = fadeOut;
// =============================
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

// review
let usertexts = document.getElementsByClassName("us_text");
let userpics = document.getElementsByClassName("user_pic");

function showreview() {
    for (let userpic of userpics) {
        userpic.classList.remove("activepic");
    }

    for (let usertext of usertexts) {
        usertext.classList.remove("activetext");
    }

    let i = Array.from(userpics).indexOf(event.target);
    userpics[i].classList.add("activepic");
    usertexts[i].classList.add("activetext");
}

window.showreview = showreview;
//menu
let snav = document.querySelector(".nav");
let menubtn = document.querySelector(".menubtn_id");
let menusec = document.querySelector(".menupage");
let searchbar = document.querySelector(".search-bar");
menubtn.onclick = function () {
    menuact()
};
function menuact() {
    if (menusec.style.display === "none") {
        menusec.style.display = "block"
        snav.style.display = "none";
        menubtn.classList.add("menu_active");
        menubtn.innerHTML = "Home"
        searchbar.style.display = "flex";
    } else {
        menusec.style.display = "none"
        snav.style.display = "flex";
        menubtn.innerHTML = "Menu"
        menubtn.classList.remove("menu_active");
        searchbar.style.display = "none";
    }
}

// cart

let cartwraper = document.querySelector(".cartsection");
let cartcov = document.querySelector(".cart");
cartcov.onclick = function () {
    ac_cart()
};
function ac_cart() {
    if (cartwraper.style.display === "none") {
        cartwraper.style.display = "flex";
        // snav.style.display = "none";
    } else {
        cartwraper.style.display = "none";
        // snav.style.display = "flex";
    }
}

function reset() {
    // Clear all form fields
    reservationForm.reset();
}
window.resetForm = reset;
// window.onload = reset;
document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    var reservationForm = document.getElementById('reservationForm');
    var btnSubmit = document.getElementById('btns4');


    reservationForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Handle form submission...
    });

    btnSubmit.addEventListener('click', function () {

        // Get the values from the form inputs
        var customerName = document.getElementById('customerName').value;
        var customerEmail = document.getElementById('customerEmail').value;
        var customerPhone = document.getElementById('customerPhone').value;
        var specialRequests = document.getElementById('specialRequests').value;
        var reservationDate = document.getElementById('reservationDate').value;
        var reservationTime = document.getElementById('reservationTime').value;
        var partySize = document.getElementById('partySize').value;
        var occasion = document.getElementById('occasion').value;

        // Display the alert with the customer's name
        var alertMessage = "Mr. " + customerName + ", your request is submitted.\n\n";
        alertMessage += "Email: " + customerEmail + "\n";
        alertMessage += "Phone: " + customerPhone + "\n";
        alertMessage += "Special Requests: " + specialRequests + "\n";
        alertMessage += "Date: " + reservationDate + "\n";
        alertMessage += "Time: " + reservationTime + "\n";
        alertMessage += "Party Size: " + partySize + "\n";
        alertMessage += "Occasion: " + occasion;

        alert(alertMessage);
        // Redirect to another page
        window.location.href = '/'; // Replace with your desired URL
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});



const fproducts = document.querySelector(".viewcart");

const futcards = products.slice(14,22)
// fproducts.classList.add('s2');
const viewitemsh = futcards.map((item)=>{
    return`
    <div class="s2">
    <div class="pici"><img src=${item.img} alt=""></div>
    <p><img id="star" src="./src/star.svg">&nbsp ${item.rate}</p>
    <p>${item.title}</p>
    <p>${item.des}</p>
    <p id="price"><i class="uil uil-rupee-sign"></i>${item.price}</p>
    <button onclick="menuact()" style="
        margin-top: 5%;
        margin-bottom: 5%;
        background: rgb(103, 65, 65);
        color: rgb(247, 198, 198);
        border: none;
        width: 100%;
        height: 3.5rem;
        font-size: 1.2rem;
        border-radius: 0.5rem;
        ">Visit Menu</button>
    </div>
    
    `
})

fproducts.innerHTML = viewitemsh.join('');


// ====================================================================================================
// ==============================cart logic hear =======================================================
const buttons = document.querySelectorAll('.categories button');

// Function to filter products by category
function filterByCategory(category, button) {
    buttons.forEach(btn => {
        if (btn === button) {
            btn.classList.add('alactive');
            btn.classList.remove('category');
        } else {
            btn.classList.remove('alactive');
            btn.classList.add('category');
        }
    });

    const filteredProducts = category === 'All' ? products : products.filter(product => product.category === category);
   
    populateProductList(filteredProducts);
}

// Call the function with 'All' category on page load
filterByCategory('All', buttons[0]);


const cartno = document.querySelector(".cartno");

// Function to populate the product list
function populateProductList(productArray) {
    // console.log(productArray);
    const productList = document.querySelector('.m2');
    productList.innerHTML = '';

    productArray.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('s2');
        productDiv.innerHTML = `
            <div class="pici"><img src=${product.img} alt=""></div>
            <p><img id="star" src="./src/star.svg">&nbsp ${product.rate}</p>
            <p>${product.title}</p>
            <p>${product.des}</p>
            <p id="price"><i class="uil uil-rupee-sign"></i>${product.price}</p>
            <button id="addToCartBtn${product.id}" onclick="addToCart(${product.id})" style="
                margin-top: 5%;
                margin-bottom: 5%;
                background: rgb(103, 65, 65);
                color: rgb(247, 198, 198);
                border: none;
                width: 100%;
                height: 3.5rem;
                font-size: 1.2rem;
                border-radius: 0.5rem;
                ">Add to Cart</button>
            <button id="viewInCartBtn${product.id}" onclick="viewInCart(${product.id})" style="
                display: none; 
                margin-top: 5%;
                margin-bottom: 5%;
                background: #d9b0b0;
                color: rgb(103, 65, 65);
                border: none;
                width: 100%;
                height: 3.5rem;
                font-size: 1.2rem;
                border-radius: 0.5rem;

            ">View in Cart</button>
        `;
        productList.appendChild(productDiv);

        // Check and update button visibility
        checkCartStatus(product.id);
    });

    // Reset the sidebar
    updateSidebar();
}


// Function to add item to cart
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || {};

    if (cart[productId]) {
        cart[productId].quantity += 1;
    } else {
        cart[productId] = {
            item: products.find(product => product.id === productId),
            quantity: 1
        };
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    checkCartStatus(productId);
    updateSidebar();
}
window.addToCart = addToCart;
// Function to view item in cart
function viewInCart(productId) {
    // Handle navigating to the cart page or showing the cart details
    // ...

    checkCartStatus(productId);
    updateSidebar();
}
window.viewInCart = viewInCart;
// Function to check cart status on page load
function checkCartStatus(productId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    const cartItem = cart[productId];

    if (cartItem && cartItem.quantity > 0) {
        document.getElementById(`addToCartBtn${productId}`).style.display = 'none';
        document.getElementById(`viewInCartBtn${productId}`).style.display = 'inline';
    } else {
        document.getElementById(`addToCartBtn${productId}`).style.display = 'inline';
        document.getElementById(`viewInCartBtn${productId}`).style.display = 'none';
    }
}

// Check cart status for each product on page load
products.forEach(product => {
    checkCartStatus(product.id);
});

// Call the updateSidebar function on page load
updateSidebar();

// Function to remove item from the cart
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || {};
    delete cart[productId];
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update button visibility in the product list
    updateCartButtons(productId);

    // Update the sidebar
    updateSidebar();
}

// Function to increment quantity of an item in the cart
function incrementQuantity(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || {};
    if (cart[productId] && cart[productId].quantity > 0) {
        cart[productId].quantity += 1;
        localStorage.setItem('cart', JSON.stringify(cart));

        // Update the sidebar
        updateSidebar();
    }
}
window.incrementQuantity = incrementQuantity;

// Function to decrement quantity of an item in the cart
function decrementQuantity(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || {};
    if (cart[productId] && cart[productId].quantity > 1) {
        cart[productId].quantity -= 1;
        localStorage.setItem('cart', JSON.stringify(cart));

        // Update the sidebar
        updateSidebar();
    } else {
        // Remove item if quantity becomes 0
        removeFromCart(productId);
    }
}
window.decrementQuantity = decrementQuantity;

// Function to calculate the total price of items in the cart
function calculateTotalPrice(cartItems) {
    return cartItems.reduce((total, item) => total + item.item.price * item.quantity, 0);
}

// Function to update cart buttons based on cart status
function updateCartButtons(productId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    const cartItem = cart[productId];

    // Update button visibility
    if (cartItem && cartItem.quantity > 0) {
        document.getElementById(`addToCartBtn${productId}`).style.display = 'none';
        document.getElementById(`viewInCartBtn${productId}`).style.display = 'inline';
    } else {
        document.getElementById(`addToCartBtn${productId}`).style.display = 'inline';
        document.getElementById(`viewInCartBtn${productId}`).style.display = 'none';
    }
}

// Function to update the sidebar with cart items
function updateSidebar() {
    const cartItemsList = document.querySelector(".cart_wraper");
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    const cartItems = Object.values(cart);
    const numview = document.querySelector(".cartno");
    numview.innerText = `${cartItems.length}`;
    // Clear existing cart items
    cartItemsList.innerHTML = '';

    if (cartItems.length === 0) {
        const emptyCartMessage = document.createElement('p');
        emptyCartMessage.textContent = 'Your shopping cart is empty.';
        cartItemsList.appendChild(emptyCartMessage);
    } else {
        const cartHTML = cartItems.map(item => {
            return `
        <div class="cart_display">
        <div class="cd_wraper">
            <div class="cart_div_item">
                <img class="img_cart" src="${item.item.img}" alt="">
                <p class="item_cart_title">${item.item.title}</p>
                <p class="total_price" ><i class="uil uil-rupee-sign"></i>${item.item.price * item.quantity}</p>
                <div class="counter_item">
                 
                    <button class="minus_cart" onclick="decrementQuantity(${item.item.id})" ${item.quantity === 1 ? 'disabled' : ''}>-</button>
                    <p class="dis_cart" >${item.quantity}</p>
                  
                    <button class="plus_cart" onclick="incrementQuantity(${item.item.id})" ${item.quantity === 12 ? 'disabled' : ''}>+</button>
                </div>
                <button onclick="removeFromCart(${item.item.id})" class="timesx"><i class="uil uil-trash-alt"></i></button>
            </div>
        </div>
    </div>
        `;
        });
        // Update the DOM with the generated content
        cartItemsList.innerHTML = cartHTML.join('');
    }


    // Calculate and display the total price
    const totalPrice = calculateTotalPrice(cartItems);
    const tprice = document.querySelector(".totalprice");
    tprice.innerHTML = `<i class="uil uil-rupee-sign"></i>${totalPrice}`;
}
// Call the updateSidebar function on page load
updateSidebar();
