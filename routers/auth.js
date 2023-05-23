const router = require('express').Router()
const jwt = require('jsonwebtoken')

router.post('/login', async (req, res) => {
  const {username, password} = req.body
  if (username === 'admin' && password === 'P@$$w0rd') {
    const token = jwt.sign({
      username,
      role: 'admin'
    }, process.env.KEY, {expiresIn: '1d'})
    return res.status(200).json({token, username})
  } else {
    res.status(200).json({message: 'Неверный логин или пароль!'})
  }
})



module.exports = router