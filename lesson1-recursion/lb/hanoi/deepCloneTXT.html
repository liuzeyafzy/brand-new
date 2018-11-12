<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
  <title>深度拷贝</title>
</head>
<body>
<script type="text/javascript">
// 深度拷贝递归
function deepClone(obj){
  let objClone = Array.isArray(obj)?[]:{};
  if(obj && typeof obj==="object"){
    for(key in obj){
      if(obj.hasOwnProperty(key)){
        //判断ojb子元素是否为对象，如果是，递归复制
        if(obj[key]&&typeof obj[key] ==="object"){
          objClone[key] = deepClone(obj[key])
        }else{
          //如果不是，简单复制
          objClone[key] = obj[key]
        }
      }
    }
  }
  return objClone
}
// 非递归使用JSON对象的parse和stringify进行深度拷贝
function jsonDeepClone(obj){
  let _obj = JSON.stringify(obj),
    jsonObjClone = JSON.parse(_obj);
  return jsonObjClone
}
// 除了上面两种方法之外，我们还可以借用JQ的extend方法。
// $.extend( [deep ], target, object1 [, objectN ] )
// deep表示是否深拷贝，为true为深拷贝，为false，则为浅拷贝
// target Object类型 目标对象，其他对象的成员属性将被附加到该对象上。
// object1  objectN可选。 Object类型 第一个以及第N个被合并的对象。
let a=[0,1,[2,3],4]
b=$.extend(true,[],a)
a[0]=1
a[2][0]=1
console.log(a,b)
// lodash很热门的函数库，提供了 lodash.cloneDeep()实现深拷贝，需要引入函数库lodash
// 辨析：递归方法与非递归方法的区别
/*
非递归代码效率高；递归代码思路清晰，可读性强，但递归会增加栈的使用，空间消耗大，递归的次数受堆栈大小限制
循环方法比递归方法快, 因为循环避免了一系列函数调用和返回中所涉及到的参数传递和返回值的额外开销。
递归算法与迭代算法的设计思路区别在于：函数或算法是否具备收敛性，当且仅当一个算法存在预期的收敛效果时，
采用递归算法才是可行的，否则，就不能使用递归算法。
当然，从理论上说，所有的递归函数都可以转换为迭代函数，反之亦然，然而代价通常都是比较高的。
递归算法实际上是一种分而治之的方法，它把复杂问题分解为简单问题来求解。对于某些复杂问题(例如hanio塔问题)，
递归算法是一种自然且合乎逻辑的解决问题的方式，但是递归算法的执行效率通常比较差。
*/
</script>
</body>
</html>
