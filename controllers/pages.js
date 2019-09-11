import { opModel, newOp } from '../models/op.js'

export default {


  newOp: async (req, res) => {
    res.render('pages/newOp')
  },


  admin: async (req, res) => {
    res.render('pages/admin')
  },


  operation: async ({ query, params }, res) => {
    const { operation } = params
    const config = await opModel.findOne({ operation })

    if(!config) return res.render(('pages/admin'))

    res.render('pages/operation', { query, config: JSON.stringify(config)})
  },


  template: async ({ params, query }, res) => {
    const { operation, hash } = params

    const config = await opModel.findOne({ operation })
    if(!config) return res.end('no config on this op id')

    config._id = null

    res.render('templates/0', {hash, lang : query.lang, config})
  },

  neoTemplate: async ({ params, query }, res) => {
    const { operation, hash } = params
    const config = await opModel.findOne({ operation })
    if(!config) return res.end('no config on this op id')

    config._id = null
    config.css = null
    res.render('templates/1', { hash, query, config })
  }

}