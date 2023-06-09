const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const upload = require('express-fileupload')
const routers = require('./router')
require('dotenv').config()

app.use(cors())
app.use(express.json());
app.use(upload())
app.use('/images',express.static('files'))
app.use('/files',express.static('files'))
app.use(routers)

mongoose.set('strictQuery', false);
const PORT = 3000

async function dev() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB connected!'))
    .catch((error) => console.log(error))
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT} PORT`);
    })
  } catch (error) {
    console.log(error);
  }
}
dev()