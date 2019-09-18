export default {

  saveQuestionary: async (req, res) => {
    const { body } = req
    let parsed = JSON.parse(JSON.stringify(body))

    for(const key in parsed){

      if(key.charAt(0) === 'q'){

        const id = key.charAt(1)

        const prop = key.substring(
          key.lastIndexOf("['") + 2,
          key.lastIndexOf("']")
        )

        parsed['q'+id] ? '' : parsed['q'+id] = new Object
        parsed['q'+id][prop] = parsed[key]

        delete parsed[key]
      }

    }

    console.table(parsed)

    res.send(parsed)
  }

}