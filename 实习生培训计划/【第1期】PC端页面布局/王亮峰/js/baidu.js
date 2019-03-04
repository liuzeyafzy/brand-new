var self = document.getElementsByClassName("self")[0];
var self_set_content = self.children[1];
var set = document.getElementsByClassName("set")[0];
var setting_content = set.children[1];
// header 的hover效果
self.onmouseover = function () {
  self_set_content.style.display = "block";
};
self.onmouseout = function () {
  self_set_content.style.display = "none";
};
set.onmouseover = function () {
  setting_content.style.display = "block";
};
set.onmouseout = function () {
  setting_content.style.display = "none";
};


// 更多产品
var more = document.getElementsByClassName("more")[0];
var oul = document.getElementsByClassName("more_content")[0];
console.log(oul)
more.onmouseover = function () {
  oul.style.display = "block";
  more.style.backgroundColor = "#f9f9f9";
  oul.style.backgroundColor = "#f9f9f9"
  more.style.color = "#333";
  more.style.borderLeft = "1px solid #e7e7e7"
}
more.onmouseout = function () {
  oul.style.display = "none";
  more.style.backgroundColor = "#398bfb";

}


var nav_list = document.getElementsByClassName("nav_list")[0].children;
var nav_content = document.getElementsByClassName("nav_content")[0].children[0].children;
// nav 选项卡
for (var i = 0; i < nav_list.length; i++) {
  nav_list[i].index = i;
  nav_list[i].onclick = function () {
    for (var i = 0; i < nav_content.length; i++) {
      nav_list[i].className = '';
      nav_content[i].style.display = "none";
    }
    this.className = "act";
    nav_content[this.index].style.display = "block";

  };
  for (var m = 1; m < nav_content.length; m++) {
    nav_content[m].className = "";
    nav_content[m].style.display = "none";
  }
}
var my_concern = document.getElementsByClassName("my_concern")[0];
var add = document.getElementsByClassName("add")[0];
var nav_add = document.getElementsByClassName("nav_add")[0];
var trans = document.getElementsByClassName("trans")[0]
console.log(trans)
// 我的导航
my_concern.onmouseover = function () {
  add.style.display = "block";
}
my_concern.onmouseout = function () {
  add.style.display = "none";

}
my_concern.onclick = function () {
  if (nav_add.style.display == "none") {
    nav_add.style.display = "block";
    // trans.style.transition = "all 0.4s"
    trans.style.transform = "rotate(90deg)";
  } else {
    nav_add.style.display = "none";
    trans.style.transform = "rotate(0deg)";
  }
}