/*這是拿來控制db的檔案*/
/*delete_evaluation.php     刪除評論
 *get_class_info.php        取得課程詳細資訊
 *get_class_evaluation.php  取得課程詳細評論
 *insert_evalution.php      新增評論
 *insert_user.php           新增會員資料
 *search_class.php          搜尋課程(關鍵字)
 *search_classterm.php      搜尋課程(類別)
 */
function login_portal(username, password) {
    localStorage.clear();
    //TODO-取得欄位資料
    var check = $.ajax({
        url: "http://127.0.0.1/classapp/login_portal/login.php",
        type: "POST",
        datatype: "JSON",
        async: false,
        data: {
            "username": username,
            "password": password
        },
        success(msg) {
            console.log("成功登入!");
            var result = JSON.parse(msg);
            var total = result.length;
            if (result[0] == "error") {
                //TODO-帳號或密碼錯誤
            } else {
                for (var i = 0; i < total; i++) {
                    localStorage.setItem("username", username);
                    switch (result[i][0].substr(0, 2)) {
                        case "GS":
                            localStorage.setItem("GS", result[i][1]);
                            break;
                        case "GN":
                            localStorage.setItem("GN", result[i][1]);
                            break;
                        case "LS":
                            localStorage.setItem("LS", result[i][1]);
                            break;
                        case "LE":
                            localStorage.setItem("LE", result[i][1]);
                            break;
                        default:
                            break;
                    }
                }
            }

        },
        error(msg) {}
    });
}

function search_class() {
    //TODO-取得欄位資料
    var check = $.ajax({
        url: "http://114.32.130.29/classapp/class_db_php/search_class.php",
        type: "POST",
        datatype: "JSON",
        data: {
            "keyword": '' //TODO-資料名稱
        },
        success(msg) {
            var result = JSON.parse(msg);
            var total = result.length;
            //TODO-取出所有資料
        },
        error(msg) {}
    });
}

function search_classterm(term) {
    console.log("into search_classtermfun")
    //TODO-取得欄位資料
    var check = $.ajax({
        url: "http://127.0.0.1/classapp/class_db_php/search_classterm.php",
        type: "POST",
        datatype: "JSON",
        data: {
            "term": term //TODO-資料名稱
        },
        success(msg) {
            $(".classlist-classlist").html("");
            var result = JSON.parse(msg);
            var total = result.length;
            for (var i = 0; i < total; i++) {
                var name = get_class_listinfo(result[i][0], result[i][1]);
                var item = "<div class='classlist-classlist-item'><div class='classlist-classlist-raderchart'>" +
                    "<rader-chart data-funny='" + result[i][3] + "' data-self='" + result[i][4] + "' data-interactive='" + result[i][5] + "' data-practice='" + result[i][6] + "' data-theory='" + result[i][7] + "' data-total='" + result[i][8] + "' data-theme='B_" + term + "'></rader-chart></div>" +
                    "<h5 class='classlist-classlist-title'>" + name + "</h5>" +
                    "<p class='classlist-classlist-starcount'>" + result[i][8] + "<span><img src='img/star.png'></span></p></div>";
                $(".classlist-classlist").append(item);
            }
            paintrader_chart();
        },
        error(msg) {}
    });
}

function insert_user() {
    var insert = $.ajax({
        url: "http://114.32.130.29/classapp/class_db_php/insert_user.php",
        type: "POST",
        datatype: "JSON",
        data: {
            "username": '', //TODO-資料名稱
            "GSClass": '', //TODO-資料名稱
            "GSClass": '', //TODO-資料名稱
            "GNClass": '', //TODO-資料名稱
            "LSClass": '', //TODO-資料名稱
            "LEClass": '', //TODO-資料名稱
            "recommend1": '', //TODO-資料名稱
            "recommend2": '', //TODO-資料名稱
            "recommend3": '', //TODO-資料名稱
        },
        success(msg) {
            var result = JSON.parse(msg);
            var total = result.length;
            //TODO-取出所有資料
        },
        error(msg) {}
    });
}

function insert_evaluation() {
    //TODO-取得欄位資料
    var check = $.ajax({
        url: "http://114.32.130.29/classapp/class_db_php/insert_evaluation.php",
        type: "POST",
        datatype: "JSON",
        data: {
            "username": '', //TODO-資料名稱
            "semester": '', //TODO-資料名稱
            "number": '', //TODO-資料名稱
            "term": '', //TODO-資料名稱
            "funnty": '', //TODO-資料名稱
            "self": '', //TODO-資料名稱
            "interactive": '', //TODO-資料名稱
            "practice": '', //TODO-資料名稱
            "theory": '', //TODO-資料名稱
            "total": '', //TODO-資料名稱
            "reason": '', //TODO-資料名稱
            "content": '', //TODO-資料名稱
            "score": '', //TODO-資料名稱
            "other": '', //TODO-資料名稱
        },
        success(msg) {
            var result = JSON.parse(msg);
            var total = result.length;
            //TODO-取出所有資料
        },
        error(msg) {}
    });
}

function get_class_info(number, term) {
    //TODO-取得欄位資料
    var check = $.ajax({
        url: "http://127.0.0.1/classapp/class_db_php/get_class_info.php",
        type: "POST",
        datatype: "JSON",
        data: {
            "number": number, //TODO-資料名稱
            "term": term //TODO-資料名稱
        },
        success(msg) {
            var result = JSON.parse(msg);
            var total = result.length;
            //TODO-取出所有資料
        },
        error(msg) {}
    });
}

function get_class_listinfo(number, term) {
    var name;
    //TODO-取得欄位資料
    var check = $.ajax({
        url: "http://127.0.0.1/classapp/class_db_php/get_class_listinfo.php",
        type: "POST",
        datatype: "JSON",
        async: false,
        data: {
            "number": number,
            "term": term
        },
        success(msg) {
            var result = JSON.parse(msg);
            var total = result.length;
            name = result[0][0];
        },
        error(msg) {}
    });
    return name;
}

function get_class_evalution() {
    //TODO-取得欄位資料
    var check = $.ajax({
        url: "http://114.32.130.29/classapp/class_db_php/get_class_evalution.php",
        type: "POST",
        datatype: "JSON",
        data: {
            "number": '', //TODO-資料名稱
            "term": '' //TODO-資料名稱
        },
        success(msg) {
            var result = JSON.parse(msg);
            var total = result.length;
            //TODO-取出所有資料
        },
        error(msg) {}
    });
}

function delete_evaluation() {
    //TODO-取得欄位資料
    var check = $.ajax({
        url: "http://114.32.130.29/classapp/class_db_php/delete_evaluation.php",
        type: "POST",
        datatype: "JSON",
        data: {
            "username": '', //TODO-資料名稱
            "semester": '', //TODO-資料名稱
            "number": '', //TODO-資料名稱
            "term": '', //TODO-資料名稱
        },
        success(msg) {
            var result = JSON.parse(msg);
            var total = result.length;
            //TODO-取出所有資料
        },
        error(msg) {}
    });
}

function get_funny_term() {
    $(".choose-content").html("");
    //TODO-取得欄位資料
    var check = $.ajax({
        url: "http://127.0.0.1/classapp/class_db_php/get_funny_term.php",
        type: "POST",
        datatype: "JSON",
        data: {},
        success(msg) {
            var result = JSON.parse(msg);
            var total = result.length;
            //TODO-取出所有資料
            for(var i=0;i<total;i++){
                item="<div class='choose-funnyterm-item' data-rule='"+result[i][1]+"'>"+result[i][0]+"</div>";
                if(i%4==3)
                    item+="<br/>";
                $(".choose-content").append(item);
            }
            
        },
        error(msg) {}
    });
}
