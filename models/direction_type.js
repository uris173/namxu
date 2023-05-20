const {Schema, model} = require('mongoose')

const direction_type = new Schema({ // Тип обучения (Бакалавриат, магистратура)
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


module.exports = model('Direction-type', direction_type)