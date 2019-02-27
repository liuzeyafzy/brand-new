// 1、什么是同步和异步，他们有什么区别
//       同步：就是发出一个功能调用时，在没有得到结果之前，该调用就不返回或继续执行后续操作。
//       异步：所有同步任务都在主线程上执行，形成一个执行栈；主线程之外，还存在一个"任务队列"，只要异步任务有了运行结果，就在"任务队列"之中放置一个事件；
//          一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行；
//          主线程不断重复上面的第三步。
//       相同点：都属于交互方式，都是发送请求


// 2、jQuery的ajax如何配置同步请求和异步请求。通过具体的代码示例来描述代码执行顺序
// jquery的async属性：默认情况下是true，表示异步，如果是false，表示同步。
// 同步：当JS代码加载到当前ajax的时候会把页面里所有的代码停止加载，页面出现假死状态，当这个ajax执行完毕后才会继续运行其他代码，页面假死状态消失。
// 异步：当ajax发送请求后，在等在server端返回的这个过程中，前台会会继续执行ajax块后面的脚本，直到server端返回正常的结果才会执行success，这时候执行的是两个线
// 程，ajax块发出请求后一个线程和ajax块后面脚本（另一个线程）
console.log('1')
function1()
$.ajax({  
  type:"POST", 
  url:"url", 
  dataType:"html", 
  async: '',
  success:function(result){   //function1()
    console.log('2')
    function2()
  },
  failure:function (result) {  
    alert('Failed')
  }
})
console.log('3')
function3()
// async为false是同步，执行顺序：1,2,3;为true是异步，执行顺序：1,3,2;


// 3. 原生的XMLHttpRequest又是如何配置同步和异步请求的
// XMLHttpRequestopen()方法的第三个参数的值来确定同步异步
xmlHttp.open("GET", url, false)//同步方式请求 
xmlHttp.open("GET", url, true)//异步


// 4、axios插件是如何配置同步和异步请求的。
// 同步:没有同步，只能使用jQuery，配置同步请求;
// 异步:
function httpApi (method, url, params) {
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: url,
      data: method === 'POST' || method === 'PUT' ? params : null,
      params: method === 'GET' || method === 'DELETE' ? params : null,
      baseURL: root,
      withCredentials: false
    }).then(
      (response) => {
        resolve(response)
      }
    ).catch(
      (error) => {
        reject(error)
      }
    )
  })
}
// 5、Promise语法学习，他的出现解决了异步的什么问题？
// 1.解决回调地狱（Callback Hell）问题
// （1）有时我们要进行一些相互间有依赖关系的异步操作，比如有多个请求，后一个的请求需要上一次请求的返回结果。过去常规做法只能 callback 层层嵌套，但嵌套层数过多的话就会有 callback hell 问题。比如下面代码，可读性和维护性都很差的。
// （2）如果使用 promises 的话，代码就会变得扁平且更可读了。前面提到 then 返回了一个 promise，因此我们可以将 then 的调用不停地串连起来。其中 then 返回的 promise 装载了由调用返回的值。
// 2，更好地进行错误捕获 
// 多重嵌套 callback 除了会造成上面讲的代码缩进问题，更可怕的是可能会造成无法捕获异常或异常捕获不可控。
// 如果使用 promises 的话，通过 reject 方法把 Promise 的状态置为 rejected，这样我们在 then 中就能捕捉到，然后执行“失败”情况的回调。


// 6、写一段代码完成这样的功能，ajaxA和ajaxB都执行，如果ajaxA执行失败则执行ajaxD，ajaxB执行失败则执行ajaxE，最后ajaxA（或ajaxD）、ajaxB（ajaxE）执行成功才执行ajaxC。分别用Promise和不用Promise实现。
let p1 = function () {
  return new Promise((resolve, reject) => {
    ajaxA
    if (ajaxA) {
      resolve()
    }
    else {
      reject()
    }
  }).catch(function () {
    ajaxD
  })
}
let p2 = function () {
  return new Promise((resolve, reject) => {
    ajaxB
    if (ajaxB) {
      resolve()
    }
    else {
      reject()
    }
  }).catch(function () {
    ajaxE
  })
}
Promise.all([p1, p2]).then(function () {
  ajaxC
})


// 7、Async/Await语法学习，他的出现解决了异步的什么问题？试着写一段示例代码。
// 使用Async/Await明显节约了不少代码。我们不需要写.then，不需要写匿名函数处理Promise的resolve值，也不需要定义多余的data变量，还避免了嵌套代码。
const makeRequest = async () => {
  try {
    // this parse may fail
    const data = JSON.parse(await getJSON())
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}
