export default {
  name: 'QuestionaryNav',
  template:`
  <div>
    <button
      @click="tabUpdate"
      v-for="tab in tabs"
    >{{tab}}</button>
  </div>
  `,
  data() {
    return {
      tabs:['Main','Langues','Questions'],
    }
  },
  methods:{
    tabUpdate(){
      this.$emit('tab-change')
    }
  }

}