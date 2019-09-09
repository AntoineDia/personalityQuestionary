window.onload = () => {

  let currentFlow = '1'
  let opPreParams = {}

  const nextFlow = (ev) => {
    opPreParams[ev.target.name] = ev.target.value
    if(ev.target.value === 'side-by-side') return currentFlow++
    if(ev.target.value === 'one-over-one') return currentFlow = currentFlow + 2
  }

  document.querySelectorAll('#flow input[type="radio"]').forEach(el => {
    el.style['-webkit-appearance'] = 'none'
    el.style.border = '1px solid red'
    el.style.width = 100
    el.style.height = 100
    el.addEventListener('click', nextFlow)
    // el.style.backgroundImage = 'url(./img/'+el.value+'.png)'
  })

  // document.addEventListener('click', function (event) {
  //   console.log('click event on dom')
  // }, false)




}

/*

      <div id="flow1">
        <input type="radio" name="dispo" value="side-by-side">
        <input type="radio" name="dispo" value="one-over-one">
      </div>
      <div id="flow2">
        <input type="radio" name="place" value="form-left">
        <input type="radio" name="place" value="form-rigth">
      </div>
      <div id="flow3">
        <input type="radio" name="order" value="wheel-first">
        <input type="radio" name="order" value="form-first">
      </div>


function onTabClick(event) {
  let activeTabs = document.querySelectorAll('.active');
  activeTabs.forEach(function(tab) {
    tab.className = tab.className.replace('active', '');
  });

  event.target.parentElement.className += ' active';
  document.getElementById(event.target.href.split('#')[1]).className += ' active';
}

const element = document.getElementById('nav-tab');

element.addEventListener('click', onTabClick, false);

*/