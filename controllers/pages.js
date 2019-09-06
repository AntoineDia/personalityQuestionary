import { opConfig, schemaJson } from '../models/opConfig.js'

export default {
  admin: async ({query, params}, res) => {

    const { operation, hash } = params

    const config = await opConfig.findOne({ operation }) || schemaJson

    config._id  = null
    config.game = 'wheel'

    res.render('pages/admin', {
      hash, query,
      config: JSON.stringify(config),
    })
  }
}