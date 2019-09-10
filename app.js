import express  from 'express'
import cors     from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import post from './controllers/post'
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

app.get('/admin/', pages.admin)

app.get('/operation/:operation', pages.operation)

app.post('/getNewOp', post.getNewOp)

app.get('/template/:operation?', pages.template)

app.get('/newOp', pages.newOp)

app.use(express.static('static'))

app.listen(serv.port, () => console.log(serv.msg))