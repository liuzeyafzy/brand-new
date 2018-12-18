
var p1 = new Promise(function (resolve, reject) {
  ajaxA
  if (success) {
    resolve()
  } else {
    reject()
  }
}).catch(function (){
  ajaxD
})

var p2 = new Promise(function (resolve, reject) {
  ajaxB
  if (success) {
    resolve()
  } else {
    reject()
  }
}).catch(function (){
  ajaxE
})


Promise.all([p1,p2]).then(function(data){
  ajaxC
})