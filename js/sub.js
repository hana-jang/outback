// sub페이지

// 카드리스트 li 누르면 카드화면 변경
$(function(){
    $(".card-name li").click(function(){
        $(this).addClass("card-name-li");
        $(this).siblings().removeClass("card-name-li");
        $(this).find("a").addClass("card-name-li-a");
        $(this).siblings().find("a").removeClass("card-name-li-a");

        var index=$(this).index();
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
    };
});


