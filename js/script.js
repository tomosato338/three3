$(function() {

    //ページ内スクロール
    // var $nav = $(".header");
    // var navHeight = $nav.outerHeight();

    // $('a[href^="#"]').on("click", function() {
    //     var href = $(this).attr("href");
    //     var target = $(href == "#" || href == "" ? "html" : href);
    //     var position = target.offset().top - navHeight;
    //     $("html, body").animate({
    //             scrollTop: position,
    //         },
    //         300,
    //         "swing"
    //     );
    //     return false;
    // });

    //スクロールに応じてヘッダーの背景色が変化
    // $(window).scroll(function() {
    //     if ($(this).scrollTop() > 50) {
    //         $('.header').addClass('active');
    //     } else {
    //         $('.header').removeClass('active');
    //     }
    // });

    //ページトップ
    $("#js-page-top").on("click", function() {
        $("body,html").animate({
                scrollTop: 0,
            },
            300
        );
        return false;
    });

    $(".D").click(function() {
        $(".E").slideToggle("");
    });
});

// 順番にふわっと出す
$(window).scroll(function() {
    // クラスを追加するwindowの位置を設定
    var scrollTop = $(this).scrollTop();
    var scrollBottom = scrollTop + $(this).height();
    var effectPos = scrollBottom - 50;

    // eachでliを順番に処理
    $(".works-item").each(function(i) {
        if (effectPos > $(this).offset().top) {
            var that = this;

            // 0.2s毎にずれて表示
            setTimeout(function() {
                $(that).addClass("fadein");
            }, 50 * i);
        }
    });
});

$(window).on("load", function() {
    $('.top-name').addClass('load')
    setTimeout(function() {
        $('.header').addClass('load')
            // 遅延実行したい処理
    }, 500);



});

$(window).on('scroll load', function() { /* ページロード時、またはスクロールされた時*/
    var scroll = $(this).scrollTop(); /* 現在のスクロール量を測定 */
    var windowHeight = $(window).height(); /* ウィンドウの高さを測定 */
    $('.fadeIn').each(function() { /* 「fadeIn」のクラスがついているものを1つずつ確認し・・・ */
        var cntPos = $(this).offset().top; /* 対象の要素の上からの距離を測定 */
        if (scroll > cntPos - windowHeight + windowHeight / 3) { /* 要素がある位置までスクロールされていたら */
            $(this).addClass('active'); /* 「active」のクラスを付与 */
        }
    });

});



// click to add more drops
console.clear();

class Drop {
    constructor(x, y) {
        console.log(x);
        this.x = x;
        this.y = y;
        this.create();
    }

    create() {
        let dropEl = document.createElement('div');
        dropEl.classList.add('drop');
        dropEl.style.left = `${this.x}px`;
        dropEl.style.top = `${this.y}px`;
        document.body.appendChild(dropEl);
    }
}

const createDrop = e => {
    let xPos = e.clientX,
        yPos = e.clientY;

    let drop = new Drop(xPos, yPos);
}

document.addEventListener('click', createDrop);
document.addEventListener('DOMContentLoaded', function() {
    new Drop(window.innerWidth / 2, window.innerHeight / 2);
});










// 空の背景
$(function() {
    $(".one").each(function(i, elem) {
        var one = $(elem).offset().top;
        $(window).on("load scroll resize", function() {
            var two = $(window).height();
            var three = $(window).scrollTop();
            var showClass = "show";
            var timing = 50; // 50px, add to css
            if (three >= one - two + timing) {
                $(elem).addClass(showClass);
            } else {
                $(elem).removeClass(showClass);
            }
        });
    });
});


// 文字上下
const animationTargetElements = document.querySelectorAll(".textanimation");
for (let i = 0; i < animationTargetElements.length; i++) {
    const targetElement = animationTargetElements[i]
    texts = targetElement.textContent;
    textsArray = [];

    targetElement.textContent = "";


    for (let j = 0; j < texts.split("").length; j++) {
        textsArray.push('<span><span style="animation-delay: ' + ((j + 12) * 0.1) + 's" >' + texts.split("")[j] + '<span></span>')
    }
    for (let k = 0; k < textsArray.length; k++) {
        targetElement.innerHTML += textsArray[k];
    }
}




// drop letters animation function
const RotateCircularTextAnimation = (option) => {
    // default option
    let default_option = {
        target_element: '', // taget HTML element ('#id' '.class' etc)
        diameter: 400, // diameter of a circle (min 1 max 10)
        position_top: 50, // circular position y (%)
        position_left: 50, // circular position x (%)
        font_size: 40, // font size (px)
        last_space: true, // Add a space after the last character. (true or false)
        font_color: 'random', // font color (hex, rgba, name, 'random')
        font_family: 'monospace, serif',
        font_weight: '', // font weight ('' , bold)
        font_neon_color: '', // neon color ('', hex, rgba, name, 'random')
        default_angle: 0, // random default angle (deg or 'random')
        rotate_mode: 3, // rotation mode (0=false 1=X 2=Y 3=XY 4=mix)
        rotate_speed: 5, // rotate speed (min 1)
        rotate_reverse: false, // rotate reverse (true or false)
    };

    // merge option
    let op = Object.assign(default_option, option);

    // whether the target element exists
    if (!document.querySelector(op.target_element)) {
        console.log('no target element.');
        return;
    }


    // target element
    let target_element = document.querySelector(op.target_element);

    target_element.parentElement.style.position = 'relative';

    target_element.style.overflow = 'hidden';
    target_element.style.margin = 0;
    target_element.style.display = 'block';

    // letter clone
    let text = target_element.innerText;
    target_element.innerHTML = '';

    target_element.style.width = `${op.diameter}px`;
    target_element.style.height = `${op.diameter}px`;
    target_element.style.position = 'absolute';
    target_element.style.top = `calc(${op.position_top}% - ${op.diameter / 2}px)`;
    target_element.style.left = `calc(${op.position_left}% - ${op.diameter / 2}px)`;
    target_element.style.textAlign = 'center';
    target_element.style.fontSize = `${op.font_size}px`;

    // circular text container
    let circular_text_container = document.createElement('span');
    target_element.appendChild(circular_text_container);
    circular_text_container.style.display = `inline-block`;
    circular_text_container.style.width = `100%`;
    circular_text_container.style.height = `100%`;

    let colors = ["#6C3483", "#9B59B6", "#8E44AD", "#2980B9", "#3498DB", "#1ABC9C", "#16A085", "#27AE60", "#2ECC71", "#F1C40F", "#F39C12", "#E67E22", "#D35400", "#E74C3C", "#C0392B", "#ECF0F1", "#BDC3C7", "#95A5A6", "#7F8C8D", "#FADBD8", "#F5B7B1", "#EDBB99", "#D7BDE2", "#C39BD3", "#BB8FCE", "#A569BD", "#AF7AC5", "#F0B27A", "#D98880", "#D2B4DE", "#AFB7BF", "#ABB2B9", "#8395A7", "#717D7E", "#566573", "#4B4E4F", "#2C3E50", "#34495E", "#212F3D", "#839192", "#5D6D7E", "#34495E", "#283747", "#212F3D", "#1B2631", "#4A235A", "#5B2C6F", "#78281F", "#7B7D7D", "#626567", "#515A5A", "#424949", "#2E4053", "#2C3E50", "#212F3D"];


    // letter
    let length = text.length;
    if (op.last_space == true) {
        length = text.length + 1;
    }

    for (let i = 0; i < length; i++) {

        let rand1 = Math.floor(Math.random() * 100);
        let rand2 = Math.floor(Math.random() * 100);
        let rand3 = Math.floor(Math.random() * 30);
        let rand4 = Math.floor(Math.random() * 30);

        // font color
        let font_color = op.font_color;
        if (op.font_color == 'random') {
            font_color = colors[rand3];
        }

        // neon color
        let font_neon_color = op.font_neon_color;
        if (op.font_neon_color == 'random') {
            font_neon_color = colors[rand4];
        }

        let letter = document.createElement('span');
        circular_text_container.appendChild(letter);

        if (text[i]) {
            letter.innerText = text[i];
        } else {
            letter.innerText = ' ';
        }

        letter.style.position = 'absolute';
        letter.style.top = 0;
        letter.style.left = `${(op.diameter / 2) - (op.font_size / 2)}px`;
        letter.style.width = `${op.font_size}px`;
        letter.style.height = `${op.diameter}px`;
        letter.style.display = 'inline-block';
        letter.style.transform = `rotate(${360 / length * i}deg)`;
        letter.style.color = font_color;
        letter.style.fontFamily = op.font_family;
        letter.style.fontWeight = op.font_weight;

        if (op.font_neon_color != '') {
            letter.style.textShadow = `
        0 0 0.5em ${font_neon_color},
        0 0 0.1em ${font_neon_color},
        0 0 0.1em ${font_neon_color}
        `;
        }
    }

    // angle
    let angle = 0;
    if (op.default_angle && op.default_angle != 'random') {
        angle = op.default_angle;
    } else if (op.default_angle == 'random') {
        angle = Math.floor(Math.random() * 360);
    }

    circular_text_container.style.transform = `rotate(${angle}deg)`;


    // rotate set
    if (op.rotate_mode != 0 && op.rotate_speed != 0) {

        let rotate_angle = angle + 360;
        // reverse
        if (op.rotate_reverse == true) {
            rotate_angle = -(rotate_angle);
        }

        let direction = 'normal';
        let angle_set = `rotate(${angle}deg)`;
        let rotate_angle_set = `rotate(${angle}deg)`;
        if (op.rotate_mode == 1) {
            angle_set = `rotateX(${angle}deg)`;
            rotate_angle_set = `rotateX(${rotate_angle}deg)`;
        } else if (op.rotate_mode == 2) {
            angle_set = `rotateY(${angle}deg)`;
            rotate_angle_set = `rotateY(${rotate_angle}deg)`;
        } else if (op.rotate_mode == 3) {
            angle_set = `rotate(${angle}deg)`;
            rotate_angle_set = `rotate(${rotate_angle}deg)`;
        } else if (op.rotate_mode == 4) {
            angle_set = `rotate(${angle}deg)`;
            rotate_angle_set = `rotate(${rotate_angle}deg) rotateX(${rotate_angle * 2}deg) rotateY(${rotate_angle}deg)`;
            direction = 'alternate-reverse';
        }

        let letters_anim = circular_text_container.animate(
            [
                { transform: angle_set },
                { transform: rotate_angle_set }
            ], {
                direction: direction,
                iterations: 'Infinity',
                duration: 60000 / op.rotate_speed
            }
        );

    }


};


$(function() {
    $(window).scroll(function() {
        $('.js-fade').each(function() {
            var pos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > pos - windowHeight + 100) {
                $(this).addClass('scroll');
            }
        });
    });
});


$(window).on("load", function() {
    $('.js-box').addClass('load')
});


const scorrllLinks = document.querySelectorAll('a[href^="#"]');
scorrllLinks.forEach((scorrllLink) => {
    scorrllLink.addEventListener("click", (e) => {
        e.preventDefault();
        const hrefLink = scorrllLink.getAttribute("href");
        const targetContent = document.getElementById(hrefLink.replace("#", ""));
        const rectTop = targetContent.getBoundingClientRect().top;
        const positionY = window.pageYOffset;
        const target = rectTop + positionY;
        window.scrollTo({
            top: target,
            behavior: "smooth",
        });
    });
});