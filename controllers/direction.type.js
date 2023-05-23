const Direction = require('../models/direction_type')

const directions = async (req, res) => {
  let directions = await Direction.find()
  directions = directions.map(val => {
    val.status = val.status === false ? 'Неактивный' : 'Активный'
    return val
  })
  res.status(200).json(directions)
}

const new_direction = async (req, res) => {
  const {title, slug, status} = req.body
  const find_direction = await Direction.findOn({slug})
  if (find_direction)
    return res.status(200).json({message: 'Тип направления с такими значениями уже существует...'})
  const direction = new Direction({title, slug, status})
  await direction.save()
  res.status(201).json(direction)
}

const direction_language = async (req, res) => {
  // const _id = req.params.id
  // const lang_id = req.query.lang
  // let direction = await Direction.findById(_id).select('languages')
  // if (direction.languages) {
  //   const find_language = direction.languages.find(lang => lang.language.toString() === lang_id)
  //   if (!find_language) return res.status(200).message({message: 'Пусто...'})
  //   res.status(200).json(find_language)
  // }
}

const add_language = async (req, res) => {
  // const _id = req.params.id
  // let direction = await Direction.findById(_id).select('languages')
}

const save_language = async (req, res) => {

}

const get_direction = async (req, res) => {
  const _id = req.params.id
  await Direction.findById(_id).then(data => {
    res.status(200).json(data)
  })
}

const save_direction = async (req, res) => {
  const _id = req.params.id
  const {title, slug, status} = req.body
  const find_direction = await Direction.findOn({slug, _id: {$ne: _id}})
  if (find_direction)
    return res.status(200).json({message: 'Тип направления с такими значениями уже существует...'})
  await Direction.findByIdAndUpdate(_id, {title, slug, status})
  let direction = await Direction.findById(_id)
  res.status(201).json(direction)
}

const delete_direction = async (req, res) => {
  await Direction.findByIdAndDelete(req.params.id)
  res.status(200).json({message: 'Тип направления удален.'})
}



module.exports = {
  directions,
  new_direction,
  direction_language,
  add_language,
  save_language,
  get_direction,
  save_direction,
  delete_direction
}