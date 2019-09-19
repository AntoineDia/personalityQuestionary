export default {
  name: 'QuestionaryNav',
  template:`
  <div>
    <button
      @click="tabUpdate(tab)"
      v-for="tab in tabs"
    >{{tab}}</button>
  </div>
  `,
  data() {
    return {
      tabs:['Main','Langues','Questions','Tags'],
    }
  },
  methods:{
    tabUpdate(tab){
      this.$emit('tab-change', tab)
    }
  }
}