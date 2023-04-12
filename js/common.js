
 //선택자가 같은 경우 한 번에 써줘도 됨 .text().css() 
 //css로 효과를 주는게 많은 경우 .css()로 묶어서 써줘도 됨 .css({"css":"효과","css":"효과"})
 // 아니면 그냥 .text().css().css() 이렇게 써도 됨

 // 마우스 올리면 한글로 바뀌는거
 $(function () {
    // nav 메뉴들
    $(".menubar>li:nth-of-type(1)>a").hover(function(){
        $(this).text("아웃백").css({"font-family":"MonoplexKRWideNerd-Bold","fontSize":"1.4rem"});
    }, function(){
        $(this).text("BRAND").css({"font-family":"MonoplexKRWideNerd-Bold","fontSize":"1.4rem"});
    });
    $(".menubar>li:nth-of-type(2)>a").hover(function(){
        $(this).text("메뉴").css({"font-family":"MonoplexKRWideNerd-Bold", "fontSize":"1.4rem"});
    }, function(){
        $(this).text("MENU").css({"font-family":"MonoplexKRWideNerd-Bold", "fontSize":"1.4rem"});
    });
    $(".menubar>li:nth-of-type(3)>a").hover(function(){
        $(this).text("멤버십").css({"font-family":"MonoplexKRWideNerd-Bold", "fontSize":"1.4rem"});
    }, function(){
        $(this).text("MEMBERSHIP").css({"font-family":"MonoplexKRWideNerd-Bold", "fontSize":"1.4rem"});
    });
    $(".menubar>li:nth-of-type(4)>a").hover(function(){
        $(this).text("할인").css({"font-family":"MonoplexKRWideNerd-Bold", "fontSize":"1.4rem"});
    }, function(){
        $(this).text("BENEFIT").css({"font-family":"MonoplexKRWideNerd-Bold", "fontSize":"1.4rem"});
    });
    $(".menubar>li:nth-of-type(5)>a").hover(function(){
        $(this).text("지점 위치").css({"font-family":"MonoplexKRWideNerd-Bold", "fontSize":"1.4rem"});
    }, function(){
        $(this).text("STORE").css({"font-family":"MonoplexKRWideNerd-Bold", "fontSize":"1.4rem"});
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