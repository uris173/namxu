const {Schema, model} = require('mongoose')

const page = new Schema({
  title: String,
  slug: String,
  file: String,
  content: String, // текст редактор контент (хтмл теги)
  page_type: {
    type: Number,
    default: 0
    // 0 - Обычный, 1 - FAQ, 2 - Прием стиль
  }, // тип страницы (Обычный, FAQ, Прием стиль)
  status: {
    type: Boolean,
    default: false
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