import QuestionaryNav from './QuestionaryNav.js'

export default {
  name: 'App',
  template:`
  <div>
    <QuestionaryNav
      @tab-change="changeTab"
    ></QuestionaryNav>
  </div>
  `,
  components: {QuestionaryNav},
  data() {
    return {
      editor: 'ClassicEditor',
    }
  },
  methods:{
    changeTab(){
      console.log('hello')
    },
  }
}