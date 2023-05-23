const Page = require('../models/pages')

const pages = async (req, res) => {
  let pages = await Page.find().lean()
  pages = pages.map(page => {
    page.status = page.status === false ? 'Неактивный' : 'Активный'
    return page
  })
  res.status(200).json(pages)
}

const new_page = async (req, res) => {
  const {title, slug, file, content, page_type, status} = req.body
  const find_page = await Page.findOne({slug})
  if (find_page)
    return res.status(200).json({message: 'Страница с такими даннымы уже существует...'})
  const page = new Page({title, slug, file, content, page_type, status})
  await page.save()
  res.status(201).json(page)
}

const page_language = async (req, res) => {

}

const add_language = async (req, res) => {

}

const save_language = async (req, res) => {

}

const get_page = async (req, res) => {
  await Page.findById(req.params.id).then(data => res.status(200).json(data))
}

const save_page = async (req, res) => {
  const _id = req.params.id
  const {title, slug, file, content, page_type, status} = req.body
  const find_page = await Page.findOne({slug, _id: {$ne: _id}})
  if (find_page)
    return res.status(200).json({message: 'Страница с такими даннымы уже существует...'})
  await Page.findByIdAndUpdate(_id, {title, slug, file, content, page_type, status})
  await Page.findById(_id).then(data => res.status(200).json(data))
}

const delete_page = async (req, res) => {
  await Page.findByIdAndDelete(req.params.id).then(() => res.status(200).json({message: 'Страница удалена.'}))
}



module.exports = {
  pages,
  new_page,
  page_language,
  add_language,
  save_language,
  get_page,
  save_page,
  delete_page
}