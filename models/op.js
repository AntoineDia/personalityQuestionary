import mongoose from 'mongoose'
import defaultConf from './defaultConf'
import {css_init} from './init'

const schema = new mongoose.Schema({
  operation:    { type: String, index: true },
  api_key:      { type: String },
  langs:        Object,
  rewards:      Array,
  reward_ids:   Object,
  css:          String,
  js:           String,
  form:         Object,
  assets:       Object,
  template:     Array,
})

const opModel = mongoose.model('config', schema)

export { opModel }