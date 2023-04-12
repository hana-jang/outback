$(function () {
    if(window.matchMedia("(max-width:1299px)").matches){
            // 모바일크기에서 메뉴nav 클릭하면 메뉴리스트들 나오는거 
            $('.menubar>li').click(function () {
                $('.submenu').stop().slideUp();
                $(this).find('.submenu').stop().slideToggle();
            });
    }
});

$(function () {
    // 모바일크기 메뉴아이콘 누르면 메뉴들 나오기
    $('.menu-icon').click(function () {
        $('.menubar').slideToggle();
    });
    $(window).resize(function () {
        if (window.innerWidth <= 1299) {
            $('.menubar').hide();
        }
    });
    $(window).resize(function () {
        if (window.innerWidth >= 1300) {
            $('.menubar').show();
        }
    });
});
 
// 인기메뉴 왼쪽 버튼 누르면 .click css 적용되게 하기
$(function(){
    $('.pop-menubox>li>button').click(function(){
        $('.pop-menubox>li>button').removeClass('click');
        $(this).addClass('click');
    })
});

// 인기메뉴 오른쪽 박스 왼쪽 버튼 누르면 이동하게 하기
$(function(){
    $('.pop-menubox>li:nth-of-type(1)>button').click(function(){
        $('.pop-rightbox').animate({marginLeft:0},800);
    })
    $('.pop-menubox>li:nth-of-type(2)>button').click(function(){
        $('.pop-rightbox').animate({marginLeft:"-100%"},800);
    })
    $('.pop-menubox>li:nth-of-type(3)>button').click(function(){
        $('.pop-rightbox').animate({marginLeft:"-200%"},800);
    })
    $('.pop-menubox>li:nth-of-type(4)>button').click(function(){
        $('.pop-rightbox').animate({marginLeft:"-300%"},800);
    })
});




// 사업자정보확인 누르면 팝업 뜨는거 1300px 이상일때만
if(window.matchMedia("(min-width:1300px)").matches){
    $(function(){
        $('.thirdfooter>li:nth-of-type(5)>a').click(function(){
            $('#popupcheck').fadeToggle();
        });
        $('#popupcheck>a').click(function(){
            $('#popupcheck').fadeOut();
        });
    });
}



//슬라이더 움직이는 애니메이션
function pre(){
    $('.slide li:last').prependTo('.slide');
    $('.slide').css("margin-left","-100%");
    $('.slide').stop().animate({marginLeft:0},900);
}
function next(){
    $('.slide').stop().animate({marginLeft:"-100%"},900, function(){
        $('.slide li:first').appendTo('.slide');
        $('.slide').css({marginLeft:0});
    });
}
setInterval(next,4000);

$(function(){
    $('.pre').click(function(){
        pre();
    });
    $('.pre1').click(function(){
        pre();
    });

    $('.next').click(function(){
        next();
    });
    $('.next1').click(function(){
        next();
    })
});


// 슬라이더 양쪽 화살표에 호버하면 빨간색버튼이 보였다가 떼면 안 보이게 하기
$(function(){
    $('.pre>img').hover(function(){
        $(this).hide();
        $('.pre1>img').show();
    }, function(){
        $(this).show();
        $('.pre1>img').hide();
    });
    $('.next>img').hover(function(){
        $(this).hide();
        $('.next1>img').show();
    }, function(){
        $(this).show();
        $('.next1>img').hide();
    })

});


$(function(){
    if(window.matchMedia("(max-width:1299px)").matches){
        $(".menu-icon").click(function(){
            $(".menu-linebar:eq(0)").toggleClass("icon-rotate-num1").css("transition","all 0.2s linear");
            $(".menu-linebar:eq(1)").toggleClass("icon-none").css("transition","all 0.2s linear");
            $(".menu-linebar:eq(2)").toggleClass("icon-rotate-num2").css("transition","all 0.2s linear");
        });
    }
});