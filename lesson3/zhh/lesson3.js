// 1.重写console.log，每次调用打印时输出已打印次数跟需要打印的值 
console.log = (function (oriLogFunc) {
  var number = 1
  return function (str)
  {
    oriLogFunc.call(console, number + '  ' + str)
    number++
  }
})(console.log)

// 2.模拟new的实现
function objectFactory(){
  var obj=new Object();
  var Constructor=[].shift.apply(arguments);
  obj.__proto__=Constructor.prototype;
  var ret=Constructor.apply(obj,arguments);//取得构造函数的返回值
  return typeof ret=="object"? ret : obj;//如果返回值是一个对象就返回该对象，否则返回构造函数的一个实例对象
}

// 3.怎么创建一个没有任何继承关系的对象，原理是什么？
