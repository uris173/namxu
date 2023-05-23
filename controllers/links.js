const Useful_link = require('../models/useful_links')

const links = async (req, res) => {
  const links = await Useful_link.find()
  res.status(200).json(links)
}

const new_link = async (req, res) => {
  const {title, slug, value} = req.body
  const find_link = await Useful_link.findOne({slug})
  if (find_link)
    return res.status(200).json({message: 'Полезные ссылки с такими значениями уже существует...'})
  const link = new Useful_link({title, slug, value})
  await link.save()
  res.status(201).json(link)
}

const link_language = async (req, res) => {

}

const add_language = async (req, res) => {

}

const save_language = async (req, res) => {

}

const get_link = async (req, res) => {
  await Useful_link.findById(req.params.id).then(data => res.status(200).json(data))
}

const save_link = async (req, res) => {
  const _id = req.params.id
  const {title, slug, link} = req.body
  const find_link = await Useful_link.findOne({slug})
  if (find_link)
    return res.status(200).json({message: 'Полезные ссылки с такими значениями уже существует...'})
  await Useful_link.findByIdAndUpdate(_id, {title, slug, link})
  await Useful_link.findById(_id).then(data => res.status(201).json(data))
}

const delete_link = async (req, res) => {
  Useful_link.findByIdAndDelete(req.params.id).then(() => res.status(200).json({message: 'Полезная ссылка удалена.'}))
}



module.exports = {
  links,
  new_link,
  link_language,
  add_language,
  save_language,
  get_link,
  save_link,
  delete_link
}