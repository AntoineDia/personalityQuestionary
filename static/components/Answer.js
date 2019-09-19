export default {
  name: 'Question',
  template:`
  <div>
    <div class="answerWrap">

      <div
        v-for = "answer in answers"
      >

        <div class="imageSelector">
          <span>Image</span>
          <div class="upload">
            <img src="./static/img/upload.png">
          </div>
          <div class="src">SRC</div>
        </div>

        <div class="redirectSelector">
          <span>Redirect to</span>
          <input
            class="redirectInput"
            type="text"
            placeholder="Next Question"
            @click="chooseNext"
            onkeypress="return false"
          >
        </div>

      </div>

    </div>

    <button @click="addAnswer">Add answer</button>
  </div>
  `,
  props: ['answers','idQuestion'],
  methods:{
    chooseNext(){},

    addAnswer(){
      this.answers.push(new Object)
    }
  }
}