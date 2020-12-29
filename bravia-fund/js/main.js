WebFontConfig = {
    google: {
        families: ['Montserrat:100,300,400,700,900:latin,cyrillic']
    }
};

(function (d) {
    var wf = d.createElement('script'), s = d.scripts[0];
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
    wf.async = true;
    s.parentNode.insertBefore(wf, s);
})(document);

RegExp.escape = function (s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

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
$('input[type="range"]').rangeslider({polyfill: false});

$(document).ready(function(){
    try {
        $('#house-range').val($('#house-input').val().replace(/\W/g, '')).change();
        $(".house-buffer").text($("#house-input").val());
        $("#house-input").width($(".house-buffer").width() + 15);
        $(".house-buffer-discount").text($("#house-discount").val());
        $("#house-discount").width($(".house-buffer-discount").width() + 5);
    } catch(e) {
    }
    try {
        //$('#avia-input').html(formatMoney($('#avia-range').val(), ' ', ' '));
        $('#avia-range').val($('#avia-input').val().replace(/\W/g, '')).change();
        $(".house-buffer").text($("#avia-input").val());
        $("#avia-input").width($(".house-buffer").width() + 55);
    } catch(e) {
    }
    try {
        $('#kasko-range').val($('#kasko-input').val().replace(/\W/g, '')).change();
        $(".kasko-buffer").text($("#kasko-input").val());
        $("#kasko-input").width($(".kasko-buffer").width() + 14);
        $(".kasko-buffer-discount").text($("#kasko-discount").val());
        $("#kasko-discount").width($(".kasko-buffer-discount").width() + 5);
        var results = calc_main('input');
        $('#kasko-1year .right p span').html(formatMoney(results[0], ' ', ' ') + $('#kasko-1year .right p span').attr('data-currency'));
        $('#kasko-2year .right p span').html(formatMoney(results[1], ' ', ' ') + $('#kasko-2year .right p span').attr('data-currency'));
        $('#auto-3year .right p span').html(formatMoney(results[2], ' ', ' ') + $('#auto-3year .right p span').attr('data-currency'));
    } catch(e) {
    }
    
    try {
        var money = calc_house('range');
        $('#house-calculate .left p span').html(formatMoney(money, ' ', ' ') + $('#house-calculate .left p span').attr('data-currency'));
    } catch(e) {
    }

    $('.investition-section__carousel').slick({
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 4000
    });
    $('.main__carousel .carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        centerPadding: '0px',
        autoplay: true,
        autoplaySpeed: 5000
    });
    $('.investition-section__list-certs-link').magnificPopup({
        type: 'iframe'
    });
    //$('.slick-next').click(function(){$(".main__carousel .carousel").slick("slickNext");});
    //$('.slick-prev').click(function(){$(".main__carousel .carousel").slick("slickPrev");});
})
function calc_main(type) {
    if (type == 'input') {
        var input = Number($('#kasko-input').val().replace(/\W/g, ''));
    } else if (type == 'range') {
        var input = Number($('#kasko-range').val());
    }
    var discount = (Number($('#kasko-discount-range').val()) / 100).toPrecision(2);
    var type = $('#kasko-input').attr('data-type');
    var perc_1y = $("#kasko-input").attr('data-pc-1');
    var perc_2y = $("#kasko-input").attr('data-pc-2');
    if (type == 'annual') {
        var money_1y = input / (perc_1y / 100) - (input / (perc_1y / 100) * discount);
        var money_2y = input / (perc_2y / 100) - (input / (perc_2y / 100) * discount);
    } else {
        var money_1y = input * 12 / (perc_1y / 100) - (input * 12 / (perc_1y / 100) * discount);
        var money_2y = input * 12 / (perc_2y / 100) - (input * 12 / (perc_2y / 100) * discount);
    }
    var P = perc_2y / 12 / 100;
    var money_3y = input / (P + (P / (Math.pow(1 + P, 36) - 1))) * discount;
    return [money_1y, money_2y, money_3y];
}
function calc_house(type) {
    if (type == 'input') {
        var input = Number($('#house-input').val().replace(/\W/g, ''));
    } else if (type == 'range') {
        var input = Number($('#house-range').val());
    }
    var discount = (Number($('#house-discount-range').val()) / 100).toPrecision(2);
    if ($(".options__wrapper #construct-house-1").is(':checked')) {
        input *= 1.5;
    } else if ($(".options__wrapper #construct-house-2").is(':checked')) {
        input = input;
    }
    var perc = $("#house-input").attr('data-pc-1');
    var P = perc / 12 / 100;
    var money = input / 12 / (P + (P / (Math.pow(1 + P, 24) - 1))) - (input / 12 / (P + (P / (Math.pow(1 + P, 24) - 1))) * discount);
    return money;
}
$("#kasko-input").focus(function () {
    var input = $('#kasko-input').val().replace(/\W/g, '');
    $('#kasko-input').val(input);
    $(".kasko-buffer").text($("#kasko-input").val());
    $("#kasko-input").width($(".kasko-buffer").width() + 5);
})
$("#kasko-discount").focus(function () {
    var input = $('#kasko-discount').val().replace(/\W/g, '');
    $('#kasko-discount').val(input);
    $(".kasko-buffer-discount").text($("#kasko-discount").val());
    $("#kasko-discount").width($(".kasko-buffer-discount").width() + 5);
})
$("#kasko-input").blur(function(){
    var results = calc_main('input');
    $('#kasko-range').val($('#kasko-input').val()).change();
    $('#kasko-1year .right p span').html(formatMoney(results[0], ' ', ' ') + $('#kasko-1year .right p span').attr('data-currency'));
    $('#kasko-2year .right p span').html(formatMoney(results[1], ' ', ' ') + $('#kasko-2year .right p span').attr('data-currency'));
    $('#auto-3year .right p span').html(formatMoney(results[2], ' ', ' ') + $('#auto-3year .right p span').attr('data-currency'));
})
$("#kasko-input").on('input', function () {
    $(".kasko-buffer").text($("#kasko-input").val());
    $("#kasko-input").width($(".kasko-buffer").width() + 5);
});
$("#kasko-discount").on('input', function () {
    $(".kasko-buffer-discount").text($("#kasko-discount").val());
    $("#kasko-discount").width($(".kasko-buffer-discount").width() + 5);
});
$('#kasko-range').on('input change', function(){
    var results = calc_main('range');
    $('#kasko-input').val(formatMoney($('#kasko-range').val(), ' ', ' '));
    $(".kasko-buffer").text($("#kasko-input").val());
    $("#kasko-input").width($(".kasko-buffer").width() + 5);
    $('#kasko-1year .right p span').html(formatMoney(results[0], ' ', ' ') + $('#kasko-1year .right p span').attr('data-currency'));
    $('#kasko-2year .right p span').html(formatMoney(results[1], ' ', ' ') + $('#kasko-2year .right p span').attr('data-currency'));
    $('#auto-3year .right p span').html(formatMoney(results[2], ' ', ' ') + $('#auto-3year .right p span').attr('data-currency'));
})
$('#kasko-discount-range').on('input change', function(){
    var results = calc_main('range');
    $('#kasko-discount').val($('#kasko-discount-range').val());
    $(".kasko-buffer-discount").text($("#kasko-discount").val());
    $("#kasko-discount").width($(".kasko-buffer-discount").width() + 5);
    $('#kasko-1year .right p span').html(formatMoney(results[0], ' ', ' ') + $('#kasko-1year .right p span').attr('data-currency'));
    $('#kasko-2year .right p span').html(formatMoney(results[1], ' ', ' ') + $('#kasko-2year .right p span').attr('data-currency'));
    $('#auto-3year .right p span').html(formatMoney(results[2], ' ', ' ') + $('#auto-3year .right p span').attr('data-currency'));
})
$("#house-input").on('input', function () {
    $(".house-buffer").text($("#house-input").val());
    $("#house-input").width($(".house-buffer").width() + 5);
});
$("#house-discount").on('input', function () {
    $(".house-buffer-discount").text($("#house-discount").val());
    $("#house-discount").width($(".house-buffer-discount").width() + 5);
});
$("#house-input").focus(function () {
    var input = $('#house-input').val().replace(/\W/g, '');
    $('#house-input').val(input);
    $(".house-buffer").text($("#house-input").val());
    $("#house-input").width($(".house-buffer").width() + 5);
})
$("#house-discount").focus(function () {
    var input = $('#house-discount').val().replace(/\W/g, '');
    $('#house-discount').val(input);
    $(".house-buffer-discount").text($("#house-discount").val());
    $("#house-discount").width($(".house-buffer-discount").width() + 5);
})
$("#house-input").blur(function () {
    var money = calc_house('input');
    $('#house-calculate .left p span').html(formatMoney(money, ' ', ' ') + $('#house-calculate .left p span').attr('data-currency')); 
    $('#house-range').val($('#house-input').val()).change();
})
$('#house-range').on('input change', function(){
    var money = calc_house('range');
    $('#house-input').val(formatMoney($('#house-range').val(), ' ', ' '));
    $(".house-buffer").text($("#house-input").val());
    $("#house-input").width($(".house-buffer").width() + 5);
    $('#house-calculate .left p span').html(formatMoney(money, ' ', ' ') + $('#house-calculate .left p span').attr('data-currency'));
})
$("#house-discount").blur(function () {
    var money = calc_house('input');
    $('#house-calculate .left p span').html(formatMoney(money, ' ', ' ') + $('#house-calculate .left p span').attr('data-currency')); 
    $('#house-range').val($('#house-input').val()).change();
})
$('#house-discount-range').on('input change', function(){
    var money = calc_house('range');
    $('#house-discount').val($('#house-discount-range').val());
    $(".house-buffer-discount").text($("#house-discount").val());
    $("#house-discount").width($(".house-buffer-discount").width() + 5);
    $('#house-input').val(formatMoney($('#house-range').val(), ' ', ' '));
    $(".house-buffer").text($("#house-input").val());
    $("#house-input").width($(".house-buffer").width() + 5);
    $('#house-calculate .left p span').html(formatMoney(money, ' ', ' ') + $('#house-calculate .left p span').attr('data-currency'));
})
$(".options__wrapper input[type=radio]").on('input change', function(){
    var money = calc_house('range');
    $('#house-input').val(formatMoney($('#house-range').val(), ' ', ' '));
    $('#house-calculate .left p span').html(formatMoney(money, ' ', ' ') + $('#house-calculate .left p span').attr('data-currency'));
})
$("#avia-input").on('input', function () {
    $(".house-buffer").text($("#avia-input").val());
    $("#avia-input").width($(".house-buffer").width() + 45);
});
$("#avia-input").focus(function () {
    var input = $('#avia-input').val().replace(/\W/g, '');
    $('#avia-input').val(input);
    $(".house-buffer").text($("#avia-input").val());
    $("#avia-input").width($(".house-buffer").width() + 45);
})
$("#avia-input").blur(function () {
    var input = $('#avia-input').val().replace(/\W/g, '');
    var deposit = input / 30;
    var income = calculateAccountInterest(Number(input), 12, 30, true) / 100;
    var sum = deposit + income;
    $(".house-buffer").text($("#avia-input").val());
    $("#avia-input").width($(".house-buffer").width() + 45);
    $('#avia-economy .left b').html(formatMoney(sum, ' ', ' '));
    $('#avia-economy .right div:first-child b').html(formatMoney(deposit, ' ', ' ') + $('#avia-economy .right div:first-child b').attr('data-currency'));
    $('#avia-economy .right div:last-child b').html(formatMoney(income, ' ', ' ') + $('#avia-economy .right div:last-child b').attr('data-currency'));
    $('#avia-range').val($('#avia-input').val()).change();
})
$('#avia-range').on('input change', function(){
    $('#avia-input').val(formatMoney($('#avia-range').val(), ' ', ' '));
    var input = $('#avia-input').val().replace(/\W/g, '');
    var deposit = input / 30;
    var income = input * 0.35 / 100;
    var sum = deposit + income;
    $(".house-buffer").text($("#avia-input").val());
    console.log($("#avia-input").val());
    if (input >= 10000000) {
        $("#avia-input").width($(".house-buffer").width() + 50);
    } else if (input < 1000000){
        $("#avia-input").width($(".house-buffer").width() + 40);
    } else {
        $("#avia-input").width($(".house-buffer").width() + 45);
    }
    $('#avia-economy .left b').html(formatMoney(sum, ' ', ' '));
    $('#avia-economy .right div:first-child b').html(formatMoney(deposit, ' ', ' ') + $('#avia-economy .right div:first-child b').attr('data-currency'));
    $('#avia-economy .right div:last-child b').html(formatMoney(income, ' ', ' ') + $('#avia-economy .right div:last-child b').attr('data-currency'));
})
$('.investition-more_about .heading__list li a').click(function(event){
    if (/#/.test($.attr(this, 'href'))) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    }
})

/* Calculator */
var Currencies = {
    'RUB': {
        symbol: '₽',
        value: 1000000,
        inc: 10000,
        min: 10000,
        max: 999989999
    },
    'USD': {
        symbol: '$',
        value: 10000,
        inc: 500,
        min: 500,
        max: 999989999
    },
    'EUR': {
        symbol: '€',
        value: 10000,
        inc: 500,
        min: 500,
        max: 999989999
    },
    'BTC': {
        symbol: '₿',
        value: 2,
        inc: 0.01,
        min: 0.01,
        max: 999999
    },
    'ETH': {
        symbol: 'Ξ',
        value: 50,
        inc: 1,
        min: 1,
        max: 9999999
    }
}
var MonthCurrencies = {
    'RUB': {
        symbol: '₽',
        value: 100000,
        inc: 10000,
        min: 10000,
        max: 999989999
    },
    'USD': {
        symbol: '$',
        value: 1000,
        inc: 500,
        min: 500,
        max: 999989999
    },
    'EUR': {
        symbol: '€',
        value: 1000,
        inc: 500,
        min: 500,
        max: 999989999
    },
    'BTC': {
        symbol: '₿',
        value: 0.1,
        inc: 0.01,
        min: 0.01,
        max: 999999
    },
    'ETH': {
        symbol: 'Ξ',
        value: 2,
        inc: 1,
        min: 1,
        max: 9999999
    }
}
var CurrentCurrency = 'RUB';
var CurrentTerm = 24;
var iAmount = Currencies[CurrentCurrency].value;
var iMonthAmount = MonthCurrencies[CurrentCurrency].value;
function formatNumber(i) {
    if (CurrentCurrency == 'BTC' || CurrentCurrency == 'ETH') {
        var iNumber = Math.round(i * 10000) / 10000;
        return iNumber.toString();
    } else {
        var iNumber = Math.round(i);
        return iNumber.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
    }
}
function currencyClick(Element, value) {
    CurrentCurrency = value;
    jQuery('#inputDepositAmount').val(formatNumber(Currencies[CurrentCurrency].value));
    jQuery('#inputDepositMonthAmount').val(formatNumber(MonthCurrencies[CurrentCurrency].value));
    jQuery('#inputDepositCurrency').text(Currencies[CurrentCurrency].symbol);
    jQuery('#inputDepositMonthCurrency').text(MonthCurrencies[CurrentCurrency].symbol);
    jQuery('#inputCurrency button').removeClass('active');
    jQuery(Element).addClass('active');
    iAmount = Currencies[CurrentCurrency].value;
    iMonthAmount = MonthCurrencies[CurrentCurrency].value;
    for (var i in Currencies) {
        jQuery('#tbody-' + i).fadeOut();
    }
    jQuery('#tbody-' + CurrentCurrency).delay(200).fadeIn();
    calculate();
}
function termClick(Element, value) {
    CurrentTerm = value;
    jQuery('#inputDepositTerm button').removeClass('active');
    jQuery(Element).addClass('active');
    calculate();
}
jQuery('#inputDepositAmount').keyup(function () {
    this.value = this.value.replace(/\D/g, '');
    iAmount = parseInt(this.value) > 0 ? parseInt(this.value) : 0;
    this.value = formatNumber(iAmount);
    calculate();
});
jQuery('#inputDepositMonthAmount').keyup(function () {
    this.value = this.value.replace(/\D/g, '');
    iMonthAmount = parseInt(this.value) > 0 ? parseInt(this.value) : 0;
    this.value = formatNumber(iMonthAmount);
    calculate();
});
jQuery('#inputDepositAmountMinus').click(function () {
    if (iAmount >= Currencies[CurrentCurrency].min) {
        iAmount = iAmount - Currencies[CurrentCurrency].inc;
        jQuery('#inputDepositAmount').val(formatNumber(iAmount));
        calculate();
    }
});
jQuery('#inputDepositAmountPlus').click(function () {
    if (iAmount <= Currencies[CurrentCurrency].max) {
        iAmount = iAmount + Currencies[CurrentCurrency].inc;
        jQuery('#inputDepositAmount').val(formatNumber(iAmount));
        calculate();
    }
});
jQuery('#inputDepositMonthAmountMinus').click(function () {
    if (iMonthAmount >= MonthCurrencies[CurrentCurrency].min) {
        iMonthAmount = iMonthAmount - MonthCurrencies[CurrentCurrency].inc;
        jQuery('#inputDepositMonthAmount').val(formatNumber(iMonthAmount));
        calculate();
    }
});
jQuery('#inputDepositMonthAmountPlus').click(function () {
    if (iMonthAmount <= MonthCurrencies[CurrentCurrency].max) {
        iMonthAmount = iMonthAmount + MonthCurrencies[CurrentCurrency].inc;
        jQuery('#inputDepositMonthAmount').val(formatNumber(iMonthAmount));
        calculate();
    }
});
jQuery('#table-calculator tbody tr').click(function () {
    if (!jQuery(this).find('input').prop('disabled')) {
        jQuery('#table-calculator tr').removeClass('active');
        jQuery(this).addClass('active');
        jQuery('#table-calculator tr').find('input').prop('checked', false);
        jQuery(this).find('input').prop('checked', true);
    }
});
function calculateAccountInterest(amount, months, rate, compound) {
    return compound ? eval(amount * Math.pow(1 + rate / (100 * 12), months)) : 0;
};
function calculateAccountInterestRecursive(amount, months, rate, monthamount) {
    var iInterest = amount;
    for (var i = 1; i < months; i++) {
        iInterest += calculateAccountInterest((amount + monthamount), i, rate, true);
    }
    return iInterest;
}
function calculate() {
    var thisAmountMonthly = 0;
    var thisAmountFullTerm = 0;
    var thisAmountTotal = 0;
    var bestAmountTotal = 0;
    var rateCurrentAccount = 0;
    var thisRate = 0;
    var stMonthly = '';
    jQuery('#tbody-' + CurrentCurrency).find('tr').each(function () {
        if (jQuery(this).prop('id') == 't-mdx') {
            thisRate = (CurrentTerm == 6) ? 40 : 50;
        } else {
            thisRate = jQuery(this).data('rate');
        }
        if (jQuery(this).data('current') == 1) {
            rateCurrentAccount = thisRate;
        }
        if (iAmount < jQuery(this).data('amount') || CurrentTerm < jQuery(this).data('term')) {
            jQuery(this).find('.t-req').fadeIn();
            jQuery(this).find('.radio-t').prop('disabled', true);
            jQuery(this).find('.t-m').text('—');
            jQuery(this).find('.t-f').text('—');
            jQuery(this).find('.t-a').text('—');
        } else {
            jQuery(this).find('.t-req').fadeOut();
            jQuery(this).find('input').prop('disabled', false);
            thisAmountEnd = calculateAccountInterestRecursive(thisAmountMonthly, CurrentTerm, thisRate, iMonthAmount);
            if (CurrentCurrency == 'BTC' || CurrentCurrency == 'ETH') {
                thisAmountMonthly = parseFloat(Number(iAmount * ((thisRate / 100) / 12)).toFixed(2));
            } else {
                thisAmountMonthly = Math.round(eval(iAmount * ((thisRate / 100) / 12)));
            }
            thisAmountTotal = eval(thisAmountEnd + iAmount);
            thisAmountFullTerm = thisAmountTotal - (iAmount + (iMonthAmount * (CurrentTerm - 2)));
            jQuery(this).data('total', thisAmountTotal);
            bestAmountTotal = (bestAmountTotal <= thisAmountTotal) ? thisAmountTotal : bestAmountTotal;
            //stMonthly = formatNumber(thisAmountMonthly) + ' ' + Currencies[CurrentCurrency].symbol;
            stMonthly = thisAmountMonthly + ' ' + Currencies[CurrentCurrency].symbol;
            if (iMonthAmount > 0 && jQuery(this).prop('id') != 't-mdx') {
                stMonthly = 'от ' + stMonthly;
            }
            jQuery(this).find('.t-m').text(stMonthly);
            jQuery(this).find('.t-f').text(formatNumber(thisAmountFullTerm) + ' ' + Currencies[CurrentCurrency].symbol);
            jQuery(this).find('.t-a').text(formatNumber(thisAmountTotal) + ' ' + Currencies[CurrentCurrency].symbol);
        }
    });
    jQuery('#tbody-' + CurrentCurrency).find('tr').each(function () {
        if (jQuery(this).data('total') == bestAmountTotal) {
            jQuery(this).addClass('active');
            jQuery(this).find('input').prop('checked', true);
        } else {
            jQuery(this).removeClass('active');
            jQuery(this).find('input').prop('checked', false);
        }
    });
}
currencyClick(jQuery('.calculator__choices button#rub'), 'RUB');