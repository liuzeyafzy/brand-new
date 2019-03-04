window.onload = function(){
    var weathermore = document.getElementsByClassName("weathermore")[0]
    var wMore = document.getElementsByClassName("w-more")[0]

    weathermore.onmouseover = function(){
        wMore.style.display = "block"
    }
    weathermore.onmouseout = function(){
        wMore.style.display = "none"
    }


    var usermore = document.getElementsByClassName("usermore")[0]
    var rUserUl = document.getElementsByClassName("r-user-ul")[0]

    usermore.onmouseover = function(){
        rUserUl.style.display = "block"
    }
    usermore.onmouseout = function(){
        rUserUl.style.display = "none"
    }

    var sets = document.getElementsByClassName("sets")[0]
    var rSetUl = document.getElementsByClassName("r-set-ul")[0]

    sets.onmouseover = function(){
        rSetUl.style.display = "block"
    }
    sets.onmouseout = function(){
        rSetUl.style.display = "none"
    }

    var rightMores = document.getElementsByClassName("right-mores")[0]
    var rMoreUl = document.getElementsByClassName("r-more-ul")[0]
    var rightMore = document.getElementsByClassName("right-more")[0]
    rightMores.onmouseover = function(){
        rMoreUl.style.display = "block"
        rightMore.style.backgroundColor = "#f0f0f0"
        rightMore.style.color = "#000"
        rightMore.style.height = "41px"
    }
    rightMores.onmouseout = function(){
        rMoreUl.style.display = "none"
        rightMore.style.backgroundColor = "#398bfb"
        rightMore.style.color = "#fff"
        rightMore.style.height = "32px"
    }


}