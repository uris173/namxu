const Education = require('../models/education_form')

const educations = async (req, res) => {
  let educations = await Education.find()
  educations = educations.map(val => {
    val.status = val.status === false ? 'Неактивный' : 'Активный'
    return val
  })
  res.status(200).json(educations)
}

const new_education = async (req, res) => {
  const {title, slug, status} = req.body
  const find_education = await Education.findOn({slug})
  if (find_education)
    return res.status(200).json({message: 'Форма обучения с такими значениями уже существует...'})
  const education = new Education({title, slug, status})
  await education.save()
  res.status(201).json(education)
}

const education_language = async (req, res) => {
  // const _id = req.params.id
  // const lang_id = req.query.lang
  // let direction = await Education.findById(_id).select('languages')
  // if (direction.languages) {
  //   const find_language = direction.languages.find(lang => lang.language.toString() === lang_id)
  //   if (!find_language) return res.status(200).message({message: 'Пусто...'})
  //   res.status(200).json(find_language)
  // }
}

const add_language = async (req, res) => {
  // const _id = req.params.id
  // let direction = await Education.findById(_id).select('languages')
}

const save_language = async (req, res) => {

}

const get_education = async (req, res) => {
  const _id = req.params.id
  await Education.findById(_id).then(data => {
    res.status(200).json(data)
  })
}

const save_education = async (req, res) => {
  const _id = req.params.id
  const {title, slug, status} = req.body
  const find_education = await Education.findOn({slug, _id: {$ne: _id}})
  if (find_education)
    return res.status(200).json({message: 'Форма обучения с такими значениями уже существует...'})
  await Education.findByIdAndUpdate(_id, {title, slug, status})
  let education = await Education.findById(_id)
  res.status(201).json(education)
}

const delete_education = async (req, res) => {
  await Education.findByIdAndDelete(req.params.id)
  res.status(200).json({message: 'Форма обучения удалено.'})
}



module.exports = {
  educations,
  new_education,
  education_language,
  add_language,
  save_language,
  get_education,
  save_education,
  delete_education
}