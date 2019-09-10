window.onload = () => {

  const $new          = document.querySelector('#new > button')
  const $load         = document.querySelector('#load > button')
  const $inputOldOpId = document.querySelector('#load > input')

  const load_op = () => {
    if($inputOldOpId.value)
    window.location.href = "/operation/" + $inputOldOpId.value
  }

  const new_op = () => {
    window.location.href = "/newOp"
  }

  $new.addEventListener('click', new_op)
  $load.addEventListener('click', load_op)
  $inputOldOpId.addEventListener('keyup', ev =>
    ev.key === 'Enter' ? load_op() : ''
  )
}