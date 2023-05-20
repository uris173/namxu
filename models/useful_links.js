const {Schema, model} = require('mongoose')

const useful_links = new Schema({ // Полезные ссылки и переходы (Инста, Фейсбук, телега и номер телефона)
  title: String,
  slug: String,
  value: String,
  languages: [{
    language: {
      type: Schema.Types.ObjectId,
      ref: 'Languages'
    },
    title: String,
  }]
})

module.exports = model('Useful-links', useful_links)