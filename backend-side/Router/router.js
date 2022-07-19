const express = require('express')
const router = express.Router();

const {add} = require('../Controllers/controller')



router.get('/getbookmark/:name')
app.post('/addbookmark',add)
app.post('/deletebookmark/:id')
app.post('/updatebookmark/:id')


module.exports  = router