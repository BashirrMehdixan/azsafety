const bannerSlides = document.querySelectorAll('.banner_glide .glide__slide');

bannerSlides.forEach(item => {
    item.style.backgroundImage = `url(${item.dataset.bg}`
})