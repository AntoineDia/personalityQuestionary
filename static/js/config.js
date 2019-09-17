/* LuckyCycle 2019 */

const languesInit = () => {
  const langues = [
    { value: 'fr', label: 'French' },
    { value: 'en', label: 'English' },
    { value: 'de', label: 'Dutch' }
  ]

  const $langues = document.getElementById('langues')

  for(langue of langues){
    const $input = document.createElement('input')
    $input.value = langue.value
    $input.type = 'checkbox'

    const $label = document.createElement('label')
    $label.innerHTML = $input.outerHTML + langue.label

    const $div = document.createElement('div')
    $div.appendChild($label)

    $langues.appendChild($div)
  }
}

const goTo = (tabName) => {
  tabs = document.querySelectorAll(".tab")
  for (i = 0; i < tabs.length; i++) {
    tabs[i].className = "tab hidden"
  }
  document.getElementById(tabName).className = "tab"
}

const $questionParams = document.querySelector('.questionParams').cloneNode(true)
let questionNumber = 0

const addQuestion = () => {
  questionNumber++

  const $questionTemplate = $questionParams.cloneNode(true)

  const $span = document.createElement('span')
  $span.innerHTML = 'Image : '

  const $imgUpload = document.createElement('img')
  $imgUpload.src = "/img/upload.png"

  const $upload = document.createElement('div')
  $upload.id = "img-up-" + questionNumber
  $upload.appendChild($imgUpload)
  $upload.addEventListener('click', uploadImage)

  const $src = document.createElement('div')
  $src.innerHTML = "SRC"
  $src.id = "img-src-" + questionNumber
  $src.addEventListener('click', srcImage)

  const $image = $questionTemplate.querySelector('.imageSelectorWrapper')
  $image.appendChild($span)
  $image.appendChild($upload)
  $image.appendChild($src)

  const $redirectSelector = document.createElement('input')
  $redirectSelector.type = "text"
  $redirectSelector.value = "Next Question"

  const $redirect = $questionTemplate.querySelector('.redirectSelectorWrapper')
  $redirect.appendChild($redirectSelector)

  $questionTemplate.className = "questionParams"
  document.getElementById('questionsHolder').appendChild($questionTemplate)
}

const uploadImage = (ev) => {
  console.log('uploadImage',ev)
}
const srcImage = (ev) => {
  console.log('srcImage',ev)
}


const questionInit = () => {
  addQuestion()
}

/*
  <label for="next0">
    <span>Redirect to</span>
    <input id="next0" type="text" value="Next Question">
  </label>

  <label class="upload" for="answers0">
    <img src="/img/upload.png">
    <input id="answers0" class="hidden-input" type="file"/>
  </label>
*/

const init = () => {
  languesInit()
  questionInit()
  goTo('questions')
}
init()