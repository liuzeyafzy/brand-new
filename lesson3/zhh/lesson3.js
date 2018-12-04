
console.log = (function(oriLogFunc){
  var number = 1
  return function(str)
  {
    oriLogFunc.call(console,number + '  ' + str)
    number++
  }
})(console.log);
