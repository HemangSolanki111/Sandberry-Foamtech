function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll animation
    });
}

// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}

// Nav Hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapes = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapes.classList.remove("show");
    });
});


$(document).click(function (event) {
    if (!$(event.target).is('.navbar-collapse *')) {
        $('.navbar-collapse').collapse('hide');
    }
});

$(document).ready(function() {
    $('#closeNavbarBtn').click(function() {
        $('#navbarNav').collapse('hide'); // Hides the navbar when close button is clicked
    });
});



// Slider JS Home Banner
function heroSlider() {
    let nextDom = document.getElementById('next');
    let prevDom = document.getElementById('prev');
    
    let carouselDom = document.querySelector('.carousel');
    let SliderDom = carouselDom.querySelector('.carousel .list');
    let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
    let timeDom = document.querySelector('.carousel .time');
    
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    let timeRunning = 3000;
    let timeAutoNext = 7000;
    
    nextDom.onclick = function(){
        showSlider('next');    
    }
    
    prevDom.onclick = function(){
        showSlider('prev');    
    }
    let runTimeOut;
    let runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
    function showSlider(type){
        let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
        let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
        
        if(type === 'next'){
            SliderDom.appendChild(SliderItemsDom[0]);
            thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
            carouselDom.classList.add('next');
        }else{
            SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
            thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
            carouselDom.classList.add('prev');
        }
        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
            carouselDom.classList.remove('next');
            carouselDom.classList.remove('prev');
        }, timeRunning);
    
        clearTimeout(runNextAuto);
        runNextAuto = setTimeout(() => {
            next.click();
        }, timeAutoNext)
    };
}
heroSlider();


// Logo Slider
var swiper = new Swiper(".comapnyLogo", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: false,
    breakpoints: {
        375: {
            slidesPerView: 1,
            spaceBetween:10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 40,
        },
    },
});

// Testimonial  Slider
function TestimonialSlider() {
    var swiper = new Swiper(".testimonial_swiper", {
        loop: true,
        autoplay: true,
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            },
        },
    });
}
TestimonialSlider()