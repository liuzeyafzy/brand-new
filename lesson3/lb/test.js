// 重写console.log函数

console.log = (function(oriLogFunc) {
    var i = 1
    return function (str) {
        oriLogFunc.call(console,'第' + i++ + '次:' + str)
    }
})(console.log)

// 模拟new实现：objectFactory = new
function person (name, age) {
    this.name = name
    this.age = age
    this.habit = 'Coding'
    return {
        name: name
    }
}
function objectFactory () {
    var obj = new Object()
    Constructor = [].shift.call(arguments)
    obj.__proto__ = Constructor.prototype
    var ret = Constructor.apply(obj, arguments)
    return typeof ret === 'object' ? ret : obj
}
var Lee = objectFactory(person, 'Kevin', '18')
console.log(Lee.name)
console.log(Lee.habit)


console.log = (function(oriLogFunc) {
    let count = 0;
    let self = this;
    return function() {
        oriLogFunc.call(self, `第${count}次:`,...arguments)
    }
}(console.log))



function Student() {
    this.school = '清华';
}
// prototype
Student.prototype.job = 'student';    

//__proto__
var a = new Student();

//a.__proto__ === Student.prototype   

console.log(a)


function originNew() {
    let obj = {};
    let args = [].shift.call(arguments);
    obj.__proto__ = args.prototype;
    //Object.create(obj, args.prototype);

    return obj;
}

