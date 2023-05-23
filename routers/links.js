const router = require('express').Router()
const admin = require('../middleware/auth')
const {
  links,
  new_link,
  link_language,
  add_language,
  save_language,
  get_link,
  save_link,
  delete_link
} = require('../controllers/links')


router.get('/questions', admin, links)
router.post('/question', admin, new_link)
// router.get(admin, link_language)
// router.put(admin, add_language)
// router.put(admin, save_language)
router.get('/question/:id', admin, get_link)
router.put('/question/:id', admin, save_link)
router.delete('/question/:id', admin, delete_link)



module.exports = router