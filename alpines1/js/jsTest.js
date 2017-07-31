var i=6;
function count() {
    document.write(window.history.length);
    i=i-1;
    document.getElementById("time").innerHTML=i;
    if(i==0){
        location.assign("index.html")
    }
}

setInterval(count,1000);

function goBack() {
    window.history.back();
}

