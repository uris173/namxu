const router = require('express').Router()
const admin = require('../middleware/auth')
const {
  questions,
  new_question,
  question_language,
  add_language,
  save_language,
  get_question,
  save_question,
  delet_question
} = require('../controllers/question')


router.get('/questions', admin, questions)
router.post('/question', admin, new_question)
// router.get(admin, question_language)
// router.put(admin, add_language)
// router.put(admin, save_language)
router.get('/question/:id', admin, get_question)
router.put('/question/:id', admin, save_question)
router.delete('/question/:id', admin, delet_question)



module.exports = router