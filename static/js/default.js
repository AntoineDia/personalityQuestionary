/* LuckyCycle 2019 */

Element.prototype.setAttributes = function(attrs) {

  for(let name in attrs) {
    if(name === 'style') this.style = attrs.style
    else this[name] = attrs[name]
  }
}

window.onload = () => {
  document.getElementById('script').src = `/js/${window.location.pathname}.js`
}