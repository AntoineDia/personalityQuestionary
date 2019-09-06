import mongoose from 'mongoose'

//parameters de l'operation

const schemaJson = {
  operation: {
    type: 'String',
    index: true
  },
  api_key: 'String',

  rewards: 'Array',
  reward_ids: 'Object',


  form: 'Object',
  langs: 'Object',

  assets: 'Object',
  css: 'String',
  js: 'String',

  game : 'String',
  template: 'String'
}

const opConfig = mongoose.model('config',
  new mongoose.Schema(schemaJson)
)

export { schemaJson, opConfig }