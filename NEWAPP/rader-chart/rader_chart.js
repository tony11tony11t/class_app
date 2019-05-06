$(document).ready(function(){
        var Big_size=500;
        var size=Big_size;
        var bgpath;
        var path=new Array(5);
        //利用SVG的方式建立背景圖
        var svg;
        var save_pos=new Array(5);
        
       $("rader-chart").each(function(e){        //取得HTML中的所有rader-chart標籤
            Big_size=$(this).attr("size");
            size=Big_size;
            svg=document.createElementNS('http://www.w3.org/2000/svg',"svg");//建立svg標籤
            svg.setAttribute("height",Big_size);
            svg.setAttribute("width",Big_size);   //設定寬高
            //寬度上的數據
            var start_width=parseFloat(size*0.4);           //六邊形長度
            var Decrement_width=parseFloat(size*0.08);      //每次遞減的長度
            var LeftAndRight_margin=parseFloat((Big_size-start_width)/2);   //最上排的外層點跟左右邊的距離


            //長度上的數據

            var polygon_height=parseFloat(size*0.2*Math.sqrt(3));   //六邊形的高
            var Top_margin=parseFloat((Big_size-polygon_height*2)/2);           //跟頂部的距離

            //設定背景
            var polygon_pos="M"+LeftAndRight_margin+" "+Top_margin+
                            "H"+(LeftAndRight_margin+start_width)+
                            "L"+(LeftAndRight_margin+start_width*1.5)+" "+(Top_margin+polygon_height)+
                            "L"+(LeftAndRight_margin+start_width)+" "+(Top_margin+polygon_height*2)+
                            "H"+LeftAndRight_margin+
                            "L"+(LeftAndRight_margin-start_width*0.5)+" "+(Top_margin+polygon_height)+
                            "L"+LeftAndRight_margin+" "+Top_margin;

            bgpath=document.createElementNS('http://www.w3.org/2000/svg',"path");//建立svg標籤
            bgpath.setAttribute("d",polygon_pos);
            svg.appendChild(bgpath);

            //畫背景線
            for(var i=0;i<5;i++){
                start_width=parseFloat(size*0.4);           //最大的六邊形長度
                Decrement_width=parseFloat(size*0.08);      //每次遞減的長度
                LeftAndRight_margin=parseFloat((Big_size-start_width)/2);   //最上排的點跟左右邊的距離
                polygon_height=parseFloat(size*0.2*Math.sqrt(3)); //六邊形的高
                Top_margin=parseFloat((Big_size-polygon_height*2)/2);           //跟頂部的距離
                
                save_pos[i]=new Array(5);                   //建立陣列存放點座標
                for(var j=0;j<6;j++)
                    save_pos[i][j]=new Array(2);
                save_pos[i][0][0]=LeftAndRight_margin;
                save_pos[i][0][1]=Top_margin;
                save_pos[i][1][0]=LeftAndRight_margin+start_width;
                save_pos[i][1][1]=Top_margin;
                save_pos[i][2][0]=LeftAndRight_margin+start_width*1.5;
                save_pos[i][2][1]=Top_margin+polygon_height;
                save_pos[i][3][0]=LeftAndRight_margin+start_width;
                save_pos[i][3][1]=Top_margin+polygon_height*2;
                save_pos[i][4][0]=LeftAndRight_margin;
                save_pos[i][4][1]=Top_margin+polygon_height*2;
                save_pos[i][5][0]=LeftAndRight_margin-start_width*0.5;
                save_pos[i][5][1]=Top_margin+polygon_height;


                polygon_pos="M"+LeftAndRight_margin+" "+Top_margin+
                            "H"+(LeftAndRight_margin+start_width)+
                            "L"+(LeftAndRight_margin+start_width*1.5)+" "+(Top_margin+polygon_height)+
                            "L"+(LeftAndRight_margin+start_width)+" "+(Top_margin+polygon_height*2)+
                            "H"+LeftAndRight_margin+
                            "L"+(LeftAndRight_margin-start_width*0.5)+" "+(Top_margin+polygon_height)+
                            "L"+LeftAndRight_margin+" "+Top_margin;

                path[i]=document.createElementNS('http://www.w3.org/2000/svg',"path");//建立svg標籤
                path[i].setAttribute("d",polygon_pos);
                path[i].setAttribute("class","inside_line");
                svg.appendChild(path[i]);
                size-=Big_size*0.2;
            }
         //畫上分數
         var score=document.createElementNS('http://www.w3.org/2000/svg',"polygon");//建立svg標籤
         var S_funny=Math.abs(5-parseInt($(this).attr("data-funny")));
         var S_self=Math.abs(5-parseInt($(this).attr("data-self")));
         var S_interactive=Math.abs(5-parseInt($(this).attr("data-interactive")));
         var S_practice=Math.abs(5-parseInt($(this).attr("data-practice")));
         var S_theory=Math.abs(5-parseInt($(this).attr("data-theory")));
         var S_total=Math.abs(5-parseInt($(this).attr("data-total")));
         var score_pos=save_pos[S_funny][0][0]+","+save_pos[S_funny][0][1]+" "+
                       save_pos[S_self][1][0]+","+save_pos[S_self][1][1]+" "+
                       save_pos[S_interactive][2][0]+","+save_pos[S_interactive][2][1]+" "+
                       save_pos[S_practice][3][0]+","+save_pos[S_practice][3][1]+" "+
                       save_pos[S_theory][4][0]+","+save_pos[S_theory][4][1]+" "+
                       save_pos[S_total][5][0]+","+save_pos[S_total][5][1];
         score.setAttribute("points",score_pos);
         svg.append(score);        //把score放入SVG
         console.log(score_pos);
           
           
        $(this).append(svg);        //把SVG放入rader-chart

           
        $(this).attr("class","RC-"+e)               //給雷達圖編號
               .css("strokeWidth",Big_size*0.1);    //設定白色背景大小
        });
    
})