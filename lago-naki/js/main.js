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
    var doctorsSwiper = new Swiper('.doctors__slider', {
        autoHeight: true,
        effect: 'coverflow',
        grabCursor: true,
        roundLengths: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        loopedSlides: 0,
        preloadImages: false,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 3,
            loadOnTransitionStart: true
        },
        coverflowEffect: {
            rotate: 0,
            stretch: 55,
            depth: 400,
            modifier: 1,
            slideShadows: false,
        },
        navigation: {
            nextEl: '.doctors__content .swiper-button-next',
            prevEl: '.doctors__content .swiper-button-prev',
        },
        breakpoints: {
            1440: {
                slidesPerView: 2.3,
                loopedSlides: 4,
                coverflowEffect: {
                    stretch: 100,
                    depth: 400
                },
            },
            991: {
                slidesPerView: 2,
                coverflowEffect: {
                    stretch: 48,
                    depth: 400
                },
            },
            767: {
                slidesPerView: 1,
                loopedSlides: 2,
                coverflowEffect: {
                    stretch: 200,
                    depth: 400
                },
            }
        }
    })

    var proceduresSwiper = new Swiper('.procedures__slider', {
        effect: 'coverflow',
        grabCursor: true,
        roundLengths: true,
        centeredSlides: false,
        slidesPerView: 'auto',
        loop: true,
        loopedSlides: 0,
        coverflowEffect: {
            rotate: 0,
            stretch: 50,
            depth: 245,
            modifier: 2,
            slideShadows: false,
        },
        navigation: {
            nextEl: '.procedures__slider .swiper-button-next',
            prevEl: '.procedures__slider .swiper-button-prev',
        },
        breakpoints: {
            1440: {
                slidesPerView: 1.3,
                loopedSlides: 2,
                coverflowEffect: {
                    stretch: 100,
                    depth: 245
                },
            },
            991: {
                slidesPerView: 'auto',
                loopedSlides: 0,
                coverflowEffect: {
                    stretch: 50,
                    depth: 245
                },
            },
        }
    })

    var menuSwiper = new Swiper('.menu__slider', {
        effect: 'coverflow',
        grabCursor: true,
        roundLengths: true,
        centeredSlides: false,
        slidesPerView: 'auto',
        loop: true,
        loopedSlides: 0,
        coverflowEffect: {
            rotate: 0,
            stretch: 350,
            depth: 200,
            modifier: 1,
            slideShadows: false,
        },
        navigation: {
            nextEl: '.menu__slider .swiper-button-next',
            prevEl: '.menu__slider .swiper-button-prev',
        },
        breakpoints: {
            1440: {
                slidesPerView: 1.5,
                loopedSlides: 2,
                coverflowEffect: {
                    stretch: 300,
                    depth: 200
                },
            },
            991: {
                slidesPerView: 'auto',
                loopedSlides: 0,
                coverflowEffect: {
                    stretch: 350,
                    depth: 200
                },
            },
            575: {
                slidesPerView: 'auto',
                loopedSlides: 0,
                coverflowEffect: {
                    stretch: 150,
                    depth: 200
                },
            },
        }
    })

    var guestSwiper = new Swiper('.guest-comfort__slider', {
        effect: 'coverflow',
        grabCursor: true,
        roundLengths: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        loopedSlides: 3,
        coverflowEffect: {
            rotate: 0,
            stretch: 700,
            depth: 150,
            modifier: 1,
            slideShadows: false,
        },
        navigation: {
            nextEl: '.guest-comfort__slider .swiper-button-next',
            prevEl: '.guest-comfort__slider .swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },
        breakpoints: {
            1440: {
                slidesPerView: 1.5,
                loopedSlides: 2,
                coverflowEffect: {
                    stretch: 300,
                    depth: 300
                },
            },
            991: {
                slidesPerView: 1.1,
                coverflowEffect: {
                    stretch: 100,
                    depth: 200
                },
            }
        }
    })

    var schoolSwiper = new Swiper('.school__slider', {
        effect: 'coverflow',
        grabCursor: true,
        roundLengths: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        loopedSlides: 5,
        coverflowEffect: {
            rotate: 0,
            stretch: 120,
            depth: 300,
            modifier: 1,
            slideShadows: false,
        },
        navigation: {
            nextEl: '.school__slider .swiper-button-next',
            prevEl: '.school__slider .swiper-button-prev',
        }
    })

    var pressureSwiper = new Swiper('.reduce-pressure__slider', {
        effect: 'coverflow',
        grabCursor: true,
        roundLengths: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        loopedSlides: 0,
        coverflowEffect: {
            rotate: 0,
            stretch: 120,
            depth: 300,
            modifier: 1,
            slideShadows: false,
        },
        navigation: {
            nextEl: '.reduce-pressure__slider .swiper-button-next',
            prevEl: '.reduce-pressure__slider .swiper-button-prev',
        }
    })

    var diabetSwiper = new Swiper('.diabet__slider', {
        effect: 'coverflow',
        grabCursor: true,
        roundLengths: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        loopedSlides: 0,
        coverflowEffect: {
            rotate: 0,
            stretch: 360,
            depth: 300,
            modifier: 1,
            slideShadows: false,
        },
        navigation: {
            nextEl: '.diabet__slider .swiper-button-next',
            prevEl: '.diabet__slider .swiper-button-prev',
        },
        breakpoints: {
            1440: {
                slidesPerView: 1.5,
                loopedSlides: 2,
                coverflowEffect: {
                    stretch: 300,
                    depth: 300
                },
            },
            991: {
                slidesPerView: 'auto',
                loopedSlides: 0,
                coverflowEffect: {
                    stretch: 360,
                    depth: 300
                },
            }
        }
    })

    var childrenSwiper = new Swiper('.children__slider', {
        effect: 'coverflow',
        grabCursor: true,
        roundLengths: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        loopedSlides: 0,
        coverflowEffect: {
            rotate: 0,
            stretch: 100,
            depth: 300,
            modifier: 1,
            slideShadows: false,
        },
        navigation: {
            nextEl: '.children__slider .swiper-button-next',
            prevEl: '.children__slider .swiper-button-prev',
        },
        breakpoints: {
            1440: {
                slidesPerView: 1.03,
                loopedSlides: 2,
                coverflowEffect: {
                    stretch: 100,
                    depth: 300
                },
            },
            767: {
                slidesPerView: 1.1,
                loopedSlides: 2,
                coverflowEffect: {
                    stretch: 300,
                    depth: 300
                },
            },
            575: {
                slidesPerView: 1.1,
                loopedSlides: 2,
                coverflowEffect: {
                    stretch: 100,
                    depth: 300
                },
            }
        }
    })

    var escortSwiper = new Swiper('.escort__slider', {
        effect: 'coverflow',
        grabCursor: true,
        roundLengths: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        loopedSlides: 0,
        coverflowEffect: {
            rotate: 0,
            stretch: 430,
            depth: 300,
            modifier: 1,
            slideShadows: false,
        },
        navigation: {
            nextEl: '.escort__slider .swiper-button-next',
            prevEl: '.escort__slider .swiper-button-prev',
        },
        breakpoints: {
            1440: {
                slidesPerView: 1.5,
                loopedSlides: 2,
                coverflowEffect: {
                    stretch: 300,
                    depth: 300
                },
            },
            767: {
                slidesPerView: 1.1,
                loopedSlides: 2,
                coverflowEffect: {
                    stretch: 300,
                    depth: 300
                },
            },
            575: {
                slidesPerView: 1.1,
                loopedSlides: 2,
                coverflowEffect: {
                    stretch: 100,
                    depth: 300
                },
            }
        }
    })

    var apartmentSwiper = new Swiper('.apartment__slider', {
        effect: 'coverflow',
        grabCursor: true,
        roundLengths: true,
        centeredSlides: true,
        slidesPerView: 1.5,
        loop: true,
        loopedSlides: 2,
        coverflowEffect: {
            rotate: 0,
            stretch: 237,
            depth: 300,
            modifier: 1,
            slideShadows: false,
        },
        navigation: {
            nextEl: '.apartment__slider .swiper-button-next',
            prevEl: '.apartment__slider .swiper-button-prev',
        },
        breakpoints: {
            1199: {
                slidesPerView: 1.2,
                loopedSlides: 2,
                coverflowEffect: {
                    stretch: 237,
                    depth: 300
                },
            },
            991: {
                slidesPerView: 1.2,
                loopedSlides: 2,
                coverflowEffect: {
                    stretch: 237,
                    depth: 300
                },
            },
            575: {
                slidesPerView: 1.1,
                loopedSlides: 2,
                coverflowEffect: {
                    stretch: 100,
                    depth: 300
                },
            }
        }
    })

    $('.healing__images').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    $('.procedures__slider .swiper-slide').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    $('.menu__slider .swiper-slide').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    $('.guest-comfort__slider .swiper-slide').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    $('.school__slider .swiper-slide').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    $('.reduce-pressure__slider .swiper-slide').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    $('.diabet__slider .swiper-slide').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    $('.children__slider .swiper-slide').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    $('.escort__slider .swiper-slide .gallery').each(function () {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });
    $('.escort__slider .swiper-slide').magnificPopup({
        delegate: 'a',
        type: 'image',
    });

    $('.licenses .licenses__link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.apartment__slider .swiper-slide').magnificPopup({
        delegate: 'a',
        type: 'image',
    });
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