<template>
  <div id="app">

  </div>
</template>

<script>
import TextEditor from './components/TextEditor'

export default {
  name: 'app',
  components: {
    TextEditor
  },
  methods: {
    textEditorUpdate(html){
      // eslint-disable-next-line
      console.log(html)
    },

  },
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
