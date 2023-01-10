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


 //선택자가 같은 경우 한 번에 써줘도 됨 .text().css() 
 //css로 효과를 주는게 많은 경우 .css()로 묶어서 써줘도 됨 .css({"css":"효과","css":"효과"})
 // 아니면 그냥 .text().css().css() 이렇게 써도 됨

 // 마우스 올리면 한글로 바뀌는거
    $(function () {
        // nav 메뉴들
        $(".menubar>li:nth-of-type(1)>a").hover(function(){
            $(this).text("아 웃 백").css({"font-family": " 'twayair';", "fontSize":"1.4rem"});
        }, function(){
            $(this).text("BRAND").css({"font-family": " 'twayair';","fontSize":"1.4rem"});
        });
        $(".menubar>li:nth-of-type(2)>a").hover(function(){
            $(this).text("메 뉴").css({"font-family": " 'twayair';", "fontSize":"1.4rem"});
        }, function(){
            $(this).text("MENU").css({"font-family": " 'twayair';", "fontSize":"1.4rem"});
        });
        $(".menubar>li:nth-of-type(3)>a").hover(function(){
            $(this).text("멤 버 십").css({"font-family": " 'twayair';", "fontSize":"1.4rem"});
        }, function(){
            $(this).text("MEMBERSHIP").css({"font-family": " 'twayair';", "fontSize":"1.4rem"});
        });
        $(".menubar>li:nth-of-type(4)>a").hover(function(){
            $(this).text("할 인").css({"font-family": " 'twayair';", "fontSize":"1.4rem"});
        }, function(){
            $(this).text("BENEFIT").css({"font-family": " 'twayair';", "fontSize":"1.4rem"});
        });
        $(".menubar>li:nth-of-type(5)>a").hover(function(){
            $(this).text("지점 위치").css({"font-family": " 'twayair';", "fontSize":"1.4rem"});
        }, function(){
            $(this).text("STORE").css({"font-family": " 'twayair';", "fontSize":"1.4rem"});
        });

        // BRAND 메뉴들
        $('.brandhover>ul>li:nth-of-type(1)>a').hover(function () {
            $(this).text("아웃백 이야기").css({ "fontFamily": "'Barlow', sans-serif", "fontSize": "1.1rem", "fontWeight": "bold" });
        }, function () {
            $(this).text("OUTBACK STORY").css("fontFamily", "Barlow', sans-serif").css("fontSize", "1.1rem");
        });

        $('.brandhover>ul>li:nth-of-type(2)>a').hover(function () {
            $(this).text("아웃백 책임경영").css({ "fontFamily": "'Barlow', sans-serif", "fontSize": "1.1rem", "fontWeight": "bold" })
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
        $('.benefithover>ul>li>a').hover(function(){
            $(this).text("할인 카드").css({ "fontFamily": "Barlow', sans-serif", "fontSize": "1.1rem", "fontWeight": "bold" });
        }, function(){
            $(this).text("CREDIT CARDS").css({"fontFamily": "Barlow', sans-serif", "fontSize": "1.1rem", "fontWeight": "bold" });
        });

        // 예약버튼
        $(".book").hover(function(){
            $(this).text("예약하기").css({"font-family": "Arial, Helvetica, sans-serif","width":"93px","opacity":"0.9"});
        }, function(){
            $(this).text("RESERVE").css({"font-family": "Arial, Helvetica, sans-serif","opacity":"1"});
        });
    });


// 팝업창 텍스트창 입력되지 않은 거 있으면 경고창 뜨기
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
    // 팝업창 오늘 날짜 나오게 하기
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var date = today.getDate();
    $(".todaydate").text("오늘의 날짜 : " + year + ' / ' + month + ' / ' + date);

    // 달력 애니메이션 적용
    $("#datepicker").datepicker({
        showAnim:"blind"
    });
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

// sub페이지

// 카드리스트 li 누르면 카드화면 변경
$(function(){
    $(".card-name li").click(function(){
        $(this).addClass("card-name-li");
        $(this).siblings().removeClass("card-name-li");
        $(this).find("a").addClass("card-name-li-a");
        $(this).siblings().find("a").removeClass("card-name-li-a");

        var index=$(this).index();
        // console.log(index);
        $("#card>div").filter(":visible").stop(true).fadeOut(200).end()
        .eq(index).stop(true).fadeIn(200);
    });
    $(".card-name li:eq(0)").trigger("click");
});


//모바일화면 화살표 누르면 메뉴 내려오기
$(function(){
    if(window.matchMedia("(max-width:767px)").matches){
        var text=$(".etc3 h4").html().replace("/","/<br>");
        $(".etc3 h4").html(text);

        $("#card h4").click(function(){
            $(this).find(".openbtn").toggleClass("openbtnred");
            $(this).next().slideToggle("1500").css("display","flex");
            $(this).parent(".samsung").siblings().find(".card-text").slideUp("1500").end().find(".openbtn").removeClass("openbtnred");
            $(this).parent(".sinhan").siblings().find(".card-text").slideUp("1500").end().find(".openbtn").removeClass("openbtnred");
            $(this).parent(".bccard").siblings().find(".card-text").slideUp("1500").end().find(".openbtn").removeClass("openbtnred");
            $(this).parent(".etccard").siblings().find(".card-text").slideUp("1500").end().find(".openbtn").removeClass("openbtnred");
        });
        $(".card-name li").click(function(){
            $(".openbtn").removeClass("openbtnred");
            $(".card-text").slideUp("1500");
        })

        // $(".openbtn").click(function () {
        //     $(".openbtn").not(this).removeClass("openbtnred")
        //     $(this).toggleClass("openbtnred");
        //     $(this).parents(".samsung").siblings().find(".card-text").slideUp("1500");
        //     $(this).parent().next().slideToggle("1500").css("display", "flex");
        //     $(this).parents(".sinhan").siblings().find(".card-text").slideUp("1500");
        //     $(this).parents(".bccard").siblings().find(".card-text").slideUp("1500");
        //     $(this).parents(".etccard").siblings().find(".card-text").slideUp("1500");
        // });
    };
});


