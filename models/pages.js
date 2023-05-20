const {Schema, model} = require('mongoose')

const page = new Schema({
  title: String,
  slug: String,
  file: String,
  content: String, // текст редактор контент (хтмл теги)
  page_type: String, // тип страницы (Обычный, FAQ, Прием стиль)
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
    content: String,
  }]
})


module.exports = model("Page", page)