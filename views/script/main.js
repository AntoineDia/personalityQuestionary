const d = document
const w = window

Element.prototype.setAttributes = function(attrs) {
  for(let name in attrs) {
    this[name] = attrs[name]
    // if(name === 'style'){
    //   for(let styleName in attrs.style) {
    //     this.style[styleName] = attrs.style[styleName]
    //   }
    // }
  }
}
