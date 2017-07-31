/**
 * Created by PPB3008 on 2017/3/17.
 */
//标准按钮判定并自动滚动至指定位置流程
var i=0;
$(document).ready(function () {
        $('#service,#cta,#touch').click(function (event) {
            event.preventDefault();
            if($(event.target).is('#service')){
               var ser= document.getElementsByClassName("service");
                ser[0].scrollIntoView(true);
            }
            else if($(event.target).is('#cta')) {
                var cta= document.getElementsByClassName("cta");
                cta[0].scrollIntoView(true);
            }
            else {
                var touch= document.getElementsByClassName("touch");
                touch[0].scrollIntoView(true);
            }
            event.stopPropagation();
        });
});


function change1(){
    i++;
    if(i%2==0){
        var p1=document.getElementById("button_left");
        p1.style.backgroundColor="white";
        /*$('#button_left').css({
         'backgroundColor':'blue'
         })*/
    }
    else {
        var p2=document.getElementById("button_left");
        p2.style.backgroundColor="blue";
    }
}