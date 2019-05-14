$(document).ready(function () {
    paintrader_chart();
    console.log("load index OK!");
    //如果已經登入過的，取得資料後直接進入首頁
    if(localStorage.getItem("username")){
        get_member_name();
        $.mobile.navigate("#page-index", {
            transition: "pop"
        });
    }
        
    //登入系統
    $(".login-button").click(function () {
        var username = $("#login-UserName").val();
        var password = $("#login-password").val();
        login_portal(username,password);
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
        insert_user();
        get_member_name();
        $.mobile.navigate("#page-index", {
            transition: "pop"
        });
        
    })
    //我要推薦-1
    $(".class-1-funny .class-1-barscore .class-1-funny-dot").click(function(){
        console.log("點到了!")
        var score=$(this).attr("data-score");
        $(".class-1-funny class-1-funny-dot").each(function(e){
            if(score>e){
                $(this).css({
                    backgroundColor:"#5E6ED0",
                    width:"4vw",
                    height:"4vw",
                    position:"relative",
                    top:"5px"
                    
                })
            }
        })
    })
    //我要推薦-2
    $(".class-1-funny .class-1-barscore .class-1-funny-dot").click(function() {
                var score = parseInt($(this).attr("data-score"));
                $(".class-1-funny .class-1-barscore .class-1-funny-dot").each(function(e) {
                    $(this).css({
                            backgroundColor: "#FFCCD8",
                            width: "3vw",
                            height: "3vw",
                            position: "relative",
                            top: "0px",
                            marginRight:"13vw"
                    })
                    if (score > e) {
                         console.log($(this));
                        $(this).css({
                            backgroundColor: "#5E6ED0",
                            width: "3.5vw",
                            height: "3.5vw",
                            position: "relative",
                            top: "2px",
                            marginRight:"12.5vw"

                        })
                    }
                })
                var len=(score-1)*18;
                $(".class-1-funny .class-1-barscore .class-1-line-fill").css({
                    width:len+"vw"
                })
                $(this).css({
                    backgroundColor: "#0B1F9A",
                    width: "4vw",
                    height: "4vw",
                })
            });
            $(".class-1-self .class-1-barscore .class-1-self-dot").click(function() {
                var score = parseInt($(this).attr("data-score"));
                $(".class-1-self .class-1-barscore .class-1-self-dot").each(function(e) {
                    $(this).css({
                            backgroundColor: "#FFCCD8",
                            width: "3vw",
                            height: "3vw",
                            position: "relative",
                            top: "0px",
                            marginRight:"13vw"
                    })
                    if (score > e) {
                         console.log($(this));
                        $(this).css({
                            backgroundColor: "#5E6ED0",
                            width: "3.5vw",
                            height: "3.5vw",
                            position: "relative",
                            top: "2px",
                            marginRight:"12.5vw"

                        })
                    }
                })
                var len=(score-1)*18;
                $(".class-1-self .class-1-barscore .class-1-line-fill").css({
                    width:len+"vw"
                })
                $(this).css({
                    backgroundColor: "#0B1F9A",
                    width: "4vw",
                    height: "4vw",
                })
            });
            $(".class-1-interactive .class-1-barscore .class-1-interactive-dot").click(function() {
                var score = parseInt($(this).attr("data-score"));
                $(".class-1-interactive .class-1-barscore .class-1-interactive-dot").each(function(e) {
                    $(this).css({
                            backgroundColor: "#FFCCD8",
                            width: "3vw",
                            height: "3vw",
                            position: "relative",
                            top: "0px",
                            marginRight:"13vw"
                    })
                    if (score > e) {
                         console.log($(this));
                        $(this).css({
                            backgroundColor: "#5E6ED0",
                            width: "3.5vw",
                            height: "3.5vw",
                            position: "relative",
                            top: "2px",
                            marginRight:"12.5vw"

                        })
                    }
                })
                var len=(score-1)*18;
                $(".class-1-interactive .class-1-barscore .class-1-line-fill").css({
                    width:len+"vw"
                })
                $(this).css({
                    backgroundColor: "#0B1F9A",
                    width: "4vw",
                    height: "4vw",
                })
            });
            $(".class-1-practice .class-1-barscore .class-1-practice-dot").click(function() {
                var score = parseInt($(this).attr("data-score"));
                $(".class-1-practice .class-1-barscore .class-1-practice-dot").each(function(e) {
                    $(this).css({
                            backgroundColor: "#FFCCD8",
                            width: "3vw",
                            height: "3vw",
                            position: "relative",
                            top: "0px",
                            marginRight:"13vw"
                    })
                    if (score > e) {
                         console.log($(this));
                        $(this).css({
                            backgroundColor: "#5E6ED0",
                            width: "3.5vw",
                            height: "3.5vw",
                            position: "relative",
                            top: "2px",
                            marginRight:"12.5vw"

                        })
                    }
                })
                var len=(score-1)*18;
                $(".class-1-practice .class-1-barscore .class-1-line-fill").css({
                    width:len+"vw"
                })
                $(this).css({
                    backgroundColor: "#0B1F9A",
                    width: "4vw",
                    height: "4vw",
                })
            });
            $(".class-1-theory .class-1-barscore .class-1-theory-dot").click(function() {
                var score = parseInt($(this).attr("data-score"));
                $(".class-1-theory .class-1-barscore .class-1-theory-dot").each(function(e) {
                    $(this).css({
                            backgroundColor: "#FFCCD8",
                            width: "3vw",
                            height: "3vw",
                            position: "relative",
                            top: "0px",
                            marginRight:"13vw"
                    })
                    if (score > e) {
                         console.log($(this));
                        $(this).css({
                            backgroundColor: "#5E6ED0",
                            width: "3.5vw",
                            height: "3.5vw",
                            position: "relative",
                            top: "2px",
                            marginRight:"12.5vw"

                        })
                    }
                })
                var len=(score-1)*18;
                $(".class-1-theory .class-1-barscore .class-1-line-fill").css({
                    width:len+"vw"
                })
                $(this).css({
                    backgroundColor: "#0B1F9A",
                    width: "4vw",
                    height: "4vw",
                })
            });
            $(".class-1-total .class-1-barscore .class-1-total-dot").click(function() {
                var score = parseInt($(this).attr("data-score"));
                $(".class-1-total .class-1-barscore .class-1-total-dot").each(function(e) {
                    $(this).css({
                            backgroundColor: "#FFCCD8",
                            width: "3vw",
                            height: "3vw",
                            position: "relative",
                            top: "0px",
                            marginRight:"13vw"
                    })
                    if (score > e) {
                         console.log($(this));
                        $(this).css({
                            backgroundColor: "#5E6ED0",
                            width: "3.5vw",
                            height: "3.5vw",
                            position: "relative",
                            top: "2px",
                            marginRight:"12.5vw"

                        })
                    }
                })
                var len=(score-1)*18;
                $(".class-1-total .class-1-barscore .class-1-line-fill").css({
                    width:len+"vw"
                })
                $(this).css({
                    backgroundColor: "#0B1F9A",
                    width: "4vw",
                    height: "4vw",
                })
            });
    //首頁按鈕
    $(".home-body .home-search").click(function(){
        $.mobile.navigate("#page-search", {
            transition: "pop"
        });
    })
    $(".home-body .home-recommed").click(function(){
        $.mobile.navigate("#page-write-1", {
            transition: "pop"
        });
    })
     $(".home-body .user-photo").click(function(){
        $.mobile.navigate("#page-personal", {
            transition: "pop"
        });
    })
    $(".home-body .home-category .catory-LE").click(function(){
        $.mobile.navigate("#page-classlist", {
            transition: "pop"
        });
        $(".btn_GS").attr("src", "img/GS_1.png");
        $(".btn_GN").attr("src", "img/GN_1.png");
        $(".btn_LS").attr("src", "img/LS_1.png");
        $(".btn_LE").attr("src", "img/LE_1.png");
        $(".btn_LE").attr("src", "img/LE_2.png");
        var term = "LE";
        search_classterm(term);
    })
    $(".home-body .home-category .catory-LS").click(function(){
        $.mobile.navigate("#page-classlist", {
            transition: "pop"
        });
        $(".btn_GS").attr("src", "img/GS_1.png");
        $(".btn_GN").attr("src", "img/GN_1.png");
        $(".btn_LS").attr("src", "img/LS_1.png");
        $(".btn_LE").attr("src", "img/LE_1.png");
        $(".btn_LS").attr("src", "img/LS_2.png");
        var term = "LS";
        search_classterm(term);
    })
    $(".home-body .home-category .catory-GS").click(function(){
        $.mobile.navigate("#page-classlist", {
            transition: "pop"
        });
        $(".btn_GS").attr("src", "img/GS_1.png");
        $(".btn_GN").attr("src", "img/GN_1.png");
        $(".btn_LS").attr("src", "img/LS_1.png");
        $(".btn_LE").attr("src", "img/LE_1.png");
        $(".btn_GS").attr("src", "img/GS_2.png");
        var term = "GS";
        search_classterm(term);
    })
    $(".home-body .home-category .catory-GN").click(function(){
        $.mobile.navigate("#page-classlist", {
            transition: "pop"
        });
        $(".btn_GS").attr("src", "img/GS_1.png");
        $(".btn_GN").attr("src", "img/GN_1.png");
        $(".btn_LS").attr("src", "img/LS_1.png");
        $(".btn_LE").attr("src", "img/LE_1.png");
        $(".btn_GN").attr("src", "img/GN_2.png");
        var term = "GN";
        search_classterm(term);
    })
    search_classhot();  //熱門課程-前10筆
    search_classrecommend() //為你推薦-每個分類隨機3筆

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
    //點選課程卡片進入詳細資訊的部分
    $(document).on("click",".classlist-classlist-item",function(){
        console.log($(this).attr("data-number"));
        console.log($(this).attr("data-term"));
        $.mobile.navigate("#page-classinfo", {
            transition: "pop"
        });
    })
})
