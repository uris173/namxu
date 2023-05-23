const Question = require('../models/questions')

const questions = async (req, res) => {
  let question = await Question.find()
  res.status(200).json(question)
}

const new_question = async (req, res) => {
  const {question, answer} = req.body
  let new_question = new Question({question, answer})
  await new_question.save()
  res.status(201).json(new_question)
}

const question_language = async (req, res) => {

}

const add_language = async (req, res) => {

}

const save_language = async (req, res) => {

}

const get_question = async (req, res) => {
  await Question.findById(req.params.id).then(data => res.status(200).json(data))
}

const save_question = async (req, res) => {
  const _id = req.params.id
  const {question, answer} = req.body
  await Question.findByIdAndUpdate(_id, {question, answer})
  const find_question = await Question.findById(_id).then(data => res.status(201).json(data))
}

const delet_question = async (req, res) => {
  await Question.findByIdAndDelete(req.params.id).then(() => res.status(200).json({message: 'Вопрос и ответ удалён.'}))
}



module.exports = {
  questions,
  new_question,
  question_language,
  add_language,
  save_language,
  get_question,
  save_question,
  delet_question
}