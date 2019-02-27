
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

IF(COUNTIF(A6,"发热")=1,IF(OR(COUNTIF(A6,"无发热")=1,COUNTIF(A6,"未诉发热")=1),"0","1"),"3")