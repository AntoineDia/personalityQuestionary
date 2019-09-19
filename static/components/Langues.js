export default {
  name: 'Langues',
  template:`
  <div>
    <span>Choose langues:</span>
    <div id="langues">
      <div v-for="langue in langues">
      <label>
        <input :value="langue.value" type="checkbox">
        {{langue.label}}
      </label>

      </div>
    </div>
  </div>
  `,
  data() {
    return {
      langues:[
        { value: 'fr', label: 'French' },
        { value: 'en', label: 'English' },
        { value: 'de', label: 'Dutch' }
      ],
    }
  },
  props: [
    'config'
  ],
  config: {
    deep: true,
    handler(){
      this.$emit('update-config', this.config)
    }
  },
}