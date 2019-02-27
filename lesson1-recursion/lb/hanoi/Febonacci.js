window.onload = function () { 
    new Vue({
        el:'#lee3',
        data:{
            FebonacciArr: [],
            FebonacciArrNo: []
        },
        methods:{
          febonacciNo:function (n,limit1 = 1,limit2 = 1) {
              var one = limit1
              var two = limit2
              var three = 0
              for (var i = 3; i<=n;i++) {
                  three = one + two
                  one = two
                  two =three
              }
              if (n === 1) {
                return one
              } else if (n === 2) {
                  return two
              } else {
                  return three
              }
          },
          febonacci:function (n,limit1 = 1,limit2 = 1) {
            if (n === 1) {
                return limit1
            } else if (n === 2) {
                return limit2
            } else {
                return this.febonacci(n-1,limit1,limit2) +this.febonacci(n-2,limit1,limit2)
            }
          }
        },
        getArr: function (n) {
            for (var i=0;i<n;i++) {
                this.FebonacciArr[i] = febonacci(i+1)
                this.FebonacciArrNo[i] = febonacciNo(i+1)
            }
        }
    })
}