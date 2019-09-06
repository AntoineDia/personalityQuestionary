import mongoose from 'mongoose'

//parameters de l'operation
const schemaJson = {
  api_key: 'String',
  operation: {
    type: 'String',
    index: true
  },

  rewards: 'Array',

  form: 'Object',
  assets: 'Object',
  langs: 'Object',
  reward_ids: 'Object',

  css: 'String',
  js: 'String',

  template: 'String',
  game : 'String',
}

const opConfig = mongoose.model('config',
  new mongoose.Schema(schemaJson)
)

const defaultInit = () => {
  console.log('oui')
  return schemaJson
}

export { defaultInit, opConfig }