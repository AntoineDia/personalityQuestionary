import QuestionaryNav from './QuestionaryNav.js'
import Main from './Main.js'
import Langues from './Langues.js'
import Question from './Question.js'

export default {
  name: 'App',
  template:`
  <div>
    <QuestionaryNav
      @tab-change="changeTab"
    ></QuestionaryNav>

    <Main
      :config="config"
      @update-config="updateConfig"
      :class="{'hidden' : current !== 'Main'}"
    ></Main>

    <Langues
      :config="config"
      @update-config="updateConfig"
      :class="{'hidden' : current !== 'Langues'}"
    ></Langues>

    <Question
      :config="config"
      @update-config="updateConfig"
      :class="{'hidden' : current !== 'Questions'}"
    ></Question>

  </div>


  `,
  components: {
    QuestionaryNav, Main, Langues, Question
  },
  data() {
    return {
      current: 'Questions',
      editor: 'ClassicEditor',
      config: {},
    }
  },
  created(){
    this.config = defaultQuestionary
  },
  methods:{
    changeTab(tab){
      this.current = tab
    },
    updateConfig(newConfig){
      this.config = newConfig
      localStorage.config = this.config
      console.log(this.config)
    },
  }
}