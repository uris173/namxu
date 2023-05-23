const jwt = require('jsonwebtoken')

const admin = async(req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]
  if (!token) {
    return res.json({message: "Auth error!"})
  }
  const decoded = jwt.verify(token, process.env.KEY)
  // req.user = decoded
  // console.log(req.query)
  if (['admin'].includes(decoded.role)) {
    next()
  } else {
    return res.status(401).json({message: "You don't have access"})
  }
}


module.exports = admin