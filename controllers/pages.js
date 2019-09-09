import { opModel, newOp } from '../models/op.js'

export default {

  newOp: async ({ query, params }, res) => {
    const { operation, hash } = params
    const config = await opModel.findOne({ operation: '7921236ccc85214e56e183f03a38b454' })
    res.render('pages/newOp',{ hash, query,
      config: JSON.stringify(config),
    })
  },

  admin: async ({ query, params }, res) => {
    const { operation, hash } = params

    const config = await opModel.findOne({ operation }) || await newOp()

    const langues = ['d']

    res.render('pages/admin', { hash, query, langues,
      config: JSON.stringify(config),
    })
  },

  operation: async ({ query, params }, res) => {
    const config = await opModel.findOne({ operation }) || await newOp()

    const langues = ['d']

    res.render('pages/admin', { hash, query, langues,
      config: JSON.stringify(config),
    })
  },


  template: async ({ params, query }, res) => {
    const { operation, hash } = params

    const config = await opModel.findOne({ operation }) || newOp()

    res.render('pages/template', { hash, query,
      config: JSON.stringify(config)
    })
  },

}