$(document).ready(function () {
    
    function testWebP(callback) {
        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    testWebP(function (support) {

        if (support == true) {
            document.querySelector('body').classList.add('webp');
        } else {
            document.querySelector('body').classList.add('no-webp');
        }
    });
    $('.singlePrew-link__item').click(function(e){
        e.preventDefault();
    })
    
    
// $(document).ready(function(){
  $('.testimonials-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    initialSlide:1,
  });
  // $('.singleAbout-slider').slick({
  //   dots: true,
  //   // arrows: false,
  //   infinite: true,
  //   speed: 500,
  //   initialSlide:1,
  // });
  // });;
    $('.header-nav__item a').click(function (e) {
    // e.preventDefault();

    $('.header-nav__item a').removeClass('active');
    $(this).addClass('active');
    var id = $(this).attr('href');
    var pos = $(id).offset().top;
    $('html').animate({
        scrollTop:pos
    },500)

})
;
    $('.burger').click(function () {
    $('.header-nav__items').toggleClass('open');
    if ($('.header-nav__items').hasClass('open')) {
        $('.header-nav__items').animate({
            top: 75,
            right: 10,
        }, 600)

        // $('.burger').siblings('.burger i').animate({
        //     // transform: rotate(90),
        // //             // right: 10,
        // }, 600)
        // $(this).siblings('.burger').attr('class', 'pe-7s-close-circle pe-2x');
        // $('.header-popup').removeClass('open');
        // $burg = $('.header-nav__list').siblings('.burger');
        // ($burg).attr('class', 'pe-7s-close-circle pe-2x');
        // $('.header-popup').removeClass('open');
    }
    else {
        $('.header-nav__items').animate({
            top: 75,
            right: -350,
        }, 600)
        $('.header-popup').removeClass('open');
        //     $(this).siblings('.burger').attr('class', 'pe-7s-plus pe-2x');
    }

})
;
    $('.work-link__item').click(function(e){
    e.preventDefault();
    $('.additionally').toggleClass('additionally-add');
   if ($('.additionally').hasClass('additionally-add')){
    $(this).text('well that\'s enough pictures - close it!!!');
   }
   else{
    $(this).text('load more work');
   }
});;
    if ($('body').hasClass('about-body')){
    $('.header-nav__item').addClass('about-color');
}
else if ($('body').hasClass('index-body')){
    $('.header-nav__item').addClass('index-color');
}
else if ($('body').hasClass('contact-body')){
    $('.header-nav__item').addClass('contact-color');
}
else if ($('body').hasClass('home-body')){
    $('.header-nav__item').addClass('about-color');
}
else {
    $('.header-nav__item').addClass('single-color');
};
    $('.about-slider').slick({
    dots: true,
    appendDots: $('.singlePrew-link'),
    // autoplay : true,
    // autoplaySpeed: 1000,
    fade: true,
    // centerMode: true,
    slidesToShow: 1,
    // cssEase: 'linear',
    // slidesToScroll: 1,
    // prevArrow: '<a class="singlePrew-link" href="#"><i class="pe-7s-angle-left pe-2x pe-va singlePrew-link-arrow"></i></a>',
    prevArrow: '#arrow-left',
    nextArrow: '#arrow-right',
    // nextArrow: '<button class="main-slider__next"><i class="fa fa-angle-right"></i></button>',
  
  });;
});