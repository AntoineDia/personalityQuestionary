import express    from 'express'
import cors       from 'cors'
import mongoose   from 'mongoose'
import bodyParser from 'body-parser'

import post     from './controllers/post'
import pages    from './controllers/pages'
import { serv } from './config'

mongoose.connect(serv.mongo, {
  poolSize: 10,
  useCreateIndex: true,
  useNewUrlParser: true
})

const app = express()

app.set('view engine', 'ejs')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.end(serv.msg))
app.get('/config', pages.config)

app.post('/saveQuestionary', post.saveQuestionary)

app.use('/static', express.static('./static'))

app.listen(serv.port, () => console.log(serv.msg))