import { opConfig, schemaJson } from '../models/opConfig.js'

export default {

  admin: async ({ query, params }, res) => {
    const { operation, hash } = params

    const config = await opConfig.findOne({ operation }) || schemaJson
    config._id  = null
    config.game = 'wheel'

    const lgs = Object.keys(config.assets)

    res.render('pages/admin', { hash, query, lgs,
      config: JSON.stringify(config),
    })
  },

  template: async ({ params, query }, res) => {
    const { operation, hash } = params

    const config = await opConfig.findOne({ operation }) || schemaJson
    config._id = null
    if(config.reward_ids === "Object"){
      config.reward_ids = {}
      config.reward_ids['d'] = ['0','1','2','3','4']
    }

    res.render('pages/template', { hash, query,
      config: JSON.stringify(config)
    })
  },

}