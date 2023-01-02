


$(function(){
    $('.menu-icon').click(function(){
        $('.menubar').slideToggle();
    })
    $(window).resize(function(){
        if(window.innerWidth<=767){
            $('.menubar').hide();
        }
    })
    $(window).resize(function(){
        if(window.innerWidth>=768){
            $('.menubar').show();
        }
    })
});


$(function () {
    $('.menubar>li').click(function () {
        $('.submenu').stop().slideUp();
        $(this).find('.submenu').stop().slideToggle();
    });
});


/* 인기메뉴 왼쪽 버튼 누르면 .click css 적용되게 하기*/
$(function(){
    $('.pop-menubox>li>button').click(function(){
        $('.pop-menubox>li>button').removeClass('click');
        $(this).addClass('click');
    })
});

/* 인기메뉴 오른쪽 박스 왼쪽 버튼 누르면 이동하게 하기*/
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



/* 슬라이더 움직이는 애니메이션 */
function pre(){
    $('.slide li:last').prependTo('.slide');
    $('.slide').css("margin-left","-100%");
    $('.slide').stop().animate({marginLeft:0},850);
}
function next(){
    $('.slide').stop().animate({marginLeft:"-100%"},850, function(){
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


/* 슬라이더 양쪽 화살표에 호버하면 빨간색버튼이 보였다가 떼면 안 보이게 하기 */
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


 //선택자가 같은 경우 한 번에 써줘도 됨 .text().css() 
 //css로 효과를 주는게 많은 경우 .css()로 묶어서 써줘도 됨 .css({"css":"효과","css":"효과"})
 // 아니면 그냥 .text().css().css() 이렇게 써도 됨
 // 마우스 올리면 한글로 바뀌는거
// if (window.matchMedia("(min-width:1300px)").matches) {
    $(function () {
        // BRAND 메뉴들
        $('.brandhover>ul>li:nth-of-type(1)>a').hover(function () {
            $(this).text("아웃백 이야기").css({ fontFamily: "'Barlow', sans-serif", "fontSize": "1.1rem", "fontWeight": "bold" });
        }, function () {
            $(this).text("OUTBACK STORY").css("fontFamily", "Barlow', sans-serif").css("fontSize", "1.1rem");
        });

        $('.brandhover>ul>li:nth-of-type(2)>a').hover(function () {
            $(this).text("아웃백 책임경영").css({ fontFamily: "'Barlow', sans-serif", "fontSize": "1.1rem", "fontWeight": "bold" })
        }, function () {
            $(this).text("OUTBACK CSR").css("fontFamily", "Barlow', sans-serif").css("fontSize", "1.1rem");
        });

        // MENU 메뉴들
        $('.menuhover>ul>li:nth-of-type(1)>a').hover(function () {
            $(this).text("스테이크&세트").css({ "fontFamily": "Barlow', sans-serif", "fontSize": "1.1rem", "fontWeight": "bold" });
        }, function () {
            $(this).text("STEAK & FAVORITE").css({ "fontFamily": "Barlow', sans-serif", "fontSize": "1.1rem", "fontWeight": "bold" })
        })

        $('.menuhover>ul>li:nth-of-type(2)>a').hover(function () {
            $(this).text("파스타 & 샐러드").css({ "fontFamily": "Barlow', sans-serif", "fontSize": "1.1rem", "fontWeight": "bold" });
        }, function () {
            $(this).text("PASTA & SALADS").css({ "fontFamily": "Barlow', sans-serif", "fontSize": "1.1rem", "fontWeight": "bold" })
        });

        $('.menuhover>ul>li:nth-of-type(3)>a').hover(function () {
            $(this).text("와인").css({ "fontFamily": "Barlow', sans-serif", "fontSize": "1.1rem", "fontWeight": "bold" });
        }, function () {
            $(this).text("WINES").css({ "fontFamily": "Barlow', sans-serif", "fontSize": "1.1rem", "fontWeight": "bold" })
        });

        $('.menuhover>ul>li:nth-of-type(4)>a').hover(function () {
            $(this).text("디저트 & 기타").css({ "fontFamily": "Barlow', sans-serif", "fontSize": "1.1rem", "fontWeight": "bold" });
        }, function () {
            $(this).text("DESSERTS & OTHERS").css({ "fontFamily": "Barlow', sans-serif", "fontSize": "1.1rem", "fontWeight": "bold" })
        });

        $('.menuhover>ul>li:nth-of-type(5)>a').hover(function () {
            $(this).text("점심 세트").css({ "fontFamily": "Barlow', sans-serif", "fontSize": "1.1rem", "fontWeight": "bold" });
        }, function () {
            $(this).text("LUNCH SET").css({ "fontFamily": "Barlow', sans-serif", "fontSize": "1.1rem", "fontWeight": "bold" })
        });

        $('.menuhover>ul>li:nth-of-type(6)>a').hover(function () {
            $(this).text("배달").css({ "fontFamily": "Barlow', sans-serif", "fontSize": "1.1rem", "fontWeight": "bold" });
        }, function () {
            $(this).text("DELIIVERY").css({ "fontFamily": "Barlow', sans-serif", "fontSize": "1.1rem", "fontWeight": "bold" })
        });
    });
// }

$(function () {
    $(".show, .book1").click(function(){
        $("#book-bkgd").fadeIn();
    });

    $(".x-button").click(function () {
        $("#book-bkgd").fadeOut();
    });
    $(".book-button").click(function () {
        if ($("#name").val() !== '' && $("#phone-number").val() !== '' && $("#email").val() !== '' && $("#datepicker").val() !== '' && $("#time").val() !== '') {
            alert("예약이 완료되었습니다.");
            $("#book-bkgd").fadeOut();
            $('form').each(function () {
                this.reset();
            });
        } else {
            alert("정보를 입력해주세요.")
        }
    });
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var date = today.getDate();
    $(".todaydate").text("오늘의 날짜 : " + year + ' / ' + month + ' / ' + date);
});
    $(function(){
        $("#datepicker").datepicker({
            showAnim:"blind"
        });    
    });
    

