/*
 * @Desc: 异步
 * @Author: biao.li
 * @Time: 2018.12.17 星期一
 */

//  同步异步概念，二者区别
/*
引言：作为浏览器脚本语言，JavaScript的主要用途是与用户互动，以及操作DOM，所以JavaScript是单线程的，同一个时间只能做一件事。
所有任务需要排队，依次执行，形成一个执行栈。
阮一峰ES6的解释
同步：即完全按照执行栈顺序，下一个任务的执行需要等待上一个任务结束（结束返回），然后再执行，程序的执行顺序与任务的排列顺序是一致的、同步的。
异步：每一个任务有一个或多个回调函数（callback），前一个任务结束后，不是执行后一个任务，而是执行回调函数，后一个任务则是不等前
一个任务结束就执行，所以程序的执行顺序与任务的排列顺序是不一致的、异步的。
区别也就定义所说，二者任务的执行顺序不同
 */

// jQuery的ajax配置同步异步
/*
设置jQuery的async属性值：true为异步方式，false为同步；默认情况下是true
同步：当JS代码加载到当前ajax的时候会把页面里所有的代码停止加载，页面出现假死状态，当这个ajax执行完毕后才会继续运行其他代码，页面假死状态消失。
异步：当ajax发送请求后，在等在server端返回的这个过程中，前台会会继续执行ajax块后面的脚本，直到server端返回正常的结果才会执行success，
这时候执行的是两个线程，ajax块发出请求后一个线程和ajax块后面脚本（另一个线程）
 */
function check(){
    var fal=false;
    $.ajax({  
        type: "POST",  
        url: "url",  
        async: true, // 同步方式则换成false
        success: function (re) {
            if (re==null||re=="") {
                fal=true;        
            } else {
                console.log("异步")
            }
        }
    })
    return fal
}
// 结果返回的fal为false，因为异步情况下，在等待success中的返回re时，同时也可以执行return fal语句，此时fal还没变成true，就返回false，函数结束
/*
XMLHttpRequest配置同步异步
设置open()方法的第三个参数async的值；true表示异步，false表示同步
xmlHttp.open("GET", url, false);//同步方式请求 
xmlHttp.open("GET", url, true)//异步
 */
function doAction() {
    var xmlHttp = GetXmlHttpObject()
    if (xmlHttp == null) {
        alert("您的浏览器不支持AJAX！")
        return
    }  
    var url = 'www.baidu.com?'
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4) {
            var responseText = xmlHttp.responseText
            // alert(responseText)
            var result = eval('(' + responseText + ')')
        }
    }
    xmlHttp.open("GET", url, false) // 同步方式请求
        //xmlHttp.open("GET", url, true) // 第三个参数为true为异步方式
    xmlHttp.send(null)
}
  
function GetXmlHttpObject() {
    var xmlHttp = null
    try {
        // Firefox, Opera 8.0+, Safari
        xmlHttp = new XMLHttpRequest()
    } catch (e) {
        // Internet Explorer
        try {
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (e) {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP")
        }
    }
    return xmlHttp
}
/*
axios设置同步异步：
axios直接利用get异步获取数据；.then为请求成功的回调函数，而.catch为请求失败的回调函数。
使用async + await实现同步
 */
var sendFn = async (data, success, error, repeat) => {
    if (socket.readyState < 2) {
      await promiseBeReady().catch(e => console.warn(e))
    } else if (socket.readyState > 2) {
      this.init()
      await promiseBeReady().catch(e => console.warn(e))
    }
    // .....
}
/*
promise解决了异步操作可能存在下一个任务的执行需要上一个任务的执行返回，而在下一个任务执行是，上一个任务还没来得及返回，此时会报错获取不到数据。
Promise（test）的含义就是承诺在未来的某个时间肯定会执行函数f，函数f需要有两个参数：resolve 和 reject 。这两个参数都是函数。异步执行操作执
行成功时调用resolve函数，失败时调用reject函数。（这两个函数是js引擎自带的不用自己定义哟）。而里面的参数，resolve的参数会传递给then的回调函
数，reject的参数会传递给catch的回调函数然后对其进行进一步处理。
 */
// 0.5秒后返回input*input的计算结果:
function multiply (input) {
    return new Promise(function (resolve, reject) {
        console.log('calculating ' + input + ' x ' + input + '...')
        setTimeout(resolve, 500, input * input)
    })
}
 
// 3秒后返回input+input的计算结果:
function add (input) {
    return new Promise(function (resolve, reject) {
        console.log('calculating ' + input + ' + ' + input + '...')
        setTimeout(resolve, 3000, input + input)
    })
}
 
var p = new Promise(function (resolve, reject) {
    console.log('start new Promise...')
    resolve(123)
})
 
p.then(multiply)
 .then(add)
 .then(multiply)
 .then(add)
 .then(function (result) {
    console.log('Got value: ' + result)
})
// 使用promise,Promise.all()所有全都执行才执行后面的，Promise.race()有一个执行完就可以执行后面的
new Promise(ajaxA).then(function () {
}).catch(function () {
    return ajaxD
})
new Promise(ajaxB).then(function () {
}).catch(function () {
    return ajaxE
})
Promise.all(ajaxA, ajaxB).then(function () {
    return ajaxC
})
// 不使用promise则采用回调函数，略
/*
async/await用同步思维解决异步问题：即下一个执行需要上一个执行的返回。
async函数是Generator的一个语法糖，async函数实际上返回的是一个Promise对象。
await的含义为等待。意思就是代码需要等待await后面的函数运行完并且有了返回结果之后，才继续执行下面的代码。这正是同步的效果。
需要注意的是，await关键字只能在async函数中使用。并且await后面的函数运行后必须返回一个Promise对象才能实现同步的效果。
在Promise中，我们知道是通过catch的方式来捕获异常。而当我们使用async时，则通过try/catch来捕获异常。
如果有多个await函数，那么只会返回第一个捕获到的异常。
文章参阅：https://segmentfault.com/a/1190000012411744
 */
// 定义一个返回Promise对象的函数
function fn() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(30);
        }, 1000);
    })
}

// 然后利用async/await来完成代码
const foo = async () => {
    const t = await fn();
    console.log(t);
    console.log('next code');
}

foo();

// 30
// next code