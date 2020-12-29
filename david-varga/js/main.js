WebFontConfig = {
    google: {
        families: ['PT Sans Narrow:400:latin,cyrillic']
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
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000
    });
    $('.earn-interview .carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: $('.carousel-buttons')
    });
    $('.reviews .carousel').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        appendArrows: $('.carousel-buttons'),
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
})
$('.main__carousel .carousel').on('init', function(){
    $('.main__carousel .carousel .slick-slide .carousel-cell__wrapper .slick-next').click(function () {
        $('.main__carousel .carousel').slick('slickNext');
    })
    $('.main__carousel .carousel .slick-slide .carousel-cell__wrapper .slick-prev').click(function () {
        $('.main__carousel .carousel').slick('slickPrev');
    })
})
$('.formats .link').click(function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr("href")).offset().top
    }, 1000);
})
$('.product .description a').click(function (event) {
    event.preventDefault();
    $('.product .description span').addClass('shown');
    $(this).remove();
})
$('#results_more').click(function(e){
    e.preventDefault();
    $('.result.hidden').removeClass('hidden');
    $(this).remove();
})
$('#landings_more').click(function(e){
    e.preventDefault();
    $('.landing.hidden').removeClass('hidden');
    $(this).remove();
})

$('#no-guarantee-link').click(function(event){
    openModal('#no-guarantee-popup', event);
});
$('.header__button_order').click(function(event){
    openModal('#order-service', event);
});
$('.course-stats__link').magnificPopup({
    type: 'image'
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
function send_request(event){
    event.preventDefault();
    event.stopPropagation();
    $.ajax({
        url: "http://igem.org/cgi/forms/form.cgi",
        type: "POST",
        timeout: 10000,
        data: $(this).serialize(),
        success: function (data) {
            openModal('#thankyou', event);
            console.log(data);
        }
    })
    return false;
}

$('.book').click(function(event){
    event.preventDefault();
    if ($(this).attr('data-filter') != 'none') {
        $('.item_book').parent().show();
        $('.item_book').parent(':not([data-category="' + $(this).attr('data-filter') + '"])').hide();
    } else {
        $('.item_book').parent().show();
    }
    $('a.book').removeClass('active');
    $(this).addClass('active');
})

$('.academy-main .dropdown-menu a').click(function(){
    $('.academy-main .button.dropdown-toggle').text($(this).text());
})

$('.course-package .link').click(function(event){
    event.preventDefault();
    $(this).parents('.course-package').find('.lower').toggleClass('hidden');
    $(this).toggleClass('toggled');
})

$('.review-submit .button').click(function(event){
    openModal('#send-review', event);
})
$('.table tbody tr.divider').click(function(){
    $(this).toggleClass('toggled');
    $(this).nextUntil('.divider').toggle(300);
})

$('.product .button.button_order').click(function(event){
    event.preventDefault();
    openModal('#order-service', event);
    $('#order-service input[id="' + $(this).attr('data-type') + 'check"]').prop('checked', true);
    $('#order-service .mfp-close').click(function () {
        console.log('clicked!');
        $('#order-service input[type=checkbox]').prop('checked', false);
    });
});

$('.companies-block .button').click(function(event){
    openModal('#no-access', event);
    var buttons = $('#no-access .buttons a');
    buttons[0].href = '/oauth/vk?s=partnership&c=' + $(this).attr('data-course');
    buttons[1].href = '/oauth/facebook?s=partnership&c=' + $(this).attr('data-course');
})