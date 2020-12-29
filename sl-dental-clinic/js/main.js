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
    $('.nav-link, .variants__nav a').click(function (e) {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top - 100
        }, 1000);
        $('#navbarSupportedContent').collapse('hide');
    });
    
    $('.compare__blocks li:not(".hidden") .cocoen').cocoen();

    $('.compare__button').click(function() {
        $('.compare__blocks li.hidden').removeClass('hidden').addClass('shown');
        $('.compare__blocks li.shown .cocoen').cocoen();
        $(this).remove();
    })
    
    $('.reviews__more').click(function(event) {
        event.preventDefault();
        console.log('clicked');
        $(this).parent().find('.text').addClass('visible');
        $(this).remove();
    })
    $('.reviews__button').click(function() {
        $('.reviews__blocks li.hidden').removeClass('hidden');
        $(this).remove();
    })

    ymaps.ready(init);
    function init() {
        var myMap = new ymaps.Map("map", {
            center: [45.068627, 38.950933],
            zoom: 17,
            controls: []
        });
        var myPlacemark = new ymaps.Placemark([45.068627, 38.950933], {}, {
            preset: 'islands#redDotIcon'
        })
        myMap.geoObjects.add(myPlacemark);
    }

    if (window.matchMedia('(max-width: 767px)').matches) {
        $('.reviews__blocks').slick({
            infinite: true,
            dots: true,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
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