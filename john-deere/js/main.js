// Polyfills
if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
        'use strict';
        if (typeof start !== 'number') {
            start = 0;
        }

        if (start + search.length > this.length) {
            return false;
        } else {
            return this.indexOf(search, start) !== -1;
        }
    };
}

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
$('.header__address:nth-child(3) a').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#showroom").offset().top
    }, 1000);
})

var mfpOpen = true;  
$(document).ready(function(){
    $('.monitoring-carousel').slick({
        dots: true
    });
    if (window.matchMedia("(max-width: 767px)").matches) {
        $('.partners .list').slick({
            rows: 3,
            slidesPerRow: 1
        });
    } else {
        $('.partners .list').slick({
            rows: 2,
            slidesPerRow: 4,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        rows: 2,
                        slidesPerRow: 4
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        rows: 2,
                        slidesPerRow: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        rows: 3,
                        slidesPerRow: 1
                    }
                },
                {
                    breakpoint: 0,
                    settings: {
                        rows: 3,
                        slidesPerRow: 1
                    }
                }
            ]
        });
    }
    if(window.matchMedia("(min-width:992px)").matches) {
        if (window.location.pathname.includes('autograders')) {
            var viewportTop = $(window).scrollTop();
            if (viewportTop > 1459) {
                $("body").addClass("header_sticky_sub");
            } else {
                $("body").removeClass("header_sticky_sub");
            }
            $(window).scroll(function () {
                var viewportTop = $(window).scrollTop();
                if (viewportTop > 1459) {
                    $("body").addClass("header_sticky_sub");
                } else {
                    $("body").removeClass("header_sticky_sub");
                }
            })
        } else {
            var viewportTop = $(window).scrollTop();
            if (viewportTop > 200) {
                $("body").addClass("header_sticky");
            } else {
                $("body").removeClass("header_sticky");
            }
            $(window).scroll(function () {
                var viewportTop = $(window).scrollTop();
                if (viewportTop > 200) {
                    $("body").addClass("header_sticky");
                } else {
                    $("body").removeClass("header_sticky");
                }
            })
        }
 
    }

    $('.navigation .navbar-nav a').click(function (e) {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top - 70
        }, 1000);
    });
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

$('.monitoring-carousel').on('beforeChange', function () {
    mfpOpen = false;
});

$('.monitoring-carousel').on('afterChange', function () {
    mfpOpen = true;
});
var commercial = {
    bulldozers: {
        'title': 'Нужно коммерческое предложение по бульдозерам?',
        'desc': 'Оставьте свои контактные данные, наш эксперт позвонит в течение 30 минут и после - отправит коммерческое предложение на вашу почту'
    },
    autograders: {
        'title': 'Нужно коммерческое предложение по автогрейдерам?',
        'desc': 'Оставьте свои контактные данные, наш эксперт позвонит в течение 30 минут и после - отправит коммерческое предложение на вашу почту'
    },
    mini_forklifts: {
        'title': 'Нужно коммерческое предложение по мини-погрузчикам?',
        'desc': 'Оставьте свои контактные данные, наш эксперт позвонит в течение 30 минут и после - отправит коммерческое предложение на вашу почту'
    },
    frontal_forklifts: {
        'title': 'Нужно коммерческое предложение по фронтальным погрузчикам?',
        'desc': 'Оставьте свои контактные данные, наш эксперт позвонит в течение 30 минут и после - отправит коммерческое предложение на вашу почту'
    },
    excavators: {
        'title': 'Нужно коммерческое предложение по экскаваторам?',
        'desc': 'Оставьте свои контактные данные, наш эксперт позвонит в течение 30 минут и после - отправит коммерческое предложение на вашу почту'
    },
    excavators_forklifts: {
        'title': 'Нужно коммерческое предложение по экскаваторам-погрузчикам?',
        'desc': 'Оставьте свои контактные данные, наш эксперт позвонит в течение 30 минут и после - отправит коммерческое предложение на вашу почту'
    }
}
var consult = {
    bulldozers: {
        'title': 'Нужна консультация эксперта по бульдозерам?',
        'desc': 'Оставьте свои контактные данные, наш эксперт позвонит в течение 30 минут и поможет подобрать бульдозер, отвечающий именно Вашим задачам'
    },
    autograders: {
        'title': 'Нужна консультация эксперта по автогрейдерам?',
        'desc': 'Оставьте свои контактные данные, наш эксперт позвонит в течение 30 минут и поможет подобрать автогрейдер, отвечающий именно Вашим задачам'
    },
    mini_forklifts: {
        'title': 'Нужна консультация эксперта по мини-погрузчикам?',
        'desc': 'Оставьте свои контактные данные, наш эксперт позвонит в течение 30 минут и поможет подобрать мини-погрузчик, отвечающий именно Вашим задачам'
    },
    frontal_forklifts: {
        'title': 'Нужна консультация эксперта по фронтальным погрузчикам?',
        'desc': 'Оставьте свои контактные данные, наш эксперт позвонит в течение 30 минут и поможет подобрать фронтальный погрузчик, отвечающий именно Вашим задачам'
    },
    excavators: {
        'title': 'Нужна консультация эксперта по экскаваторам?',
        'desc': 'Оставьте свои контактные данные, наш эксперт позвонит в течение 30 минут и поможет подобрать экскаватор, отвечающий именно Вашим задачам'
    },
    excavators_forklifts: {
        'title': 'Нужна консультация эксперта по экскаваторам-погрузчикам?',
        'desc': 'Оставьте свои контактные данные, наш эксперт позвонит в течение 30 минут и поможет подобрать экскаватор-погрузчик, отвечающий именно Вашим задачам'
    },
    all: {
        'title': 'Нужна консультация эксперта по строительной технике?',
        'desc': 'Оставьте свои контактные данные, наш эксперт позвонит в течение 30 минут и поможет подобрать строительную технику, отвечающую именно Вашим задачам'
    }
}

var vehicles = {
    bulldozers: {'item': 'Бульдозер'},
    autograders: {'item': 'Автогрейдер'},
    mini_forklifts: {'item': 'Мини-погрузчик'},
    frontal_forklifts: {'item': 'Фронтальный погрузчик'},
    excavators: {'item': 'Экскаватор'},
    excavators_forklifts: {'item': 'Экскаватор-погрузчик'},
    all: {'item': 'Строительная техника'}
}

$('.header__button, .product .button:not(.button_arrowed), .compare .table tbody a').click(function() {
    openModal('#consult', event);
    $('#consult .block-heading').html(consult[$(this).attr('data-type')]['title']);
    $('#consult .block-desc').html(consult[$(this).attr('data-type')]['desc']);
    $('#consult form input[type="hidden"][name="item"]').val(vehicles[$(this).attr('data-type')]['item']);
});
$('.models .buttons .button:not(.button_arrowed)').click(function() {
    openModal('#commercial', event);
    $('#commercial .block-heading').html(commercial[$(this).attr('data-type')]['title']);
    $('#commercial .block-desc').html(commercial[$(this).attr('data-type')]['desc']);
    $('#commercial form input[type="hidden"][name="item"]').val(vehicles[$(this).attr('data-type')]['item']);
});
$('.models .buttons .button_arrowed').magnificPopup({
    type: 'iframe',
    removalDelay: 300,
    mainClass: 'mfp-fade'
});
$('.monitoring-carousel div a').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    },
    disableOn: function () {
        return mfpOpen;
    },
    removalDelay: 300,
    mainClass: 'mfp-fade'
});
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