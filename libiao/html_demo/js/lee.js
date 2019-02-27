window.onload = function () { 
  var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
      question: '',
      answer: 'I cannot give you an answer until you ask a question!'
    },
    watch: {
      // 如果 `question` 发生改变，这个函数就会运行
      question: function (newQuestion, oldQuestion) {
        this.answer = 'Waiting for you to stop typing...'
        this.debouncedGetAnswer()
      }
    },
    created: function () {
      // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
      // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
      // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
      // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
      // 请参考：https://lodash.com/docs#debounce
      this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods: {
      getAnswer: function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Questions usually contain a question mark. ;-)'
          return
        }
        this.answer = 'Thinking...'
        var vm = this
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = _.capitalize(response.data.answer)
          })
          .catch(function (error) {
            vm.answer = 'Error! Could not reach the API. ' + error
          })
      }
    }
  })

 var lee=new Vue({
    el:'#lee',
    data:{
      object:{
        firstname:'Lee',
        lastname:'Biu'
      }
    }
  })
lee.$set(lee.object,'age',22)
lee.$set(lee.object,'Graduateschool','DUT')
lee.object=Object.assign({},lee.object,{
  brothday:19960918,
  favoritecolor:'Sky blue'
})

new Vue({
  el:'#lee1',
  data:{
  items:[
    {message:'lb'},
    {message:'zh'},
    {message:'ylq'},
    {message:'hyj'}
  ]
}
})

new Vue({
  el:'#lee2'

})
Vue.component('todoitem',{
  template:'\
  <li>\
  {{title}}\
  <button v-on:click="$emit(\'remove\')">Remove</button>\
  </li>\
  ',
  props:['title']
})
new Vue({
el:'#lee3',
data:{
  newtext:'',
  todos:[
    {id:1,title:'PeKing University',},
    {id:2,title:'Beijing University',},
    {id:3,title:'Nanjing University',},
    {id:4,title:'Dalian University'}
  ],
  nextid:5
},
methods:{
  addnew:function(){
    this.todos.push({
      id:this.nexttodoid++,
      title:this.newtext
    })
    this.newtext=''
  }
}
})

new Vue({
  el:'#lee4',
  data:{
    message:''
  }
})

// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
new Vue({ el: '#lee5' })

Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})
new Vue({
  el: '#blog-post-demo',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue' },
      { id: 2, title: 'Blogging with Vue' },
      { id: 3, title: 'Why Vue is so fun' }
    ]
  }
})
// Vue.component('blog-post', {
//   props: ['post'],
//   template: `
//     <div class="blog-post">
//       <h3>{{ post.title }}</h3>
//       <div v-html="post.content"></div>
//     </div>
//   `
// })
new Vue({
  el: '#blog-posts-events-demo',
  data: {
    posts: [/* ... */],
    postFontSize: 1
  }
})
Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text')">
        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
  `
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    message: '<span style="color:red">this is red color</span>'
  }
})
const app = new Vue({
  el: '#app',
  data: {
    errors: [],
    name: null,
    age: null,
    movie: null
  },
  methods:{
    checkForm: function (e) {
      if (this.name && this.age) {
        return true;
      }
      
      this.errors = [];
      
      if (!this.name) {
        this.errors.push('Name required.');
      }
      if (!this.age) {
        this.errors.push('Age required.');
      }
      
      e.preventDefault();
    }
  }
})
}