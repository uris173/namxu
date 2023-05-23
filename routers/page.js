const router = require('express').Router()
const admin = require('../middleware/auth')
const {
  pages,
  new_page,
  page_language,
  add_language,
  save_language,
  get_page,
  save_page,
  delete_page
} = require('../controllers/page')

router.get('/pages', admin, pages)
router.post('/page', admin, new_page)
// router.get(admin, page_language)
// router.put(admin, add_language)
// router.put(admin, save_language)
router.get('/page/:id', admin, get_page)
router.put('/page/:id', admin, save_page)
router.delete('/page/:id', admin, delete_page)



module.exports = router