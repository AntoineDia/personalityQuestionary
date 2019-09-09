import express  from 'express'
import cors     from 'cors'
import mongoose from 'mongoose'

import pages    from './controllers/pages.js'
import { serv } from './config.js'

mongoose.connect(serv.mongo, {
  poolSize: 10,
  useCreateIndex: true,
  useNewUrlParser: true
})

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('static'))
app.use(cors())

app.get('/', (req, res) => res.end(serv.msg))

app.get('/admin/', pages.admin)

app.get('/operation/:operation', pages.operation)

app.get('/template/:operation?', pages.template)

app.get('/newOp', pages.newOp)

app.listen(serv.port, () => console.log(serv.msg))