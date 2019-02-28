window.onload = function(){
    var set = document.getElementById("set")
    var sets = document.getElementById("sets")
    var more = document.getElementsByClassName("more")[0]
    var moremore = document.getElementById("more-more")
    set.onmouseover = function(){
        sets.style.display = "block"
    }
    set.onmouseout = function(){
        sets.style.display = "none"
    }
    more.onmouseover = function(){
        moremore.style.display = "block"
    }
    more.onmouseout = function(){
        moremore.style.display = "none"
    }
}