function Questionary(name){
  this.name = name
  this.languages = []
  this.question = {}
  return this
}

Questionary.prototype.addLang = function(lang){
  if(~this.languages.indexOf(lang))
    throw new Error('This language already exist')
  this.languages.push(lang)
  // this.questions[lang] = this.questions[this.languages[0]]
}

Questionary.prototype.addLanguages = function(){
  for(let langId in arguments){
    this.addLang(arguments[langId])
  }
  return this
}

Questionary.prototype.addQuestion = function(){
  const question = {
    id: 'q' + Date.now(),
    question: '',
    next: '',
    max: 1,
    col: 2,
    row: 1,
    options: []
  }
  this.languages.forEach(lang => {
    try{
      const lastQuestionId = this.questions[lang][this.questions[lang].length -1].id
      if(!this.questions[lang][lastQuestionId].next){
        this.questions[lang][lastQuestionId].next = question.id
      }
    }catch(e){}
    this.questions[lang].push(question)
  })
  return this
}
