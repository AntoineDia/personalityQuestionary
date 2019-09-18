/* LuckyCycle 2019 */

const languesInit = () => {
  const langues = [
    { value: 'fr', label: 'French' },
    { value: 'en', label: 'English' },
    { value: 'de', label: 'Dutch' }
  ]

  const $langues = document.getElementById('langues')

  for(const langue of langues){
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

let questionNumber = 0

const addQuestion = () => {
  const $questionInput = document.createElement('input')
  $questionInput.autocomplete = 'off'
  $questionInput.type = 'text'
  $questionInput.name = `q${questionNumber}['question']`
  $questionInput.placeholder = 'Question ...'

  const $questionWrap = document.createElement('div')
  $questionWrap.className = 'questionWrap'
  $questionWrap.appendChild($questionInput)

  const $answerWrap = document.createElement('div')
  $answerWrap.className = 'answerWrap'

  const $spanDisposition = document.createElement('span')
  $spanDisposition.innerHTML = "Disposition col / row"

  const $col = document.createElement('input')
  $col.placeholder = 'col'
  $col.name = `q${questionNumber}['col']`
  $col.type = 'number'

  const $row = document.createElement('input')
  $row.placeholder = "row"
  $row.name = `q${questionNumber}['row']`
  $row.type = 'number'

  const $disposition = document.createElement('div')
  $disposition.className = 'disposition'
  $disposition.appendChild($spanDisposition)
  $disposition.appendChild($col)
  $disposition.appendChild($row)

  const $addAnswer = document.createElement('button')
  $addAnswer.innerHTML = 'Add answer'
  $addAnswer.addEventListener('click', addAnswer)

  const $questionParams = document.createElement('div')
  $questionParams.className = 'questionParams'
  $questionParams.id = questionNumber
  $questionParams.appendChild($questionWrap)
  $questionParams.appendChild($disposition)
  $questionParams.appendChild($answerWrap)
  $questionParams.appendChild($addAnswer)

  document.getElementById('questionsHolder').appendChild($questionParams)

  $addAnswer.dispatchEvent(new Event('click'))

  questionNumber++
}

const addAnswer = (event) => {
  event.preventDefault()

  const localQuestionNumber = event.target.parentNode.id

  const $span = document.createElement('span')
  $span.innerHTML = 'Image'

  const $imgUpload = document.createElement('img')
  $imgUpload.id = "upload" + localQuestionNumber
  $imgUpload.src = "/img/upload.png"

  const $upload = document.createElement('div')
  $upload.className = 'upload'
  $upload.appendChild($imgUpload)
  $upload.addEventListener('click', imgHandler)

  const $src = document.createElement('div')
  $src.className = 'src'
  $src.innerHTML = "SRC"
  $src.id = "src" + localQuestionNumber
  $src.addEventListener('click', imgHandler)

  const $imageSelector = document.createElement('div')
  $imageSelector.className = 'imageSelector'
  $imageSelector.appendChild($span)
  $imageSelector.appendChild($upload)
  $imageSelector.appendChild($src)

  const $spanRedirect = document.createElement('span')
  $spanRedirect.innerHTML = 'Redirect to'

  const $redirect = document.createElement('input')
  $redirect.type = "text"
  $redirect.name =  `q${localQuestionNumber}['next']`
  $redirect.placeholder = "Next Question"

  const $redirectSelector = document.createElement('div')
  $redirectSelector.className = 'redirectSelector'
  $redirectSelector.appendChild($spanRedirect)
  $redirectSelector.appendChild($redirect)

  const $div = document.createElement('div')
  $div.appendChild($imageSelector)
  $div.appendChild($redirectSelector)

  const $answerWrap = event.target.parentNode.querySelector('.answerWrap')
  $answerWrap.appendChild($div)
}

const imgHandler = (ev) => {
  console.log('uploadImage',ev.target.id)
}

const init = () => {
  languesInit()
  addQuestion()
  goTo('questions')
}
init()