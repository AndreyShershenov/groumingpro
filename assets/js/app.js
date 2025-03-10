const swiper1 = new Swiper('.services__slider', {
 	slidesPerView: 4,
 	spaceBetween: 20,
 	centeredSlides: true,

    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 20
        },
        640: {
            slidesPerView: 4,
        }
    }
});

const swiper2 = new Swiper('.otzv__slider', {
 	slidesPerView: 3,
 	spaceBetween: 20,
 	centeredSlides: true,

	breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 20
        },
        640: {
            slidesPerView: 4,
        }
    }
});