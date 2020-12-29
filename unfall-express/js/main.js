WebFontConfig = {
    google: {
        families: ['Montserrat:100,300,400,600,700,900:latin,cyrillic']
    }
};

(function (d) {
    var wf = d.createElement('script'), s = d.scripts[0];
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
    wf.async = true;
    s.parentNode.insertBefore(wf, s);
})(document);

function formatMoney(n, c, d, t) {
    var c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? " " : d,
        t = t == undefined ? " " : t,
        s = n < 0 ? "-" : "",
        i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
        j = (j = i.length) > 3 ? j % 3 : 0;

    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};
var target = window.location.hash,
    target = target.replace('#', '');
window.location.hash = "";
$(window).on('load', function () {
    if (target) {
        $('html, body').animate({
            scrollTop: $("#" + target).offset().top
        }, 1000);
    }
});
$('.footer__link').click(function () {
    $('html, body').animate({
        scrollTop: $("#license").offset().top
    }, 1000);
})

$(document).ready(function(){
    $('.main__carousel .carousel').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.our-office .carousel').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.our-office .carousel .carousel-cell:not(.slick-cloned) a').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
})
$('.main__carousel .carousel').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    if (window.matchMedia('(min-width: 768px)').matches) {
        $('.main__carousel').css("background", "url('../img/slides/slide-" + (nextSlide + 1) + ".jpg') no-repeat center center");
    } else {
        $('.main__carousel').css("background", "url('../img/slides/slide-" + (nextSlide + 1) + "-m.jpg') no-repeat center center");
    }
});