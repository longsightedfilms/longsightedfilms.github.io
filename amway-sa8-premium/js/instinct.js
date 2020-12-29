// Enable the passage of the 'this' object through the JavaScript timers

var __nativeST__ = window.setTimeout, __nativeSI__ = window.setInterval;

window.setTimeout = function (vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */) {
    var oThis = this, aArgs = Array.prototype.slice.call(arguments, 2);
    return __nativeST__(vCallback instanceof Function ? function () {
        vCallback.apply(oThis, aArgs);
    } : vCallback, nDelay);
};

window.setInterval = function (vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */) {
    var oThis = this, aArgs = Array.prototype.slice.call(arguments, 2);
    return __nativeSI__(vCallback instanceof Function ? function () {
        vCallback.apply(oThis, aArgs);
    } : vCallback, nDelay);
};


function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

var arrayShuffle = function (array) {
    for (var i = 0, length = array.length, swap = 0, temp = ''; i < length; i++) {
        swap = Math.floor(Math.random() * (i + 1));
        temp = array[swap];
        array[swap] = array[i];
        array[i] = temp;
    }
    return array;
};

var percentageChance = function (values, chances) {
    for (var i = 0, pool = []; i < chances.length; i++) {
        for (var i2 = 0; i2 < chances[i]; i2++) {
            pool.push(i);
        }
    }
    return values[arrayShuffle(pool)['0']];
};

$(document).ready(function(){
    var id = 0;
    if(window.matchMedia('(max-width: 767px)').matches) {
        var maxorders = 1;
    } else {
        var maxorders = 3;
    }
    function createPopup() {
        id++;
        function createArray(cb) {
            $.getJSON("https://longsightedfilms.com/names/names.php", function (json) {
                var myArray = json;
                cb(myArray);
            });
        }
        createArray(function (array) {
            var count = percentageChance([1, 2], [66, 33]);
            var name = array[0][0];
            var sex = array[0][1];
            var city = array[1][0];
            var ordered = (sex == 'М') ? 'заказал ' : 'заказала ';
            var powder = (count == 2) ? '2 пачки порошка SA8 Premium на сумму <b>3 860 рублей</b>' : '1 пачку порошка SA8 Premium на сумму <b>1 930 рублей</b>';
            var popup = '<div id="' + id + '" class="neworder"><button class="neworder-close">x</button><b class="title">Новый заказ на сайте</b><p class="text">Только что <b>' + name + '</b> из <b>' + city + '</b> ' + ordered + powder + '</p></div>';
            $('.orders').append(popup);
            if ($('.orders .neworder').length > maxorders) {
                $('.orders .neworder:first-child').remove();
            }
            $('.orders .neworder#' + id + ' .neworder-close').click(function(){
                $(this).parent().removeClass('show');
                $(this).parent().on('transitionend', function () {
                    $(this).remove();
                    $(this).off('transitionend');
                })
            })
            setTimeout(() => {
                $('.neworder#' + id).addClass('show');
            }, 100);
            var hidden = setTimeout(() => {
                $('.neworder#' + id).removeClass('show');
                $('.neworder#' + id).on('transitionend', function(){
                    $(this).remove();
                    $(this).off('transitionend');
                })
            }, 15000);
        });
    }
    (function loop() {
        var rand = randomInteger(10, 20) * 500;
        setTimeout(function () {
            createPopup();
            loop();
        }, rand);
    }());
})