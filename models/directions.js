const {Schema, model} = require('mongoose')

const directions = new Schema({ // направление
  title: String,
  slug: String,
  file: String, // файл
  contract_price: Number,
  education_from: {
    type: Schema.Types.ObjectId,
    ref: 'From-of-education'
  }, // Форма обучения (Дневная, заочная)
  direction_type: {
    type: Schema.Types.ObjectId,
    ref: 'Direction-type'
  }, // Тип обучения (Бакалавриат, магистратура)
  content: String, // текст редактор контент (хтмл теги)
  short_content: String, // короткое ознакомление с направлением (хтмл теги)
  possibilities: String, // возможности направления (хтмл теги)
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
    short_content: String,
    possibilities: String,
  }]
})


module.exports = model('Directions', directions)