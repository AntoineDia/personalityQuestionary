export default {
  name: 'Main',
  template:`

    <div id="first">
      <span>Questionary name</span>
      <input
        type="text"
        v-model="config.name"
      >
    </div>

  `,
  props: [
    'config'
  ],
  watch:{
    config: {
      deep: true,
      handler(){
        this.$emit('update-config', this.config)
      }
    },
  }
}