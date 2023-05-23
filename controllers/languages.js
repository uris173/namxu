const Language = require('../models/languages')

const languages = async (req, res) => {
  let language = await Language.find().lean()
  language = language.map(lang => {
    lang.default = lang.default === true ? 'Основной язык' : 'Дополнительный язык'
    return lang
  })
  res.status(200).json(language)
}

const new_language = async (req, res) => {
  const {title, slug} = req.body
  const find_lang = await Language.findOne({slug})
  if (find_lang) 
    return res.status(200).json({message: 'Язык с такими значениями уже существует...'})
  let language = await Language({title, slug})
  await language.save()
  res.status(201).json(language)
}

const default_language = async (req, res) => {
  const _id = req.params.id
  const language = await Language.findById(_id)
  language.status = language.status === false ? true : true
  let languages = await Language.findOne({status: true, _id: {$ne: _id}}) //.where({status: true, _id: {$ne: _id}})
  if (languages) {
    languages.status = languages.status = false
    await Language.findByIdAndUpdate(languages._id, languages)
  }
  await Language.findByIdAndUpdate(_id, language)
  const all_languages = await Language.find()
  res.status(201).json(all_languages)
}

const get_language = async (req, res) => {
  const _id = req.params.id
  const language = await Language.findById(_id)
  res.status(200).json(language)
}

const save_language = async (req, res) => {
  const _id = req.params.id
  const {title, slug} = req.body
  const find_language = await Language.findOne({slug, _id: {$ne: _id}})
  if (find_language)
    return res.status(200).json({message: 'Язык с такими значениями уже существует...'})
  await Language.findByIdAndUpdate(_id, {title, slug})
  const language = await Language.findById(_id)
  res.status(201).json(language)
}

const delete_language = async (req, res) => {
  await Language.findByIdAndDelete(req.params.id)
  res.status(200).json({message: 'Язык удалён.'})
}



module.exports = {
  languages,
  new_language,
  default_language,
  get_language,
  save_language,
  delete_language
}