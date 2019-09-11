import { newOp } from '../models/op'

export default {

  getNewOp: async (req, res) => {

    const config = await newOp(req.body.flow)
    const lang =  Object.keys(config.assets)[0]
    res.redirect(`/template/${config.operation}/?lang=${lang}`)

  }

}
