const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; //自动翻页
const intervalTime = 5000; //间隔时间
let slideInterval;

const nextSlide = function () {
    //get current class
    const current = document.querySelector('.current');

    if (current.nextElementSibling) {
        // add current to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        // add current to start
        slides[0].classList.add('current');
    }
    //clear current
    setTimeout(() => current.classList.remove('current'));
};

const prevSlide = function () {
    //get current class
    const current = document.querySelector('.current');

    if (current.previousElementSibling) {
        // add current to prev sibling
        current.previousElementSibling.classList.add('current');
    } else {
        // add current to end
        slides[slides.length - 1].classList.add('current');
    }
    //clear current
    setTimeout(() => current.classList.remove('current'));
};

//button event
next.addEventListener('click', function () {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener('click', function () {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

// Auto slide
if (auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}