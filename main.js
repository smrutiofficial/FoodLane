const card = [
    {
        id: 1,
        img: "./src/dish/1.jpg",
        title: "Dal Makhani",
        des: "Rich Black lentil delicacy, prepared with lushes tomato gravy, cream and butter served with choice of breads or rice served with choice of breads or rice.",
        price: 219,
        featured: false,
        rate: "3.9(54)"
    },
    {
        id: 2,
        img: "./src/dish/2.png",
        title: "Spicy Mix Vegetable",
        des: "Seasonal vegetables tossed in rich indian spices",
        price: 149,
        featured: false,
        rate: "4.4(88)"
    },
    {
        id: 3,
        img: "./src/dish/5.jpg",
        title: "Masala Soya Chaap",
        des: "Soya chaap cooked with aromatic spices,onion & tomato gravy",
        price: 279,
        featured: false,
        rate: "4.7(30)"
    },
    {
        id: 4,
        img: "./src/dish/4.jpg",
        title: "Paneer Butter Masala",
        des: "Rich and spicy tomato Makhani Gravy with Cottage cheese finished with Butter",
        price: 279,
        featured: false,
        rate: "4.3(43)"
    },
    {
        id: 5,
        img: "./src/dish/6.jpg",
        title: "Pao Bhaji",
        des: "Mumbai Style Spicy Mashed Vegetables Served With Buttery Bread Roll",
        price: 199,
        featured: false,
        rate: "4.3(75)"
    },
    {
        id: 6,
        img: "./src/dish/7.jpg",
        title: "Butter Chicken",
        des: "Smooth and rich tomato based makhani gravy with cream and butter with tandoori chicken",
        price: 349,
        featured: true,
        rate: "4.0(88)"
    },
    {
        id: 7,
        img: "./src/dish/8.jpg",
        title: "Special Veg Thali",
        des: "(Dal Makhani+ Paneer Of The Day+ Mix Veg + Raita + Rice+ 1 Butter Naan + 1 Butter Roti+ Gulab Jamun+ Salad)",
        price: 419,
        featured: false,
        rate: "3.9(165)"
    },
    {
        id: 8,
        img: "./src/dish/9.jpg",
        title: "Tangri Kebab",
        des: "Tender and succulent chicken drumstick, tandoori masala marination.",
        price: 399,
        featured: false,
        rate: "4.3(131)"
    },
    {
        id: 9,
        img: "./src/dish/10.jpg",
        title: "Punjabi Chole",
        des: "A classic dish from the Punjab, which is flavoured with a large assortment of spice powders.",
        price: 219,
        featured: true,
        rate: "3.8(58)"
    },
    {
        id: 10,
        img: "./src/dish/11.jpeg",
        title: "Chicken Seekh Kebab",
        des: "Chicken on bone, malai marination, cooked in tandoor.",
        price: 369,
        featured: false,
        rate: "4.8(64)"
    },
    {
        id: 11,
        img: "./src/dish/12.jpg",
        title: "Dum Chicken Biryani Served With Raita & Salad",
        des: "Traditional slow cooked, flavoursome Chicken lag with Long Grain Basmati Rice Served with Raita.",
        price: 379,
        featured: false,
        rate: "4.1(170)"
    },
    {
        id: 12,
        img: "./src/dish/14.jpeg",
        title: "Butter Chicken Parantha Roll",
        des: "Authentic butter chicken wrapped in a ulta tawa",
        price: 249,
        featured: false,
        rate: "4.0(26)"
    },
    {
        id: 13,
        img: "./src/dish/15.jpeg",
        title: "Kadhai Paneer Gravy",
        des: "Prefect blend of onion tomato tadka and indian spices with Cottage Cheese and bell peppers.",
        price: 279,
        featured: false,
        rate: "4.4(64)"
    },
    {
        id: 14,
        img: "./src/dish/18.jpg",
        title: "Chilly Chicken Dry",
        des: "Made of chunks of boneless chicken mixed with dry red chilies, finely chopped ginger and garlic, onions and other Indo Chinese spices to make a spicy Indian flare dish along with the distinct traditional Chinese flavors.",
        price: 220,
        featured: true,
        rate: "3.6(745)"
    },
    {
        id: 15,
        img: "./src/dish/19.jpg",
        title: "Dragon Chicken",
        des: "Dragon chicken is a popular Indo Chinese non-vegetarian starter recipe. Dragon chicken is made from batter-fried chicken and then cooked in lots of spices.",
        price: 214,
        featured: false,
        rate: "4.1(256)"
    },
    {
        id: 16,
        img: "./src/dish/20.jpeg",
        title: "Mexican Fiesta",
        des: "Serves 1 | Flavourful mix of red capsicum, green capsicum, jalapeno, onion, black olives, sweet corn and 100% mozzarella Cheese with a signature spice sprinkle & our flavourful pan sauce.",
        price: 319,
        featured: true,
        rate: "4.3(228)"
    }
]
const cardct2 = document.querySelector(".cardct")
const display2 = card.map((item, index) => {
    var { img, title, des, price, rate, featured } = item
    if (featured == true) {
        return `
        <div class="s2">
             <div class="pici">
             <img src=${img} alt="">
             </div>
             <p>
             <img id="star" src="./src/star.svg">&nbsp
             ${rate}
             </p>
             <p>${title}</p>
             <p>${des}</p>
             <p id="price"><i class="uil uil-rupee-sign"></i>${price}</p>
             <button onClick="addtocart(${index})" class="btn5">Add to Cart &nbsp <i class="uil uil-shopping-cart"></i></button>
        </div>
        `
    }
})
cardct2.innerHTML = display2.join("");
// ---------------------------------------------------------------------------
const cardct = document.querySelector(".m2")
const display = card.map((item, index) => {
    return `
    <div class="s2">
    <div class="pici"><img src=${item.img} alt=""> </div>
    <p><img id="star" src="./src/star.svg">&nbsp ${item.rate}</p>
        <p>${item.title}</p>
        <p>${item.des}</p>
        <p id="price"><i class="uil uil-rupee-sign"></i>${item.price}</p>
        <button onClick="addtocart(${index})" class="btn5">Add to Cart &nbsp <i class="uil uil-shopping-cart"></i></button>
    </div>
    `
})
cardct.innerHTML = display
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
// counter
const minus = document.querySelector(".minus")
const plus = document.querySelector(".plus")
const num = document.querySelector(".num")
let a = 1;
plus.addEventListener('click', () => {
    if (a < 12) {
        a++;
        if (a < 10) {
            a = "0" + a
        } else {
            a
        }
    }
    // a =(a<10)? "0" + a : a;
    num.innerText = a;
})
minus.addEventListener('click', () => {
    if (a > 1) {
        a--
        a = (a < 10) ? "0" + a : a;
    } else {
        a
    }
    num.innerText = a;
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
    for (userpic of userpics) {
        userpic.classList.remove("activepic");
    }
    for (usertext of usertexts) {
        usertext.classList.remove("activetext");
    }
    let i = Array.from(userpics).indexOf(event.target);
    console.log(i);
    userpics[i].classList.add("activepic");
    usertexts[i].classList.add("activetext");
}
// add to cart
let cart_num = document.querySelector(".cartno")
let itemno = 0;
const carts = document.querySelectorAll(".btn5");
carts.forEach(cart => {
    cart.addEventListener('click', () => {
        cart.classList.add('add_cart');
        cart.innerText = `View in cart`;
        itemno++
        cart_num.innerHTML = itemno
    })
})
// cart
let snav = document.querySelector(".nav");
let cartwraper = document.querySelector(".cartsection");
function ac_cart() {
    if (cartwraper.style.display === "none") {
        cartwraper.style.display = "flex";
        snav.style.display = "none";
    } else {
        cartwraper.style.display = "none";
        snav.style.display = "flex";
    }
}
let list = [];
const cart_data = document.querySelector(".cart_wraper");
const totalpricese = document.querySelector(".totalprice");
function addtocart(key) {
    let sum = 0;
    list.push({ ...card[key] });
    for (let k = 0; k < list.length; k++) {
        sum = sum + list[k].price;
        totalpricese.innerHTML = `<i class="uil uil-rupee-sign"></i>${sum}`;
    }
    displaycart();
}
function displaycart(key) {
    let j = 0;
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
