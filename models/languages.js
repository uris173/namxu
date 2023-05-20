const {Schema, model} = require('mongoose')

const languages = new Schema({
  title: String,
  slug: String,
  default: {
    type: Boolean,
    default: false
  }
})

module.exports = model('Languages', languages)