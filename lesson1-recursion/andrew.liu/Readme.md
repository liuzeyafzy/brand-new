1、复述“汉诺塔”问题
存在三根柱子，某一根上从上到下按照从小到大的顺序放置着64个圆盘。要求每次只能挪动一个圆盘，达到最终所有圆盘移动到另外两根柱子的某一根上，干脆就称第一根有64个圆盘的柱子为from，第二根为helper，最后移动到的那根柱子称为to。
然后我们要做的就是考虑怎么挪。单纯的计算需要挪的次数很简单的，重点在于我们要达到这个结果，要知道怎么做。

将这个问题扩大，可以说成有n个圆盘，一共有m跟柱子（m >= 3），按照一次挪动一个圆盘且时刻保证小盘在大盘上面，需要怎么挪（尽可能减少次数的情况下）。emmmmm，这个问题我是没有去想的。。。。。

2、使用递归方法解决“汉诺塔”问题
首先，找规律！

假设只有一个盘子，我们需要将盘子进行如下挪动：
> from -> 1 -> to // 中间的数字表示第几个盘子，数字1表示最小的那个盘子。

假设有两个盘子，移动步骤为：

> from -> 1 -> helper
> from -> 2 -> to
> helper -> 1 -> to

假设有三个盘子，移动步骤为：

> from -> 1 -> to
> from -> 2 -> helper
> to -> 1 -> helper
> from -> 3 -> to
> helper -> 1 -> from
> helper -> 2 -> to
> from -> 1 -> to

试试看，能不能找到一些规律？
因为汉诺塔这个问题很普及，所以能不能自己想到已经不那么重要了——当然了能够独立自主发现规律更厉害——但是我们已经或多或少接触过类似的思维了，所以能够理解能够活学活用就好了。
对比只有一个盘子和只有两个盘子的情形，看看能不能理解挪动两个盘子的步骤中有挪动一个盘子的影子。同样的，挪三个盘子的步骤中也有挪动两个盘子的影子在里面。
我们可以将三个盘子的步骤浓缩为：

> 挪动两个盘子从from到helper // 前三步
> 挪动第三个盘子从from到to // 第四步
> 挪动两个盘子从helper到to // 后三步

我们可以试着按照这个规律来试着写出挪动四个盘子的具体步骤。emmmm，如果需要严格的数学证明原谅我数学基础不扎实，数学归纳法早就还给老师了。

> 挪动三个盘子从from到helper
> 挪动第四个盘子从from到to
> 挪动三个盘子从helper到to

一步步替换成详细步骤为：

> 挪动两个盘子从from到to
> 挪动第三个盘子从from到helper
> 挪动两个盘子从to到helper
> 挪动第四个盘子从from到to //
> 挪动两个盘子从helper到from
> 挪动第三个盘子从helper到to
> 挪动两个盘子从from到to

再拆解：

> 挪动第一个盘子从from到helper
> 挪动第二个盘子从from到to
> 挪动第一个盘子从helper到to
> 挪动第三个盘子从from到helper
> 挪动第一个盘子从to到from
> 挪动第二个盘子从to到helper
> 挪动第一个盘子从from到helper
> 挪动第四个盘子从from到to
> 挪动第一个盘子从helper到to
> 挪动第二个盘子从helper到from
> 挪动第一个盘子从to到from
> 挪动第三个盘子从helper到to
> 挪动第一个盘子从from到helper
> 挪动第二个盘子从from到to
> 挪动第一个盘子从helper到to

所以，可以得出如下伪代码了：

`
let count = 0;
function hanoi (n, from, to, helper) {
  if (n > 1) {
    hanoi(n - 1, from, helper, to)
    move(n, from, to)
    hanoi(n - 1, helper, to, from)
  } else {
    move(n, from, to)
  }
}

function move(n, from, to) {
  count++;
  console.log(`第${count}次移动，${n}号盘子从${from}到${to}`)
}
`

3、使用递归方法生成“斐波拉契”数列
斐波拉契数列，第一项和第二项为1，其余每一项都是前面两项之和。

`
var fbi = function(n){
  if (n == 1 || n == 2) {
    return 1;
  } else {
    return fbi(n-1) + fbi(n-2)
  }
}
`

4、使用递归方法对js的某个变量进行深度拷贝。
这个主要是要判断某个变量是什么数据类型，如果是Object，则需要对其子项进行递归遍历；如果是数组，则需要对其每个字元素进行递归遍历。

5、使用非递归方法解决“汉诺塔”问题
有个格雷码的思路比较有意思，可以再细细分析一下。

6、使用非递归方法生成“斐波拉契”数列
`
function fib(n){
    if(n < 1){
        throw new Error('invalid arguments');
    }
    if(n == 1 || n == 2){
        return 1;
    }
    var a = 1,
        b = 1,
        res = 0;
    for(var i=3;i<=n;i++){
        res = a + b;
        a = b;
        b = res;
    }
    return res;
}
`

7、谈谈还有没有别的方法对js的某个变量进行深度拷贝。
a: Json.parse(Json.stringify(obj))
b: 网上又个deepCope函数，自己百度
c: jQuery的$.extend()方法，注意第一个入参要为true。

8、辨析，递归方法和非递归方法的区别
TODO`
