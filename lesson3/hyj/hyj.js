
// 重写console.log函数
console.log = (function(oriLogFunc){
  var num = 0
  return function(str)
  {
      num = num + 1
      oriLogFunc.call(console,num);
      oriLogFunc.call(console,str);
  }
})(console.log);

// 模拟new的实现
function objectFactory(){
  var obj=new Object();
  var Constructor=[].shift.apply(arguments);//取得该方法的第一个参数(并删除第一个参数)，该参数是构造函数
  obj.__proto__=Constructor.prototype;//将新对象的内部属性__proto__指向构造函数的原型，这样新对象就可以访问原型中的属性和方法
  var ret=Constructor.apply(obj,arguments);//取得构造函数的返回值
  return typeof ret=="object"? ret : obj;//如果返回值是一个对象就返回该对象，否则返回构造函数的一个实例对象
}
