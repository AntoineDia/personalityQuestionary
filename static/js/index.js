/* LuckyCycle 2019 */

console.clear()
console.log('Vue in dev')

import App from '../components/app.js'

new Vue({
  render: createEl => createEl(App),
}).$mount(`#app`)