$(document).ready(function(){
    $("button").click(function(){
        $("div").animate({
            left: "100px",
            backgroundColor: "#ffffff",
        })
    })

    $.ajax({
        url: "http://api.aladhan.com/v1/calendar/2017/4?latitude=51.508515&longitude=-0.1254872&method=2 http://api.aladhan.com/v1/calendar/2019?latitude=51.508515&longitude=-0.1254872&method=2",
        method: "get",
        success: function(data){
            console.log(data);
        }

    })









})