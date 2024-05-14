let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');
menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times')
    navbar.classList.toggle('active');
};

let searchContainer = document.querySelector('.search-container');
document.querySelector('#search-btn').onclick = () => {
    searchContainer.classList.toggle('search-btn-active');
};

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('cart-btn-active');
};

var swiper = new Swiper(".home-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".food-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    spaceBetween: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    }
});

let previewContainer = document.querySelector('.food-preview-container');
let previewBox = previewContainer.querySelectorAll('.food-preview');

document.querySelectorAll('.food .slide').forEach(food => {
    food.onclick = () => {
        previewContainer.style.display = 'flex';
        let name = food.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add("active");
            }
        })
    }
})

previewContainer.querySelector('#close-preview').onclick = () => {
    previewContainer.style.display = 'none';
    previewBox.forEach(close => {
        close.classList.remove("active");
    })
}

var swiper = new Swiper(".menu-slider", {
    grabCursor: true,
    loop: true,
    auotHeight: true,
    centeredSlides: true,
    spaceBetween: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

var swiper = new Swiper(".blogs-slider", {
    grabCursor: true,
    loop: true,
    auotHeight: true,
    centeredSlides: true,
    spaceBetween: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    }
});
