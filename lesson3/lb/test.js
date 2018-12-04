// 重写console.log函数
var i = 1
console.log = (function(oriLogFunc) {
    return function (str) {
        orgLogFunc.call(console,'第' + i++ + '次:' + str)
    }
})(console.log)

// 模拟new实现：objectFactory = new
function person (name, age) {
    this.name = name
    this.age = age
    this.habit = 'Coding'
}
function objectFactory () {
    var obj = new Object()
    Constructor = [].shift.call(arguments)
    obj.__proto__ = Constructor.prototype
    Constructor.apply(obj, arguments)
    return typeof ret === 'object' ? ret : obj
}
var Lee = objectFactory(person, 'Kevin', '18')
