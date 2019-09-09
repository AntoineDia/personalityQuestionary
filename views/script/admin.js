window.onload = () => {
  const $inputOldOpId = document.querySelector('#load > input')
  const $load = document.querySelector('#load > button')
  const $new = document.querySelector('#new > button')
  $load.onclick = () => {
    window.location.href = "/operation/" + $inputOldOpId.value
  }
  $new.onclick = () => {
    window.location.href = "/newOp"
  }
}