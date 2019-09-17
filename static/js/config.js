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

languesInit()

const goTo = (tabName) => {
  tabs = document.querySelectorAll(".tab")
  for (i = 0; i < tabs.length; i++) {
    tabs[i].className = "tab hidden"
  }
  document.getElementById(tabName).className = "tab"
}

const $question = document.querySelector('.question').cloneNode(true)

const addQuestion = () => {
  const $temp = $question.cloneNode(true)
  document.getElementById('questionHolder').appendChild($temp)
}