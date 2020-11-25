console.log(Vue)
var Hello = {
  template: '<h3>我是hello</h3>'
}
// Vue.component("hello",Hello);
const App = {
  template: `<div class="app">
             <Hello v-if="flag"></Hello>
              <div v-else>
                <p>hello {{ msg + test }}</p>
                <p>static</p>
                <p>static</p>
              </div>
            </div>`,
  data() {
    return {
      flag: false,
      msg: '我是msg',
      test: '我是test'
    }
  },
  components: {
    Hello
  }
}
let vm = Vue.createApp(App).mount('#app')
console.log(vm)
