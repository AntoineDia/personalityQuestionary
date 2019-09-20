const express = require('express')
const app = express()

const defaultQuestionary = require('./defaultQuestionary')

app.set('view engine', 'ejs')

app.get('/quizz-perso-dev', (res, req) => {
  res.render('src/main', defaultQuestionary)
})

// app.use(express.static('./dist'))

app.listen( 3000, () => console.log('Started on port: 3000'))