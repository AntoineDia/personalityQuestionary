const preParams = {
  'side-by-side' : ['form-left','form-right'],
  'one-over-one' : ['wheel-first','form-first']
}

window.onload = () => {

  const $formParams = document.getElementById('form-params')
  const $flowParams = document.getElementById('flow-params')

  const flow_change = flows => {
    $flowParams.innerHTML = null

    console.log( $formParams )
    if(!flows) return $formParams.submit()

    flows.forEach( flow => {

      const choice = document.createElement('div')
      choice.setAttributes({ id: flow, innerText: flow })

      choice.addEventListener('click', () => {
        const input = document.createElement('input')
        input.setAttributes({type: 'text', name: 'flow'})
        input.value = flow
        input.name = 'flow'
        $formParams.appendChild(input)
        flow_change(preParams[flow])
      })

      $flowParams.appendChild(choice)

    })
  }

  flow_change(Object.keys(preParams))

}