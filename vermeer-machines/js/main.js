function formatMoney(n, c, d, t) {
    var c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? " " : d,
        t = t == undefined ? " " : t,
        s = n < 0 ? "-" : "",
        i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
        j = (j = i.length) > 3 ? j % 3 : 0;

    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};
WebFontConfig = {
    google: {
        families: ['Open Sans:300,700,800,800i:cyrillic,latin', 'Montserrat:900i:cyrillic']
    }
};
(function (d) {
    var wf = d.createElement('script'), s = d.scripts[0];
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
    wf.async = true;
    s.parentNode.insertBefore(wf, s);
})(document);

(function (w, d) {
    var b = d.getElementsByTagName('body')[0];
    var s = d.createElement("script");
    var v = !("IntersectionObserver" in w) ? "8.17.0" : "10.19.0";
    s.async = true; // This includes the script as async. See the "recipes" section for more information about async loading of LazyLoad.
    s.src = "https://cdn.jsdelivr.net/npm/vanilla-lazyload@" + v + "/dist/lazyload.min.js";
    if (window.matchMedia("(max-width: 991px)").matches) {
        w.lazyLoadOptions = {
            elements_selector: ".lazy",
        };
    } else {
        w.lazyLoadOptions = [{
            elements_selector: ".lazy"
        }, {elements_selector: ".lazy-jumb", to_webp: true}];
    }
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
var mfpOpen = true;  
$(document).ready(function(){
    $('.machine .button').click(function(event){
        event.preventDefault();
        var addr = $(this).attr('href');
        $('.tab-pane').removeClass('active');
        $('#myTab .nav-link').removeClass('active');
        $('#myTab .nav-link[href="' + addr + '"]').addClass('active');
        $(addr).addClass('active');
        $('html, body').animate({
            scrollTop: $(addr).offset().top
        }, 2000);
    })
    if(window.matchMedia('(max-width: 767px)').matches) {
        try {
            $('.models .nav-tabs .nav-item:first-child').addClass('shown');
            var slides = $('.models .nav-tabs .nav-item');
            var currentSlide = 0;
            $('.slider .slide-left').click(previousSlide);
            $('.slider .slide-right').click(nextSlide);

            function nextSlide() {
                goToSlide(currentSlide + 1);
            }

            function previousSlide() {
                goToSlide(currentSlide - 1);
            }

            function goToSlide(n) {
                slides[currentSlide].className = 'nav-item';
                currentSlide = (n + slides.length) % slides.length;
                slides[currentSlide].className = 'nav-item shown';
                $('.models .nav-tabs .nav-item.shown .nav-link').click();
            }
        } catch (e) {}
    }
})
$('.paginator li a').click(function (event) {
    event.preventDefault();
    if ($(this).attr('data-filter') != 'all') {
        $(this).closest('.tab-pane').find('.model').show();
        $(this).closest('.tab-pane').find('.model:not([data-category="' + $(this).attr('data-filter') + '"])').hide();
    } else {
        $(this).closest('.tab-pane').find('.model').show();
    }
    $(this).closest('.paginator').find('li a').removeClass('active');
    $(this).addClass('active');
})
$('.models .model .buttons .link').click(function(event){
    openModal('#specs', event);
    $('#specs .content').load($(this).attr('data-url'));
})
$(function () {
    if ($("#mapContacts").length > 0) {
        ymaps.ready(function () {
            var map = new ymaps.Map("mapContacts", {
                center: [40.873556127486474, 50.649276543971425],
                zoom: 5,
                controls: ['zoomControl', 'typeSelector', 'fullscreenControl']
            });
            var iconSVG = {
                iconLayout: 'default#image',
                iconImageHref: '/img/icons/pin.svg',
                iconImageSize: [30, 41],
                iconImageOffset: [-15, -42]
            };
            map.behaviors.disable("scrollZoom");

            myCollection = new ymaps.GeoObjectCollection();
            $('.showroom .custom-select option').each(function (index) {
                if(index != 0) {
                    var coords = $(this).data('coords').split(','),
                        address = $(this).data('address');

                    placemark = new ymaps.Placemark(coords, {
                        balloonContent: address,
                    }, iconSVG);

                    myCollection.add(placemark);
                }
            });

            map.geoObjects.add(myCollection);
            map.setBounds(myCollection.getBounds(), { checkZoomRange: true });
            $('.showroom .custom-select').change(function () {
                var selected_option = $('.showroom .custom-select option:selected');
                if (!isNaN(selected_option.val())) {
                    var coords = selected_option.data('coords').split(',');
                    map.setCenter(coords, 18, { duration: 500 });
                }
            })
        });
    }
});

$('.models .content .button').click(function(event){
    openModal('#commercial', event);
})
$('.header .header__button').click(function(event){
    openModal('#consult', event);
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