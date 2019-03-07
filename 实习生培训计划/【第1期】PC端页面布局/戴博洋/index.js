window.onload = function () {
    var my$ = function (el) {//省略document...
        return document.getElementsByClassName(el)
    }
    var updataStyle = function (el,ess,value) {
        if (ess == 0) {//0——display
            // return el.style[type] = value
            return el.style.display = value
        } else if (ess == 1) {//1——className
            return el.className = value
        } else if (ess == 2) {//2——src
            return el.src = value
        }
    }
    // updataStyle(el,1,display,"")
    var weathermore = my$("weathermore")[0]
    var wMore = my$("w-more")[0]
    weathermore.onmouseover = function () {
        updataStyle(wMore, 0, "block")
    }
    weathermore.onmouseout = function () {
        updataStyle(wMore, 0, "none")
    }


    var usermore = my$("usermore")[0]
    var rUserUl = my$("r-user-ul")[0]
    usermore.onmouseover = function () {
        updataStyle(rUserUl, 0, "block")
    }
    usermore.onmouseout = function () {
        updataStyle(rUserUl, 0, "none")
    }

    var sets = my$("sets")[0]
    var rSetUl = my$("r-set-ul")[0]
    sets.onmouseover = function () {
        updataStyle(rSetUl, 0, "block")
    }
    sets.onmouseout = function () {
        updataStyle(rSetUl, 0, "none")
    }

    var rightMores = my$("right-mores")[0]
    var rMoreUl = my$("r-more-ul")[0]
    var rightMore = my$("right-more")[0]
    rightMores.onmouseover = function () {
        updataStyle(rMoreUl, 0, "block")
        rightMore.style.backgroundColor = "#f0f0f0"
        rightMore.style.color = "#000"
        rightMore.style.height = "41px"
    }
    rightMores.onmouseout = function () {
        updataStyle(rMoreUl, 0, "none")
        rightMore.style.backgroundColor = "#398bfb"
        rightMore.style.color = "#fff"
        rightMore.style.height = "32px"
    }

    var aMynav = my$("a-mynav")[0]
    var aMImg = my$("a-m-img")[0]
    var aMTianzhi = my$("a-m-tianzhi")[0]
    var tianjiatu = my$("tianjiatu")[0]
    aMynav.onmouseover = function () {
        updataStyle(aMTianzhi, 0, "block")
    }
    aMynav.onmouseout = function () {
        updataStyle(aMTianzhi, 0, "none")
    }
    var temp = 0
    aMynav.onclick = function () {
        if (temp == 0) {
            aMImg.style.transform = "rotate(0deg)"
            updataStyle(tianjiatu, 0, "block")
            temp = 1
        } else {
            aMImg.style.transform = "rotate(-90deg)"
            updataStyle(tianjiatu, 0, "none")
            temp = 0
        }
    }


    var nNavA = my$("a-nav-a")
    var tianjianav = my$("tianjianav")[0]
    var aCustom = my$("a-custom")[0]
    var tuijianimg = my$("tuijianimg")[0]
    var daohangimg = my$("daohangimg")[0]
    var watchImg = my$("watch-img")[0]
    nNavA[0].onclick = function () {
        updataStyle(nNavA[0], 1, "watch a-nav-a current")
        updataStyle(nNavA[1], 1, "a-nav-a other")
        updataStyle(nNavA[2], 1, "a-nav-a other")
        updataStyle(tianjianav, 0, "block")
        updataStyle(aCustom, 0, "block")
        updataStyle(tuijianimg, 0, "none")
        updataStyle(daohangimg, 0, "none")
        updataStyle(watchImg, 2, "./img/user.png")
    }
    nNavA[1].onclick = function () {
        updataStyle(nNavA[0], 1, "watch a-nav-a other")
        updataStyle(nNavA[1], 1, "a-nav-a current")
        updataStyle(nNavA[2], 1, "a-nav-a other")
        updataStyle(tianjianav, 0, "none")
        updataStyle(aCustom, 0, "none")
        updataStyle(tuijianimg, 0, "block")
        updataStyle(daohangimg, 0, "none")
        updataStyle(watchImg, 2, "./img/用户.png")
    }
    nNavA[2].onclick = function () {
        updataStyle(nNavA[0], 1, "watch a-nav-a other")
        updataStyle(nNavA[1], 1, "a-nav-a other")
        updataStyle(nNavA[2], 1, "a-nav-a current")
        updataStyle(tianjianav, 0, "none")
        updataStyle(aCustom, 0, "none")
        updataStyle(tuijianimg, 0, "none")
        updataStyle(daohangimg, 0, "block")
        updataStyle(watchImg, 2, "./img/用户.png")
    }

}