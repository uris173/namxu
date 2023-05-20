const {Schema, model} = require('mongoose')

const education_form = new Schema({ // Форма обучения (Дневная, заочный)
  title: String,
  slug: String,
  status: {
    type: Number,
    default: 0
  },
  languages: [{
    language: {
      type: Schema.Types.ObjectId,
      ref: 'Languages'
    },
    title: String,
  }]
})


module.exports = model('Form-of-education', education_form)