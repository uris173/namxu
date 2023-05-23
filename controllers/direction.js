const Direction = require('../models/directions')

const directions = async (req, res) => {
  let direction = await Direction.find().lean()
  direction = direction.map(val => {
    val.status = val.status === false ? 'Неактивный' : 'Активный'
    return val
  })
}

const new_direction = async (req, res) => {
  const {title, slug, file, contract_price, education_from, direction_type, content, short_content, possibilities, status} = req.body
  const find_direction = await Direction.findOne({slug})
  if (find_direction)
    return res.status(200).json({message: 'Направления с такими значениями уже существует...'})
  let direction = new Direction({title, slug, file, contract_price, education_from, direction_type, content, short_content, possibilities, status})
  await direction.save()
  res.status(201).json(direction)
}

const direction_language = async (req, res) => {

}

const add_language = async (req, res) => {

}

const save_language = async (req, res) => {

}

const get_direction = async (req, res) => {
  await Direction.findByid(req.params.id).then(data => res.status(200).json(data))
}

const save_direction = async (req, res) => {
  const _id = req.params.id
  const {title, slug, file, contract_price, education_from, direction_type, content, short_content, possibilities, status} = req.body
  const find_direction = await Direction.findOne({slug, _id: {$ne: _id}})
  if (find_direction)
    return res.status(200).json({message: 'Направления с такими значениями уже существует...'})
  await Direction.findById(_id, {title, slug, file, contract_price, education_from, direction_type, content, short_content, possibilities, status})
  await Direction.findById(_id).then(data => res.status(201).json(data))
}

const delete_direction = async (req, res) => {
  await Direction.findByIdAndDelete(req.params.id).then(() => res.status(200).json({message: 'Направление удалено.'}))
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