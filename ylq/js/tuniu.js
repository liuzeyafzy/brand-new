//Author Aoer
//Date 20180718
//version 1.0

window.onload = function () {
    var standard_width = document.body.clientWidth;

    //  搜索框
    var search_box = document.querySelector("div.center");
    search_box.style.width = parseInt(standard_width - 300) + "px";

    //  控制块高
    var divlist = document.querySelectorAll("div[class*='width']");
    for (var i = 0; i < divlist.length; i++) {
        divlist[i].style.height = parseFloat(0.01076 * standard_width).toFixed(1) + "rem";
    }

    //    控制字体
    var textlist = document.querySelectorAll("p.text");
    for (var i = 0; i < textlist.length; i++) {
        textlist[i].style.fontSize = parseFloat(0.0038 * standard_width).toFixed(1) + "rem";
    }
}

window.onresize = function () {
    var change_width = document.body.clientWidth;

    var search_box = document.querySelector("div.center");
    search_box.style.width = parseInt(change_width - 300) + "px";

    var divlist = document.querySelectorAll("div[class*='width']");
    for (var i = 0; i < divlist.length; i++) {
        divlist[i].style.height = parseFloat(0.01075 * change_width).toFixed(1) + "rem";
    }

    var textlist = document.querySelectorAll("p.text");
    for (var i = 0; i < textlist.length; i++) {
        textlist[i].style.fontSize = parseFloat(0.0038 * change_width).toFixed(1) + "rem";
    }
}