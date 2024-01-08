import * as carditem from "./api/card.js";
const card = carditem.card;



// filter item
let filteredItems = [];

// Function to filter items based on category
function filteritem(catitem = "All", button) {
    const buttons = document.querySelectorAll('.categories button');

    buttons.forEach(btn => {
        if (btn === button) {
            btn.classList.add('alactive');
            btn.classList.remove('category');
        } else {
            btn.classList.remove('alactive');
            btn.classList.add('category');
        }
    });

    filteredItems = card.filter((culEl) => {
        if (catitem === "All") {
            // Display all items when category is "All"
            return true;
        } else {
            // Display items that match the selected category
            return culEl.category === catitem;
        }
    });

    // Call the function to update displayed items
    updateDisplay();
}
window.filteritem = filteritem;




// ---------------------------------------------------------------------------

// Function to update displayed items
function updateDisplay() {
    const cardct = document.querySelector(".m2");

    if (filteredItems.length === 0) {
        filteredItems = card;
    }
    // Use filteredItems to display items
    const display = filteredItems.map((item, index) => {
        return `
        <div class="s2">
            <div class="pici"><img src=${item.img} alt=""></div>
            <p><img id="star" src="./src/star.svg">&nbsp ${item.rate}</p>
            <p>${item.title}</p>
            <p>${item.des}</p>
            <p id="price"><i class="uil uil-rupee-sign"></i>${item.price}</p>
            <button class="btn5"> Add to Cart &nbsp <i class="uil uil-shopping-cart"></i></button>
        </div>
        `;
    });

    cardct.innerHTML = display.join("");
    // Add event listener for "View in Cart" buttons
    cardct.querySelectorAll('.btn5').forEach((button, index) => {
        button.addEventListener('click', function() {
            addtocart(index);
        });
    });
}

updateDisplay();


const fav = document.querySelector(".swiper-wrapper");
const dsfav = card.map((item, index) => {
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


// add to cart
let cart_num = document.querySelector(".cartno")
let itemno = 0;
const cartButtons = document.querySelectorAll(".btn5");

let list = [];
const cart_data = document.querySelector(".cart_wraper");
const totalpricese = document.querySelector(".totalprice");

function addtocart(key) {
    let sum = 0;
    const cartButton = cartButtons[key];

    if (!cartButton.classList.contains('add_cart')) {
        list.push({ ...card[key] });

        for (let k = 0; k < list.length; k++) {
            sum = sum + list[k].price;
        }

        cartButton.classList.add("add_cart");
        cartButton.innerHTML = `View in Cart`; // Corrected the capitalization
        totalpricese.innerHTML = `<i class="uil uil-rupee-sign"></i>${sum}`;
        displaycart(cartButton);
        itemno++;
        cart_num.innerHTML = itemno;

        // Store the updated cart in local storage
        localStorage.setItem('cart', JSON.stringify(list));
    } else {
        alert("Item already in cart");
    }
}
window.addtocart = addtocart;




function displaycart(cartButton) {
    if (list.length === 0) {
        cart_data.innerHTML = "Your cart is empty";
    } else {
        const cartHTML = list.map((item, index) => {
            return `
                <div class="cart_display">
                    <div class="cd_wraper">
                        <div class="cart_div_item">
                            <img class="img_cart" src="${item.img}" alt="">
                            <p class="item_cart_title">${item.title}</p>
                            <p class="total_price" data-index="${index}"><i class="uil uil-rupee-sign"></i>${item.price}</p>
                            <div class="counter_item">
                                <button class="minus_cart" data-index="${index}">-</button>
                                <p class="dis_cart" data-index="${index}">01</p>
                                <button class="plus_cart" data-index="${index}">+</button>
                            </div>
                            <button class="timesx"><i class="uil uil-trash-alt"></i></button>
                        </div>
                    </div>
                </div>
            `;
        });
        cart_data.innerHTML = cartHTML.join("");

        // cart counter
        const minus_carts = document.querySelectorAll(".minus_cart");
        const dis_carts = document.querySelectorAll(".dis_cart");
        const plus_carts = document.querySelectorAll(".plus_cart");
        const total_prices = document.querySelectorAll(".total_price");
        minus_carts.forEach((minus_cart, index) => {
            minus_cart.addEventListener('click', () => {
                let counter = parseInt(dis_carts[index].innerText, 10) || 0;
                if (counter > 1) {
                    counter--;
                    dis_carts[index].innerText = (counter < 10) ? "0" + counter : counter;
                    updateTotalPrice(index, counter);
                    updateTotal()
                }
            });
        });

        // remove from cart
        const timesx = document.querySelectorAll(".timesx");

        timesx.forEach((timesx, index) => {
            timesx.addEventListener('click', () => {
                // Remove the item at the current index
                const removedItem = list[index];

                list.splice(index, 1);
                displaycart();
                updateTotal();
                itemno--;
                cart_num.innerHTML = itemno;

                // Find the index of the removedItem in the original card array
                const originalIndex = card.findIndex(item => item.id === removedItem.id);

                // Change button text back to "Add to Cart" for the corresponding button
                cartButtons[originalIndex].classList.remove("add_cart");
                cartButtons[originalIndex].innerHTML = `Add to Cart &nbsp <i class="uil uil-shopping-cart"></i>`;
            });
        });

        plus_carts.forEach((plus_cart, index) => {
            plus_cart.addEventListener('click', () => {
                let counter = parseInt(dis_carts[index].innerText, 10) || 0;
                if (counter < 12) {
                    counter++;
                    dis_carts[index].innerText = (counter < 10) ? "0" + counter : counter;
                    updateTotalPrice(index, counter);
                    updateTotal();
                }
            });
        });
        function updateTotalPrice(index, counter) {
            const item = list[index];
            const totalPriceElement = total_prices[index];
            const totalPrice = item.price * counter;
            totalPriceElement.innerHTML = `<i class="uil uil-rupee-sign"></i>${totalPrice}`;
        }
        function updateTotal() {
            let sum = 0;
            for (let k = 0; k < list.length; k++) {
                sum = sum + (parseInt(dis_carts[k].innerText, 10) || 0) * list[k].price;
            }
            totalpricese.innerHTML = `<i class="uil uil-rupee-sign"></i>${sum}`;
        }
    }
}



document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    var reservationForm = document.getElementById('reservationForm');
    var btnSubmit = document.getElementById('btns4');


    reservationForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Handle form submission...
    });
    function reset() {
        // Clear all form fields
        reservationForm.reset();
    }
    window.reset = reset;
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

// Function to calculate the total price of items in the cart
function calculateTotalPrice() {
    let sum = 0;
    for (let k = 0; k < list.length; k++) {
        sum = sum + (parseInt(dis_carts[k].innerText, 10) || 0) * list[k].price;
    }
    return sum;
}

window.onload = function () {
    fadeOut();

    // Load the cart from local storage and update the display
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        try {
            list = JSON.parse(storedCart);
            itemno = list.length;
            cart_num.innerHTML = itemno;
            totalpricese.innerHTML = calculateTotalPrice();
            displaycart(); // Update the cart display

            // Log the items in the console
            console.log('Items in local storage:', list);
        } catch (error) {
            console.error('Error parsing items from local storage:', error);
        }
    }
}



