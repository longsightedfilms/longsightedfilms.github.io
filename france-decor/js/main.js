function formatMoney(n, c, d, t) {
    var c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? " " : d,
        t = t == undefined ? " " : t,
        s = n < 0 ? "-" : "",
        i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
        j = (j = i.length) > 3 ? j % 3 : 0;

    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};
(function (w, d) {
    var b = d.getElementsByTagName('body')[0];
    var s = d.createElement("script");
    var v = !("IntersectionObserver" in w) ? "8.17.0" : "10.19.0";
    s.async = true; // This includes the script as async. See the "recipes" section for more information about async loading of LazyLoad.
    s.src = "https://cdn.jsdelivr.net/npm/vanilla-lazyload@" + v + "/dist/lazyload.min.js";
    w.lazyLoadOptions = [{
        elements_selector: ".lazy"
    }, {elements_selector: ".lazy-webp", to_webp: true}];
    b.appendChild(s);
}(window, document));
/*var target = window.location.hash,
    target = target.replace('#', '');
window.location.hash = "";
$(window).on('load', function () {
    if (target) {
        $('html, body').animate({
            scrollTop: $("#" + target).offset().top
        }, 1000);
    }
});*/
$(document).ready(function(){
    $('.header__button, .boutique__block-link, .boutique-more__block-link').click(function(event) {
        openModal("#callback", event);
    })
    $('.boutique-more__block-image button').click(function() {
        $('.boutique-more__block-image a img:last-child').toggleClass('visible');
        $(this).toggleClass('toggled');
    })
    $('.portfolio .portfolio__slider-cell').each(function () {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });
    $('.portfolio__slider')
    .on('afterChange init', function (event, slick, direction) {
        $('.slick-slide').removeClass('slide-prev').removeClass('slide-prev-before').removeClass('slide-next').removeClass('slide-next-after');
        for (var i = 0; i < slick.$slides.length; i++) {
            var $slide = $(slick.$slides[i]);
            if ($slide.hasClass('slick-current')) {
                $slide.prev().prev().addClass('slide-prev-before');
                $slide.prev().addClass('slide-prev');
                $slide.next().addClass('slide-next');
                $slide.next().next().addClass('slide-next-after');
                break;
            }
        }
    }).on('beforeChange', function (event, slick) {
        $('.slick-slide').removeClass('slide-prev').removeClass('slide-prev-before').removeClass('slide-next').removeClass('slide-next-after');
    })/*.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 0,
        centerMode: true,
        centerPadding: '120px'
    });*/
    .slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 0,
        centerMode: true,
        centerPadding: '50px'
    });
    if (window.matchMedia("(max-width: 575px)").matches) {
        $('.boutique-more__blocks').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
        $('.lighting__blocks').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    }
})

function openModal(modal, event) {
    try {
        event.preventDefault();
        event.stopPropagation();
    } catch (e) {
        
    }
    $.magnificPopup.open({
        items: { src: modal},
        type: 'inline',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    }, 0);
}