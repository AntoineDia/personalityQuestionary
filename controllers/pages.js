const defaultQuestionary =
{
  "tags":[
    "perso", "team", "care"
  ],
  'name': '',
  "questions":{
    "fr":[
      {
        "id": Date.now(),
        "question": '',
        "next": '',
        "max": '',
        "col": '',
        "row": '',
        "options":[
          {
            "src": "",
            "tag": [''],
            "next": ''
          },
        ]
      }
    ]
  }
}

export default {

  config: async (req, res) => {
    res.render('pages/config', {defaultQuestionary})
  },

}