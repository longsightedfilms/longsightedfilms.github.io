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
        elements_selector: ".lazy.has-webp",
        to_webp: true
    }, {
        elements_selector: ".lazy:not(.has-webp)"
    }]
    b.appendChild(s);
}(window, document));
var mfpOpen = true;
var comebacked = false;
$(document).ready(function(){
    $('.input[type="phone"]').mask('+7(000)000-00-00')
    if (window.matchMedia("(max-width:575px)").matches) {
        $('.sa8.lazy.has-webp').attr('data-bg', 'url(../img/sa8__bg_m.png)')
    }
    if (window.matchMedia("(min-width:768px) and (max-width:991px)").matches) {
        $('.sa8.lazy.has-webp').attr('data-bg', 'url(../img/sa8__bg_t.png)')
    }
    /*$(window).bind('beforeunload', function (event) {
        if (comebacked == false) {
            event.preventDefault();
            openModal("#dbl_benefit");
            comebacked = true;
            return null;
        }
    });*/
})
// Альтернативный вариант comebacker-a
/*$(document).on("mouseleave", function (event) {
    if (event.clientY <= 0 || event.clientY >= window.innerHeight) {
        if (comebacked == false) {
            openModal("#dbl_benefit");
            comebacked = true;
        }
    }
})*/
$('.price a').click(function(event){
    openModal("#callback", event);
})
$('.forchild_types .block .pricing a').click(function(event){
    openModal($(this).attr('data-modal'), event);
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
function send_request(form, event) {
    event.preventDefault();
    event.stopPropagation();
    /*$.ajax({
        url: '/request.php',
        type: "POST",
        data: $(form).serialize()
    });
    openModal('#thankyou', event);*/
    return false;
}