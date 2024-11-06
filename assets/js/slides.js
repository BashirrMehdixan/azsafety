new Glide('.banner_glide', {
    autoplay: 5000,
    type: 'carousel'
}).mount();
new Glide('.services_glide', {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    breakpoints: {
        610: {
            perView: 1
        },
        991: {
            perView: 2
        },
        992: {
            perView: 3
        },
    }
}).mount()