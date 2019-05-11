$(document).ready(function(){
    console.log("load index OK!")
    $(".btn_GS").click(function(){
        $(".btn_GS").attr("src","img/GS_1.png");
        $(".btn_GN").attr("src","img/GN_1.png");
        $(".btn_LS").attr("src","img/LS_1.png");
        $(".btn_LE").attr("src","img/LE_1.png");
        $(this).attr("src","img/GS_2.png");
        var term="GS";
        search_classterm(term);
    })
    $(".btn_GN").click(function(){
        $(".btn_GS").attr("src","img/GS_1.png");
        $(".btn_GN").attr("src","img/GN_1.png");
        $(".btn_LS").attr("src","img/LS_1.png");
        $(".btn_LE").attr("src","img/LE_1.png");
        $(this).attr("src","img/GN_2.png");
        var term="GN";
        search_classterm(term);
    })
    $(".btn_LS").click(function(){
        $(".btn_GS").attr("src","img/GS_1.png");
        $(".btn_GN").attr("src","img/GN_1.png");
        $(".btn_LS").attr("src","img/LS_1.png");
        $(".btn_LE").attr("src","img/LE_1.png");
        $(this).attr("src","img/LS_2.png");
        var term="LS";
        search_classterm(term);
    })
    $(".btn_LE").click(function(){
        $(".btn_GS").attr("src","img/GS_1.png");
        $(".btn_GN").attr("src","img/GN_1.png");
        $(".btn_LS").attr("src","img/LS_1.png");
        $(".btn_LE").attr("src","img/LE_1.png");
        $(this).attr("src","img/LE_2.png");
        var term="LE";
        search_classterm(term);
    })
})