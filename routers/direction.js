const router = require('express').Router()
const admin = require('../middleware/auth')
const {
  directions,
  new_direction,
  direction_language,
  add_language,
  save_language,
  get_direction,
  save_direction,
  delete_direction
} = require('../controllers/direction')

router.get('/directions', admin, directions)
router.post('/direction', admin, new_direction)
// router.get(admin, direction_language)
// router.put(admin, add_language)
// router.put(admin, direction_language)
router.get('/direction/:id', admin, get_direction)
router.put('/direction/:id', admin, save_direction)
router.delete('/direction/:id', admin, delete_direction)



module.exports = router