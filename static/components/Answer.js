export default {
  name: 'Answer',
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
          <select
            class="redirectInput"
            @change="updateNext"
          >
            <option value="">Next Question</option>
            <option
              v-for = "question in questionsChoice"
              :value = "question.id"
            >
            {{question.question}}
            </option>

          </select>

        </div>

      </div>

    </div>

    <button @click="addAnswer">Add answer</button>
  </div>
  `,
  props: ['answers','idQuestion','questionsChoice'],
  watch:{
    answers: {
      deep: true,
      handler(){
        this.$emit('update-answer', this.idQuestion, this.answers)
      }
    },
  },
  methods:{
    // chooseNext(event){
    //   let i = 1
    //   const $holder = document.createElement('div')
    //   $holder.className = "questionsChoice"
    //   for(let choice in this.questionsChoice){
    //     if(this.questionsChoice[choice] === "") return
    //     if(choice = this.idQuestion) return
    //     const $choice = document.createElement('div')
    //     $choice.innerHTML = this.questionsChoice[choice]
    //     $choice.id = choice
    //     $choice.style.transform = 'translate(-50%,' + (150 * i) +'%)'
    //     $holder.appendChild($choice)
    //     i++
    //   }
    //   event.target.parentNode.appendChild($holder)
    // },
    updateNext(){
      console.log('next update')
    },
    addAnswer(){
      this.answers.push(new Object)
    }
  }
}

/*

  <input
    class="redirectInput"
    type="text"
    placeholder="Next Question"
    @click="chooseNext"
    onkeypress="return false"
  >

*/