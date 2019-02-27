"use strict";
window.onload = function () {

  var vmsg = new Vue({
    el: "#firstmsg",
    data: {
      msg: '以下为v-bind的练习：'
    }
  })

  var vctitle = new Vue({
    el: "#combtitle",
    data: {
      date1: new Date().toLocaleDateString(),
      date2: new Date().toLocaleString()
    }
  })

  var vm = new Vue({
    el: '#functitle',
    data: {
      getDate: function () {
        return new Date().toLocaleString();
      }
    }
  })

  var obj = {
    name: "Brett",
    age: 23
  }
  obj.toString = function () {
    var str = '';
    for (var i in this) {
      str += i + ':' + this[i] + ';';
    }
    return str;
  }
  Object.defineProperty(obj, 'toString', {
    'enumerable': false
  });
  var votitle = new Vue({
    el: '#objtitle',
    data: {
      obj: obj
    }
  })

  var arr = [1, 2, 3];
  arr.toString = function () {
    return this.join('   ');
  }
  var vatitle = new Vue({
    el: "#arrtitle",
    data: {
      arr: arr
    }
  })

  var obj = {
      o1: true,
      o2: false,
      o3: null,
      o4: undefined
  }
  obj.toString = function () {
      var str = '';
      for (var i in this){
          str += i + ' ';
      }
      return str;
    }
    Object.defineProperty(obj, 'toString', {
        'enumerable': false
      });
    var voclass = new Vue({
        el: "#objclass",
        data: {
            obj: obj
        }
    })

    var obj = {
        color: 'pink',
        background: 'color',
        fontSize: '40px'
    }
    obj.toString = function () {
        var str = '';
        for (var i in this){
            str += i + ':' + this[i] + ';';
        }
        return str;
      }
    Object.defineProperty(obj, 'toString', {
          'enumerable': false
        });
    var vostyle = new Vue({
        el: '#objstyle',
        data: {
            obj: obj
        }
    })

    var vmsg = new Vue({
        el: "#secondmsg",
        data: {
          msg: '以下为v-on的练习：'
        }
      })

    var vsc = new Vue({
        el: '#stop',
        methods:{
            show1(){
                console.log("1");
            },
            show2(){
                console.log("2");
            }
        }
    })

    var vrw = new Vue({
        el: '#reverse',
        data: {
            msg: 'Brett is my firstname.'
        },
        methods: {
            reverseWords:function () {
                this.msg = this.msg.split('').reverse().join('')
              }
        }
    })

    new Vue({
        el: '#pinput',
        data: {
            msg: 'I don\'t know her!'
        }
    })

    Vue.component('todo-item',{
        props: ['todo'],
        template:'<li>{{ todo.text }}</li>'
    })
    new Vue({
        el: '#glist',
        data: {
            gList: [
                {id: 0, text: 'vegetable'},
                {id: 2, text: 'meat'},
                {id: 3, text: 'others'}
            ]
        }
    })

}
