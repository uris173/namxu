const router = require('express').Router()


router.use('/auth', require('./routers/auth'))
router.use(require('./routers/direction'))
router.use(require('./routers/direction.type'))
router.use(require('./routers/education'))
router.use(require('./routers/languages'))
router.use(require('./routers/links'))
router.use(require('./routers/page'))
router.use(require('./routers/question'))



module.exports = router