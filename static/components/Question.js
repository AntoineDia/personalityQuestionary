import Answer from './Answer.js'

export default {
  name: 'Question',
  template:`
  <div>
    <div
      class="questionParams"
      v-for="(question, i) in config.questions.fr"
    >

      <div class="questionWrap">
        <input
          type="text"
          placeholder="Question ..."
          v-model="question.question"
        >
      </div>

      <div class="defaultNext">
        <span>Default redirect</span>
        <input
          class="redirectInput"
          type="text"
          placeholder="Next Question"
          onkeypress="return false"
        >
      </div>

      <div class="disposition">
        <span>Disposition col / row</span>
        <input type="number" placeholder="col" v-model="question.col">
        <input type="number" placeholder="row" v-model="question.row">
      </div>

      <Answer
        :answers = "question.options"
        :idQuestion = "i"
        @update-answer = "updateAnswer(id,answers)"
      ></Answer>

    </div>

    <button @click="addQuestion">Add question</button>

  </div>
  `,
  data(){
    return{
      questionNumber: 0,
    }
  },
  props: [
    'config'
  ],
  components: {Answer},
  watch:{
    config: {
      deep: true,
      handler(){
        this.$emit('update-config', this.config)
      }
    },
  },
  methods:{
    addQuestion(){
      const newQuestion = {
        id: Date.now(),
        question: '',
        next: '',
        max: '',
        col: '',
        row: '',
        options:[
          {
            src: "",
            tag: [''],
            next: ''
          },
        ]
      }
      this.config.questions.fr.push(newQuestion)
    },
    updateAnswer(id,answers){
      this.config.question.fr[id] = answers
    }
  }
}