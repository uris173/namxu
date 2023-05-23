const router = require('express').Router()
const admin = require('../middleware/auth')
const {
  educations,
  new_education,
  education_language,
  add_language,
  save_language,
  get_education,
  save_education,
  delete_education
} = require('../controllers/education')

router.get('/directions', admin, educations)
router.post('/direction', admin, new_education)
// router.get(admin, education_language)
// router.put(admin, add_language)
// router.put(admin, save_language)
router.get('/direction/:id', admin, get_education)
router.put('/direction/:id', admin, save_education)
router.delete('/direction/:id', admin, delete_education)



module.exports = router