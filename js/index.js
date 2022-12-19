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


function pre(){
    $('.slide li:last').prependTo('.slide');
    $('.slide').css("margin-left","-100%");
    $('.slide').stop().animate({marginLeft:0},2000);
}
function next(){
    $('.slide').stop().animate({marginLeft:-1900},2000, function(){
        $('.slide li:first').appendTo('.slide');
        $('.slide').css({marginLeft:0});
    });
}
setInterval(next,3000);
$('.pre').click(function(){
    prev();
});
$('.next').click(function(){
    next();
});