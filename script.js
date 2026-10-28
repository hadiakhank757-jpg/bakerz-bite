
// Menu Button
function toggleMenu() {
    let menu = document.getElementById("navMenu");

    menu.classList.toggle("active");
}

// Live Time

let currentTime = document.getElementById("currentTime");

function getTime() {

    let clock = new Date();

    let H = clock.getHours();
    let M = clock.getMinutes();
    let S = clock.getSeconds();

    currentTime.innerHTML = `${H} : ${M} : ${S}`;
}

// open location popup 

function openLocationPopup() {

    document
        .getElementById("locationPopup")
        .classList.add("show");

}

// close location popup 

function closeLocationPopup() {

    document
        .getElementById("locationPopup")
        .classList.remove("show");

}

// areas 
let areas = [
    "Gulshan-e-Iqbal",
    "Gulistan-e-Johar",
    "North Nazimabad",
    "Nazimabad",
    "PECHS",
    "Clifton",
    "DHA",
    "Bahadurabad",
    "Federal B Area",
    "North Karachi",
    "Malir",
    "Korangi",
    "Landhi",
    "Saddar",
    "Tariq Road",
    "Defence View",
    "Johar Town",
    "Scheme 33",
    "Buffer Zone",
    "Surjani Town"
];

let select = document.getElementById("areaSelect");

areas.forEach(area => {

    let option =
        document.createElement("option");


    option.value = area;

    option.textContent = area;


    select.appendChild(option);

});

//  select location 

function confirmLocation() {

    let selectedArea =
        document.getElementById("areaSelect").value;


    if (selectedArea === "") {

        alert("Please select your location.");

        return;

    }


    /* Show selected area in navbar */

    document.getElementById("display").innerText =
        selectedArea;


    /* Close popup */

    closeLocationPopup();

}
// delevry buttons 
let deliveryBtn =
    document.getElementById("deliveryBtn");

let pickupBtn =
    document.getElementById("pickupBtn");


deliveryBtn.addEventListener("click", function () {

    deliveryBtn.classList.add("active");

    pickupBtn.classList.remove("active");

});


pickupBtn.addEventListener("click", function () {

    pickupBtn.classList.add("active");

    deliveryBtn.classList.remove("active");

});


//    CLOSE POPUP WHEN CLICKING OUTSIDE

document
    .getElementById("locationPopup")
    .addEventListener("click", function (event) {

        if (event.target === this) {

            closeLocationPopup();

        }

    });

// Live Date

let currentDate = document.getElementById("currentDate");

function getDate() {

    let clock = new Date();

    let day = clock.getDay();
    let Y = clock.getFullYear();
    let m = clock.getMonth();
    let D = clock.getDate();

    m++;

    switch (day) {

        case 0:
            day = "Sunday";
            break;

        case 1:
            day = "Monday";
            break;

        case 2:
            day = "Tuesday";
            break;

        case 3:
            day = "Wednesday";
            break;

        case 4:
            day = "Thursday";
            break;

        case 5:
            day = "Friday";
            break;

        case 6:
            day = "Saturday";
            break;
    }

    currentDate.innerHTML = `${day}, ${m} / ${D} / ${Y}`;
}


// Run functions

setInterval(getTime, 1000);

getTime();
getDate();

// Get Location

let locationText = document.getElementById("location");

function getLocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(showPosition);

    } else {

        locationText.innerHTML = "Location not supported";
    }
}

function showPosition(position) {

    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    locationText.innerHTML =
        `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
}

getLocation();


// Cake Prices
let prices = {
    1: 2780,
    2: 3000,
    3: 2500,
    4: 3200,
    5: 2800,
    6: 3500,
    7: 2730,
    8: 3100
};


// Increase Quantity
function increase(id) {

    let qty = document.getElementById("qty" + id);
    let total = document.getElementById("total" + id);

    let number = Number(qty.innerText);

    number++;

    qty.innerText = number;

    total.innerText = prices[id] * number;
}


// Decrease Quantity
function decrease(id) {

    let qty = document.getElementById("qty" + id);
    let total = document.getElementById("total" + id);

    let number = Number(qty.innerText);

    if (number > 1) {

        number--;

        qty.innerText = number;

        total.innerText = prices[id] * number;
    }
}
// Delete / Reset
function removeItem(id) {

    let qty = document.getElementById("qty" + id);
    let total = document.getElementById("total" + id);

    qty.innerText = 1;
    total.innerText = prices[id];
}

// Add to Cart
function addCart(name, price, id) {

    let qty = document.getElementById("qty" + id).innerText;

    let total = document.getElementById("total" + id).innerText;


}

// savory
let savoryprices = {
    1: 270,
    2: 200,
    3: 250,
    4: 100,
    5: 280,
    6: 350,
    7: 270,
    8: 300
};

function increaseSavory(id) {
    let qty = document.getElementById("sqty" + id);
    let total = document.getElementById("stotal" + id);

    let number = Number(qty.innerText);

    number++;

    qty.innerText = number;
    total.innerText = savoryprices[id] * number;
}

function decreaseSavory(id) {
    let qty = document.getElementById("sqty" + id);
    let total = document.getElementById("stotal" + id);

    let number = Number(qty.innerText);

    if (number > 1) {
        number--;

        qty.innerText = number;
        total.innerText = savoryprices[id] * number;
    }
}

function removeSavoryItem(id) {
    let qty = document.getElementById("sqty" + id);
    let total = document.getElementById("stotal" + id);

    qty.innerText = 1;
    total.innerText = savoryprices[id];
}

function addSavoryCart(name, id) {
    let qty = document.getElementById("sqty" + id).innerText;
    let total = document.getElementById("stotal" + id).innerText;


}

// cupcake & brownie 
let cupprices = {
    1: 180,
    2: 200,
    3: 220,
    4: 210,
    5: 280,
    6: 200,
    7: 270,
    8: 220
};

function increasecup(id) {
    let qty = document.getElementById("bqty" + id);
    let total = document.getElementById("btotal" + id);

    let number = Number(qty.innerText);
    number++;
    qty.innerText = number;
    total.innerText = cupprices[id] * number;
}

function decreasecup(id) {
    let qty = document.getElementById("bqty" + id);
    let total = document.getElementById("btotal" + id);

    let number = Number(qty.innerText);

    if (number > 1) {
        number--;

        qty.innerText = number;
        total.innerText = cupprices[id] * number;
    }
}

function removecupItem(id) {
    let qty = document.getElementById("bqty" + id);
    let total = document.getElementById("btotal" + id);

    qty.innerText = 1;
    total.innerText = cupprices[id];
}

function addcupCart(name, id) {
    let qty = document.getElementById("bqty" + id).innerText;
    let total = document.getElementById("btotal" + id).innerText;


}

//shake
let shakeprices = {
    1: 550,
    2: 400,
    3: 500,
    4: 350

};

function increaseshake(id) {
    let qty = document.getElementById("pqty" + id);
    let total = document.getElementById("ptotal" + id);

    let number = Number(qty.innerText);

    number++;

    qty.innerText = number;
    total.innerText = shakeprices[id] * number;
}

function decreaseshake(id) {
    let qty = document.getElementById("pqty" + id);
    let total = document.getElementById("ptotal" + id);

    let number = Number(qty.innerText);

    if (number > 1) {
        number--;

        qty.innerText = number;
        total.innerText = shakeprices[id] * number;
    }
}

function removeshakeItem(id) {
    let qty = document.getElementById("pqty" + id);
    let total = document.getElementById("ptotal" + id);

    qty.innerText = 1;
    total.innerText = shakeprices[id];
}

function addshakeCart(name, id) {
    let qty = document.getElementById("pqty" + id).innerText;
    let total = document.getElementById("ptotal" + id).innerText;


}

// coffee 

let coffeeprices = {
    1: 400,
    2: 500,
    3: 450,
    4: 620,
    5: 800,
    6: 700,
    7: 730,
    8: 480

};

function increasecoffee(id) {
    let qty = document.getElementById("aqty" + id);
    let total = document.getElementById("atotal" + id);

    let number = Number(qty.innerText);

    number++;

    qty.innerText = number;
    total.innerText = coffeeprices[id] * number;
}

function decreasecoffee(id) {
    let qty = document.getElementById("aqty" + id);
    let total = document.getElementById("atotal" + id);

    let number = Number(qty.innerText);

    if (number > 1) {
        number--;

        qty.innerText = number;
        total.innerText = coffeeprices[id] * number;
    }
}

function removecoffeeItem(id) {
    let qty = document.getElementById("aqty" + id);
    let total = document.getElementById("atotal" + id);

    qty.innerText = 1;
    total.innerText = coffeeprices[id];
}

function addcoffeeCart(name, id) {
    let qty = document.getElementById("aqty" + id).innerText;
    let total = document.getElementById("atotal" + id).innerText;


}

// customized cake 
let customprices = {
    1: 11550,
    2: 22400,
    3: 11500,
    4: 12350


};

function increasecustom(id) {
    let qty = document.getElementById("fqty" + id);
    let total = document.getElementById("ftotal" + id);

    let number = Number(qty.innerText);

    number++;

    qty.innerText = number;
    total.innerText = customprices[id] * number;
}

function decreasecustom(id) {
    let qty = document.getElementById("fqty" + id);
    let total = document.getElementById("ftotal" + id);

    let number = Number(qty.innerText);

    if (number > 1) {
        number--;

        qty.innerText = number;
        total.innerText = customprices[id] * number;
    }
}

function removecustomItem(id) {
    let qty = document.getElementById("fqty" + id);
    let total = document.getElementById("ftotal" + id);

    qty.innerText = 1;
    total.innerText = customprices[id];
}

function addcustomeCart(name, id) {
    let qty = document.getElementById("fqty" + id).innerText;
    let total = document.getElementById("ftotal" + id).innerText;
}


const modalData = [
    { id: "#mug", price: 600, count: 1 },
    { id: "#tumbler", price: 1500, count: 1 },
    { id: "#spoons", price: 900, count: 1 },
    { id: "#cakebox", price: 300, count: 1 },
    { id: "#cap", price: 300, count: 1 },
    { id: "#bag", price: 900, count: 1 }
];

let plus = document.querySelectorAll(".plus");
let minus = document.querySelectorAll(".minus");
let qty = document.querySelectorAll(".qty");
let total = document.querySelectorAll(".total");


// starting quantity and total
modalData.forEach((product, index) => {

    qty[index].innerText = product.count;
    total[index].innerText = product.price;

});


// PLUS
plus.forEach((button, index) => {

    button.addEventListener("click", () => {

        modalData[index].count++;

        qty[index].innerText = modalData[index].count;

        totalPrice(index);

    });

});


// MINUS
minus.forEach((button, index) => {

    button.addEventListener("click", () => {

        if (modalData[index].count > 1) {

            modalData[index].count--;

            qty[index].innerText = modalData[index].count;

            totalPrice(index);

        }

    });

});

// TOTAL
function totalPrice(index) {

    total[index].innerText =
        modalData[index].price * modalData[index].count;

}

// feedback and testimonal 
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("feedbackForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("Email");
    const feedbackInput = document.getElementById("feedback");

    const starsContainer = document.getElementById("starsContainer");
    const stars = starsContainer.getElementsByTagName("i");

    const carouselContainer = document.getElementById("testimonialCarousel");
    const carouselInner = document.getElementById("carouselInner");
    const indicators = document.getElementById("carouselIndicators");

    let selectedRating = 0;

    loadReviewsFromStorage();


    for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.style.cursor = "pointer";

        star.addEventListener("click", function () {
            selectedRating = Number(this.getAttribute("data-value"));
            updateStarsDisplay(selectedRating);
        });


        star.addEventListener("mouseenter", function () {
            updateStarsDisplay(Number(this.getAttribute("data-value")));
        });
    }


    starsContainer.addEventListener("mouseleave", function () {
        updateStarsDisplay(selectedRating);
    });

    function updateStarsDisplay(rating) {
        for (let i = 0; i < stars.length; i++) {
            const star = stars[i];
            const starValue = Number(star.getAttribute("data-value"));

            if (starValue <= rating) {
                star.className = "fa-solid fa-star";
            } else {
                star.className = "fa-regular fa-star";
            }
        }
    }


    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim().toLowerCase();
        const feedback = feedbackInput.value.trim();


        if (name === "" || email === "" || feedback === "") {
            showAlert("Missing Information", "Please fill in all fields before submitting.", "warning");
            return;
        }

        if (selectedRating === 0) {
            showAlert("Rating Required", "Please select a star rating using the stars.", "warning");
            return;
        }


        const newReview = {
            name: name,
            feedback: feedback,
            rating: selectedRating
        };


        saveReviewToStorage(newReview);


        loadReviewsFromStorage();


        form.reset();
        selectedRating = 0;
        updateStarsDisplay(0);

        showAlert("Thank You!", "Your feedback has been submitted successfully.", "success");
    });


    function saveReviewToStorage(reviewData) {
        let existingReviews = JSON.parse(localStorage.getItem("savedReviews")) || [];
        existingReviews.push(reviewData);
        localStorage.setItem("savedReviews", JSON.stringify(existingReviews));
    }

    function loadReviewsFromStorage() {
        let existingReviews = JSON.parse(localStorage.getItem("savedReviews"));


        if (existingReviews === null || existingReviews.length === 0) {
            existingReviews = [
                {
                    name: "Sarah Khan",
                    feedback: "The chocolate cake was absolutely delicious! It was fresh, soft and beautifully decorated.",
                    rating: 5
                },
                {
                    name: "Ayesha Ahmed",
                    feedback: "Bakerz Bite has the best pastries. Everything tasted fresh and amazing.",
                    rating: 5
                },
                {
                    name: "Hassan Ali",
                    feedback: "I ordered a birthday cake and everyone loved it. Beautiful presentation and great taste!",
                    rating: 4
                }
            ];
            localStorage.setItem("savedReviews", JSON.stringify(existingReviews));
        }


        carouselInner.innerHTML = "";
        indicators.innerHTML = "";


        for (let i = 0; i < existingReviews.length; i++) {
            const isFirstItem = (i === 0);
            appendReviewToCarousel(existingReviews[i], isFirstItem, i);
        }


        if (typeof bootstrap !== "undefined" && existingReviews.length > 0) {
            const oldInstance = bootstrap.Carousel.getInstance(carouselContainer);
            if (oldInstance) {
                oldInstance.dispose();
            }
            new bootstrap.Carousel(carouselContainer);
        }
    }

    function appendReviewToCarousel(data, shouldBeActive, index) {
        const starHTML = "★".repeat(data.rating) + "☆".repeat(5 - data.rating);


        const slideDiv = document.createElement("div");
        slideDiv.className = "carousel-item";
        if (shouldBeActive) {
            slideDiv.classList.add("active");
        }

        slideDiv.innerHTML = `
            <div class="testimonial-card">
                <div class="stars">${starHTML}</div>
                <p>"${data.feedback}"</p>
                <h5>${data.name}</h5>
                <span>Happy Customer</span>
            </div>
        `;
        carouselInner.appendChild(slideDiv);

        const indicatorBtn = document.createElement("button");
        indicatorBtn.type = "button";
        indicatorBtn.setAttribute("data-bs-target", "#testimonialCarousel");
        indicatorBtn.setAttribute("data-bs-slide-to", index);
        indicatorBtn.setAttribute("aria-label", "Testimonial " + (index + 1));

        if (shouldBeActive) {
            indicatorBtn.className = "active";
            indicatorBtn.setAttribute("aria-current", "true");
        }

        indicators.appendChild(indicatorBtn);
    }

    function showAlert(titleText, bodyText, iconType) {
        if (typeof Swal !== "undefined") {
            Swal.fire({
                title: titleText,
                text: bodyText,
                icon: iconType,
                background: "#120b18",
                color: '#ffffff',
                confirmButtonText: 'OK',
                confirmButtonColor: '#dea347'
            });
        } else {
            alert(titleText + "\n\n" + bodyText);
        }
    }

});

// categry search scroll 

document.addEventListener("DOMContentLoaded", function () {

    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");

    if (!searchForm || !searchInput || !categoryFilter) {
        return;
    }

    // Category value to HTML section ID mapping
    const categoryToSectionId = {
        "cakes": "cake",
        "savories": "savory",
        "cupcakes": "brownies",
        "shakes": "shake",
        "coffee": "coffee",
        "custom cakes": "customized",
        "merchandise": "merchandise"
    };

    // Helper function to highlight matching element briefly
    function highlightCard(card) {
        card.style.transition = "transform 0.4s ease, box-shadow 0.4s ease";
        card.style.transform = "scale(1.05)";
        card.style.boxShadow = "0 0 20px #dea347";

        setTimeout(function () {
            card.style.transform = "";
            card.style.boxShadow = "";
        }, 2000);
    }

    // Filter & Scroll Logic
    function handleNavigationAndHighlight() {
        const selectedCategory = categoryFilter.value.toLowerCase();
        const searchText = searchInput.value.trim().toLowerCase();

        // 1. If Category selected, scroll directly to that section ID
        if (selectedCategory !== "all" && categoryToSectionId[selectedCategory]) {
            const sectionId = categoryToSectionId[selectedCategory];
            const targetSection = document.getElementById(sectionId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
                return;
            }
        }

        // 2. If Search text is entered, find the first matching card and scroll to it
        if (searchText !== "") {
            let allCards = document.querySelectorAll(".bakery-card, .merchandise .box");
            let foundMatch = null;

            allCards.forEach(function (card) {
                if (foundMatch) return;
                const name = card.innerText.toLowerCase();
                if (name.includes(searchText)) {
                    foundMatch = card;
                }
            });

            if (foundMatch) {
                foundMatch.scrollIntoView({ behavior: "smooth", block: "center" });
                highlightCard(foundMatch);
            }
        }
    }

    // Event Listeners
    categoryFilter.addEventListener("change", handleNavigationAndHighlight);

    searchForm.addEventListener("submit", function (e) {
        e.preventDefault();
        handleNavigationAndHighlight();
    });
});


//  CART COUNT
let totalCartItems = 0;

document.addEventListener("click", function (event) {

    // Find Add to Cart button
    const button = event.target.closest(".add-to-cart-btn");

    if (!button) return;

    // Find cart count element
    const cartCountElement = document.getElementById("cart-count");

    if (!cartCountElement) return;

    // Find modal
    const modal = button.closest(".modal");

    // Default quantity
    let quantity = 1;

    // Get quantity from modal
    if (modal) {
        const qtyElement = modal.querySelector(".qty");

        if (qtyElement) {
            quantity = Number(qtyElement.innerText) || 1;
        }

        // Close modal
        if (window.bootstrap) {
            const instance = bootstrap.Modal.getInstance(modal);

            if (instance) {
                instance.hide();
            }
        }
    }

    // Increase cart count
    totalCartItems += quantity;

    cartCountElement.innerText = totalCartItems;

    // SweetAlert success message
    if (typeof Swal !== "undefined") {
        Swal.fire({
            icon: "success",
            title: "Added to Cart!",
            text: "Your product has been added successfully.",
            confirmButtonColor: "#3b123c"
        });
    }

});

// cart side bar 
let bakerzCartItemsArray = [];

document.addEventListener("DOMContentLoaded", function () {
    const bakerzCartTrigger = document.querySelector(".cart");
    const bakerzCartSidebar = document.getElementById("bakerzCartSidebar");
    const bakerzCartOverlay = document.getElementById("bakerzCartOverlay");
    const bakerzCartClose = document.getElementById("bakerzCartClose");

    // Open sidebar when clicking the navbar cart icon[cite: 1, 2]
    if (bakerzCartTrigger) {
        bakerzCartTrigger.addEventListener("click", function () {
            bakerzCartSidebar.classList.add("bakerz-open");
            bakerzCartOverlay.classList.add("bakerz-open");
        });
    }

    // Close sidebar actions
    if (bakerzCartClose) {
        bakerzCartClose.addEventListener("click", function () {
            bakerzCartSidebar.classList.remove("bakerz-open");
            bakerzCartOverlay.classList.remove("bakerz-open");
        });
    }

    if (bakerzCartOverlay) {
        bakerzCartOverlay.addEventListener("click", function () {
            bakerzCartSidebar.classList.remove("bakerz-open");
            bakerzCartOverlay.classList.remove("bakerz-open");
        });
    }

    // Capture product info when any add-to-cart button is clicked
    document.addEventListener("click", function (event) {
        const targetBtn = event.target.closest(".add-to-cart-btn, .cart-btn");
        if (!targetBtn) return;

        let itemName = "Bakery Item";
        let itemPrice = 0;
        let itemQty = 1;

        // Check if inside a modal
        const parentModal = targetBtn.closest(".modal");
        if (parentModal) {
            const titleEl = parentModal.querySelector("h1");
            const priceEl = parentModal.querySelector("h2, .modalprice");
            const qtyEl = parentModal.querySelector(".qty, [id^='qty'], [id^='sqty'], [id^='bqty'], [id^='pqty'], [id^='aqty'], [id^='fqty']");

            if (titleEl) itemName = titleEl.innerText.trim();
            if (priceEl) {
                let pText = priceEl.innerText.replace(/[^0-9]/g, "");
                itemPrice = Number(pText) || 0;
            }
            if (qtyEl) {
                itemQty = Number(qtyEl.innerText) || 1;
            }
        } else {
            // Merchandise card fallback
            const boxCard = targetBtn.closest(".box");
            if (boxCard) {
                const titleEl = boxCard.querySelector(".main-heading");
                const priceEl = boxCard.querySelector(".price");
                if (titleEl) itemName = titleEl.innerText.trim();
                if (priceEl) {
                    let pText = priceEl.innerText.replace(/[^0-9]/g, "");
                    itemPrice = Number(pText) || 0;
                }
            }
        }

        // Set or update item exact quantity in the cart array (no double-adding)
        const existingIndex = bakerzCartItemsArray.findIndex(item => item.name === itemName);
        if (existingIndex > -1) {
            bakerzCartItemsArray[existingIndex].qty = itemQty;
        } else {
            bakerzCartItemsArray.push({
                name: itemName,
                price: itemPrice,
                qty: itemQty
            });
        }

        renderBakerzCartSidebar();
    });
});

function renderBakerzCartSidebar() {
    const bodyContainer = document.getElementById("bakerzCartBody");
    const totalAmountEl = document.getElementById("bakerzCartTotalAmount");

    if (!bodyContainer || !totalAmountEl) return;

    if (bakerzCartItemsArray.length === 0) {
        bodyContainer.innerHTML = `<p class="bakerz-empty-msg">Your cart is currently empty.</p>`;
        totalAmountEl.innerText = `Rs. 0`;
        return;
    }

    let htmlContent = "";
    let grandTotal = 0;

    bakerzCartItemsArray.forEach((item, index) => {
        let itemTotal = item.price * item.qty;
        grandTotal += itemTotal;

        htmlContent += `
            <div class="bakerz-cart-item">
                <div class="bakerz-item-info">
                    <h4>${item.name}</h4>
                    <p>Qty: ${item.qty} × Rs. ${item.price} = <strong>Rs. ${itemTotal}</strong></p>
                </div>
                <button type="button" class="bakerz-item-remove" onclick="removeBakerzCartItem(${index})"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
    });

    bodyContainer.innerHTML = htmlContent;
    totalAmountEl.innerText = `Rs. ${grandTotal}`;
}

function removeBakerzCartItem(index) {
    bakerzCartItemsArray.splice(index, 1);
    renderBakerzCartSidebar();
}

function bakerzCheckoutAction() {
    if (bakerzCartItemsArray.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    if (typeof Swal !== "undefined") {
        Swal.fire({
            title: "Order Placed Successfully!",
            text: "Thank you for shopping with Bakerz Bite!",
            icon: "success",
            background: "#120b18",
            color: "#ffffff",
            confirmButtonColor: "#dea347"
        });
    } else {
        alert("Order placed successfully!");
    }
    bakerzCartItemsArray = [];
    renderBakerzCartSidebar();
    document.getElementById("bakerzCartSidebar").classList.remove("bakerz-open");
    document.getElementById("bakerzCartOverlay").classList.remove("bakerz-open");
}

// upside button 
// tick
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});