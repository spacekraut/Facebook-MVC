const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.DB_URL)
.then(() => {console.log('Connected DB');})
.catch(err=>console.log(err));





