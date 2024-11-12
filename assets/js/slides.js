if (document.querySelector('.banner_glide')) {
    new Glide('.banner_glide', {
        autoplay: 5000,
        type: 'carousel'
    }).mount();
}
if (document.querySelector('.services_glide')) {
    new Glide('.services_glide', {
        type: 'carousel',
        startAt: 0,
        perView: 4,
        autoplay: 5000,
        breakpoints: {
            610: {
                perView: 1
            },
            991: {
                perView: 2
            },
        }
    }).mount()
}
if (document.querySelector('.products_glide')) {
    new Glide('.products_glide', {
        type: 'carousel',
        startAt: 0,
        perView: 4,
        autoplay: 5000,
        breakpoints: {
            610: {
                perView: 1
            },
            991: {
                perView: 2
            },
        }
    }).mount()
}

if (document.querySelector('.detail_glide')) {
    new Glide('.detail_glide', {
        type: 'carousel'
    }).mount();
}