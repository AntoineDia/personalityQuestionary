/* LuckyCycle 2019 */

const defaultQuestionary =
{
  "tags":[
    "perso", "team", "care"
  ],
  "questions":{
    "fr":[
      {
        "id": 0,
        "question": "Pour moi ou pour offir?",
        "next":  1,
        "max": 1,   //default 1
        "col": 2,
      "row": 1,
        "options":[
          {
            "src": "src.com/img.png",
            "tag": [Number],
            "next": Number
          },
        ]
      }
    ]
  }
}

console.clear()
console.log('Vue in dev')

import App from '../components/app.js'

new Vue({
  render: createEl => createEl(App),
}).$mount(`#app`)