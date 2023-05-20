const {Schema, model} = require('mongoose')

const questions = new Schema({ // Вопрос ответы
  question: String,
  answer: String,
  languages: [{
    language: {
      type: Schema.Types.ObjectId,
      ref: 'Languages'
    },
    question: String,
    answer: String,
  }]
})


module.exports = model('Questions', questions)