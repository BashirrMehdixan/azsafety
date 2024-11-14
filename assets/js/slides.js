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

if (document.querySelector('.certificate_glide')) {
    new Glide('.certificate_glide', {
        type: 'slider',
        gap: 0
    }).mount();
}

const slide_bullets = document.querySelectorAll('.slide_pagination .p_bullet');
const slideImg = document.querySelector('.slide_img img');
slide_bullets.forEach(bullet => {
    bullet.addEventListener('click', e => {
        slide_bullets.forEach(el => el.classList.remove('active'));
        bullet.classList.add('active');
        slideImg.src = e.target.dataset.src;
    })
})

if (document.querySelector("[data-fancybox]")) {
    Fancybox.bind("[data-fancybox]", {});
}