import mongoose from 'mongoose'
import defaultConf from './defaultConf'

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

const newOp = async (flow) => {
  defaultConf['operation'] = await operation_id_generator()
  if(flow[1].includes("left"))
    defaultConf.css = `
    #background{
      right: 225px
    }
    `
  else
    defaultConf.css = `
    #background{
      left: 225px
    }
    `
  defaultConf['template'] = flow
  return await new opModel(defaultConf).save()
}

const operation_id_generator = async () => {
  let operation = ''
  for( let i = 0; i < 32; i++ ){
    operation += Math.floor(Math.random() * 16).toString(16)
  }
  if(await opModel.findOne({operation})) return await operation_id_generator()
  return operation
}

export { opModel, newOp }