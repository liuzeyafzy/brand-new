window.onload = function () {
    var alist = document.querySelectorAll("li.bars > a");
    alist.forEach(
        function (item) {
            var ul = item.nextElementSibling;
            item.onmouseover = function () {
                ul.style.visibility = "visible";
            };
            item.onmouseleave = function () {
                ul.style.visibility = "hidden";
            }
        }
    )
}