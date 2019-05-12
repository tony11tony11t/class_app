$(document).ready(function () {
    console.log("load index OK!")
    //登入系統
    $(".login-button").click(function () {
        var username = $("#login-UserName").val();
        var password = $("#login-password").val();
        console.log("開始登入");
        //login_portal(username,password);
        get_funny_term();
        $.mobile.navigate("#page-chooseclass", {
            transition: "pop"
        });
    })
    //選分類的行為
    $(document).on("click", ".choose-funnyterm-item", function () {
        if ($(this).hasClass("choose-funnyterm-activeitem")) {
            $(this).removeClass("choose-funnyterm-activeitem");
        } else {
            if ($(".choose-funnyterm-activeitem").length >= 3) {
                $.confirm({
                    title:"",
                    content: '只能選擇三個哦<br/>再次點選可以取消選取!',
                    type: 'purple',
                    typeAnimated: true,
                    buttons: {
                        tryAgain: {
                            text: '知道了!'
                        }
                    }
                });
            } else {
                $(this).addClass("choose-funnyterm-activeitem");
            }
        }
        if ($(".choose-funnyterm-activeitem").length >= 3){
            $(".choose-start-button").css("display","block");
        }else{
             $(".choose-start-button").css("display","none");
        }
    });
    $(".choose-start-button").click(function(){
        localStorage.removeItem("recommend1");
        localStorage.removeItem("recommend2");
        localStorage.removeItem("recommend3");
        $(".choose-funnyterm-activeitem").each(function(e){
            console.log($(this));
            localStorage.setItem("recommend"+(e+1),$(this).html());
        });
        $.mobile.navigate("#page-index", {
            transition: "pop"
        });
    })
    

    //課程列表的按鈕
    $(".btn_GS").click(function () {
        $(".btn_GS").attr("src", "img/GS_1.png");
        $(".btn_GN").attr("src", "img/GN_1.png");
        $(".btn_LS").attr("src", "img/LS_1.png");
        $(".btn_LE").attr("src", "img/LE_1.png");
        $(this).attr("src", "img/GS_2.png");
        var term = "GS";
        search_classterm(term);
    })
    $(".btn_GN").click(function () {
        $(".btn_GS").attr("src", "img/GS_1.png");
        $(".btn_GN").attr("src", "img/GN_1.png");
        $(".btn_LS").attr("src", "img/LS_1.png");
        $(".btn_LE").attr("src", "img/LE_1.png");
        $(this).attr("src", "img/GN_2.png");
        var term = "GN";
        search_classterm(term);
    })
    $(".btn_LS").click(function () {
        $(".btn_GS").attr("src", "img/GS_1.png");
        $(".btn_GN").attr("src", "img/GN_1.png");
        $(".btn_LS").attr("src", "img/LS_1.png");
        $(".btn_LE").attr("src", "img/LE_1.png");
        $(this).attr("src", "img/LS_2.png");
        var term = "LS";
        search_classterm(term);
    })
    $(".btn_LE").click(function () {
        $(".btn_GS").attr("src", "img/GS_1.png");
        $(".btn_GN").attr("src", "img/GN_1.png");
        $(".btn_LS").attr("src", "img/LS_1.png");
        $(".btn_LE").attr("src", "img/LE_1.png");
        $(this).attr("src", "img/LE_2.png");
        var term = "LE";
        search_classterm(term);
    })
})
