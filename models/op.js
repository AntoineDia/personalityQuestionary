import mongoose from 'mongoose'

//parameters de l'operation

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
  template:     String
})

const opModel = mongoose.model('config', schema);

const newOp = () => {
  //default op
  let df = new opModel({
    api_key:    '',
    form:       { fr: [] },
    assets:     { d : {
      background: "https://a.luckycycle.com/uploads/img/img/18706/bg.png",
      left:       "https://a.luckycycle.com/uploads/img/img/18704/left.png",
      logo:       "https://a.luckycycle.com/uploads/img/img/18746/logov2.png",
      pin:        "https://a.luckycycle.com/uploads/img/img/18701/pin.png",
      product:    "https://a.luckycycle.com/uploads/img/img/18702/prizes.png",
      wheel:      "https://a.luckycycle.com/uploads/img/img/18705/wheel.png"
    }},
    langs:      { fr : ''},
    rewards:    [],
    reward_ids: { fr : ''},
    css :       '',
    js:         '',
    template:   'template',
    game:       ''
  })
  return df
}

export { opModel, newOp }