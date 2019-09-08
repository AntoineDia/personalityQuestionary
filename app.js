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
app.use(cors())

app.get('/', (req, res) => res.end(serv.msg))

app.get('/admin/:operation?', pages.admin)

app.get('/template/:operation?', pages.template)

app.listen(serv.port, () => console.log(serv.msg))