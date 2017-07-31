/**
 * Created by PPB3008 on 2017/3/25.
 */

$(document).ready(function () {
    $('#test').click(function () {
        window.alert("1222")
    });

    $('#bu-0').click(function (event) {
            if($(event.target).is('#bu-1')){
                var see= document.getElementById("jqt2");
                see.scrollIntoView(true);
            }
            else if($(event.target).is('#bu-2')) {
                var cta= document.getElementById("jqt3");
                cta.scrollIntoView(true);
            }
            else {
                var touch= document.getElementById("jqt4");
                touch.scrollIntoView(true);
            }
            event.stopPropagation();
        });
});


$('#jqt2,#jqt3,#jqt4').css({
    'margin':'500px 0',
    'display':'block',
    'fontSize':'25px'
});

$('span').css({
    'display':'block',
    'width':'70px'
});
