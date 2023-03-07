$(function () {
    // alert('salom')
    $("nav .menu i:nth-of-type(1)").click(function open() {
        $(".menu_ul").toggle("fast");
        $("nav .menu i:nth-of-type(1)").css("display" ,"none");
        $("nav .menu i:nth-of-type(2)").css("display" ,"block");
    });
    $("nav .menu i:nth-of-type(2)").click(function () {
        $(".menu_ul").toggle("fast");
        $("nav .menu i:nth-of-type(1)").css("display" ,"block");
        $("nav .menu i:nth-of-type(2)").css("display" ,"none");
    });


    $("nav .menu .menu_ul ul li").click(function(){
        $(".menu_ul").css("display" ,"none");
    });
    
});

