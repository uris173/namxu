const router = require('express').Router()
const admin = require('../middleware/auth')
const {
  languages,
  new_language,
  default_language,
  get_language,
  save_language,
  delete_language
} = require('../controllers/languages')


router.get('/languages', admin, languages)
router.post('/language', admin, new_language)
router.get('/default/:id', admin, default_language)
router.get('/language/:id', admin, get_language)
router.put('/language/:id', admin, save_language)
router.delete('/language/:id', admin, delete_language)


module.exports = router