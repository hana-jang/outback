$(function(){
    $('.pop-menubox>li>button').click(function(){
        $('.pop-menubox>li>button').removeClass('click');
        $(this).addClass('click');
    })
});

$(function(){
    $('.pop-menubox>li:nth-of-type(1)>button').click(function(){
        $('.pop-rightbox').animate({marginLeft:0},800);
    })
    $('.pop-menubox>li:nth-of-type(2)>button').click(function(){
        $('.pop-rightbox').animate({marginLeft:-900},800);
    })
    $('.pop-menubox>li:nth-of-type(3)>button').click(function(){
        $('.pop-rightbox').animate({marginLeft:-1800},800);
    })
    $('.pop-menubox>li:nth-of-type(4)>button').click(function(){
        $('.pop-rightbox').animate({marginLeft:-2700},800);
    })
});

$(function(){
    $('.thirdfooter>li:nth-of-type(3)>a').click(function(){
        $('#popupcheck').fadeToggle();
    });
});

$(function(){
    $('#popupcheck>a').click(function(){
        $('#popupcheck').fadeOut();
    });
});

// $(window).resize(function(){
//     if(window.innerWidth<=1320){

//     }
// });



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


 //선택자가 같은 경우 한 번에 써줘도 됨 .text().css() / css로 효과를 주는게 많은 경우 .css()로 묶어서 써줘도 됨 .css({"css":"효과","css":"효과"}) / 아니면 그냥 .text().css().css() 이렇게 써도 됨

$(function () {
    // BRAND 메뉴들
    $('.brandhover>ul>li:nth-of-type(1)>a').hover(function () {
        $(this).text("아웃백 이야기").css({ fontFamily: "'Barlow', sans-serif", "fontSize": "1.1rem", "fontWeight": "bold"});
    }, function () {
        $(this).text("OUTBACK STORY").css("fontFamily", "Barlow', sans-serif").css("fontSize", "1.1rem");
    });

    $('.brandhover>ul>li:nth-of-type(2)>a').hover(function () {
        $(this).text("아웃백 책임경영").css({ fontFamily: "'Barlow', sans-serif", "fontSize": "1.1rem", "fontWeight": "bold"})
    }, function () {
        $(this).text("OUTBACK CSR").css("fontFamily", "Barlow', sans-serif").css("fontSize", "1.1rem");
    });

    // MENU 메뉴들
    $('.menuhover>ul>li:nth-of-type(1)>a').hover(function () {
        $(this).text("스테이크&세트").css({"fontFamily": "Barlow', sans-serif", "fontSize": "1.1rem", "fontWeight": "bold"});
    }, function () {
        $(this).text("STEAK & FAVORITE").css({"fontFamily":"Barlow', sans-serif","fontSize":"1.1rem","fontWeight":"bold"})
    })

    $('.menuhover>ul>li:nth-of-type(2)>a').hover(function(){
        $(this).text("파스타 & 샐러드").css({"fontFamily": "Barlow', sans-serif", "fontSize": "1.1rem", "fontWeight": "bold"});  
    }, function(){
        $(this).text("PASTA & SALADS").css({"fontFamily": "Barlow', sans-serif", "fontSize": "1.1rem", "fontWeight": "bold"})
    });

    $('.menuhover>ul>li:nth-of-type(3)>a').hover(function(){
        $(this).text("와인").css({"fontFamily": "Barlow', sans-serif", "fontSize": "1.1rem", "fontWeight": "bold"});  
    }, function(){
        $(this).text("WINES").css({"fontFamily": "Barlow', sans-serif", "fontSize": "1.1rem", "fontWeight": "bold"})
    });

    $('.menuhover>ul>li:nth-of-type(4)>a').hover(function(){
        $(this).text("디저트 & 기타").css({"fontFamily": "Barlow', sans-serif", "fontSize": "1.1rem", "fontWeight": "bold"});  
    }, function(){
        $(this).text("DESSERTS & OTHERS").css({"fontFamily": "Barlow', sans-serif", "fontSize": "1.1rem", "fontWeight": "bold"})
    });

    $('.menuhover>ul>li:nth-of-type(5)>a').hover(function(){
        $(this).text("점심 세트").css({"fontFamily": "Barlow', sans-serif", "fontSize": "1.1rem", "fontWeight": "bold"});  
    }, function(){
        $(this).text("LUNCH SET").css({"fontFamily": "Barlow', sans-serif", "fontSize": "1.1rem", "fontWeight": "bold"})
    });

    $('.menuhover>ul>li:nth-of-type(6)>a').hover(function(){
        $(this).text("배달").css({"fontFamily": "Barlow', sans-serif", "fontSize": "1.1rem", "fontWeight": "bold"});  
    }, function(){
        $(this).text("DELIIVERY").css({"fontFamily": "Barlow', sans-serif", "fontSize": "1.1rem", "fontWeight": "bold"})
    });
});

