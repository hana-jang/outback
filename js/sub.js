// nav 사이즈에 맞춰서 보여졌다 사라졌다
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

// nav 마우스 올리면 한글로 바뀌는거
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

// 팝업창
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

// footer 사업자정보 확인 누르면 팝업창 뜨는거 1300px 이상에서만 작동됨
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


