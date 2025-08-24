// ゆらゆらのプラグイン



jQuery(function($) {
    $.fn.yurayura = function(config) {
        var obj = this;
        var i = 0;
        var defaults = {
            'move': 5, // 動く量
            'duration': 1000, // 移動にかける時間
            'delay': 0 // 両端で停止する時間
        };
        var setting = $.extend(defaults, config);
        return obj.each(function() {
            (function move() {
                i = i > 0 ? -1 : 1;
                var p = obj.position().top;
                $(obj)
                    .delay(setting.delay)
                    .animate({ top: p + i * setting.move }, {
                        duration: setting.duration,
                        complete: move
                    });
            })();
        });
    };
});




// 潤いの究極へ
$(function() {
    $('.text').children().addBack().contents().each(function() {
        $(this).replaceWith($(this).text().replace(/(\S)/g, '<span class="text-move">$&</span>'));
    });
    setTimeout(function() {
        $(".text").addClass("active");
    }, 1000);
});


// フワッと
$(function() {
    $(window).scroll(function() {
        $(".fadeall").each(function() {
            var imgPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > imgPos - windowHeight + 150) {
                $(this).addClass("fade");
            } else {
                $(this).removeClass("fade");
            }
        });
    });


    // モーダルウィンドウ

    $(window).on("load", function() {
        $(".js-loader").delay(1000).fadeOut(1000); // 画像をフェードアウト
        $(".js-loader-bg").delay(2500).fadeOut(2000); // 背景色をフェードアウト
    });
    // ページの読み込みが完了しなくても5秒経ったら強制的にローディング画面をフェードアウト
    setTimeout("stoploading()", 7000);

    function stoploading() {
        $(".js-loader-bg").fadeOut(600);
    }

    const modal = document.querySelector('.js-modal');
    const modalButton = document.querySelector('.js-modal-button');


    const modalClose = document.querySelector('.js-close-button');

    modalButton.addEventListener('click', () => {
        modal.classList.add('is-open');

    });

    modalClose.addEventListener('click', () => {
        modal.classList.remove('is-open');

    });



    $(window).scroll(function() {
        $(".js-markerScrollAnimation").each(function() {
            var position = $(this).offset().top; //ページの一番上から要素までの距離を取得
            var scroll = $(window).scrollTop(); //スクロールの位置を取得
            var windowHeight = $(window).height(); //ウインドウの高さを取得
            if (scroll > position - windowHeight) { //スクロール位置が要素の位置を過ぎたとき
                $(this).addClass('is-active'); //クラス「active」を与える
            }
        });
    });

    $('#hamburger').on('click', function() {
        $('.icon').toggleClass('close');
        $('.sm').slideToggle();
    });





});

// 数量
(() => {
    //HTMLのid値を使って以下のDOM要素を取得
    const downbutton = document.getElementById('down');
    const upbutton = document.getElementById('up');
    const text = document.getElementById('textbox');
    const reset = document.getElementById('reset');

    //ボタンが押されたらカウント減
    downbutton.addEventListener('click', (event) => {
        //0以下にはならないようにする
        if (text.value >= 1) {
            text.value--;
        }
    });

    //ボタンが押されたらカウント増
    upbutton.addEventListener('click', (event) => {
        text.value++;
    })

    //ボタンが押されたら0に戻る
    reset.addEventListener('click', (event) => {
        text.value = 0;
    })

})();


$(function() {
    const hum = $('#hamburger, .close')
    const nav = $('.sp-nav')
    hum.on('click', function() {
        nav.toggleClass('toggle');
    });



});