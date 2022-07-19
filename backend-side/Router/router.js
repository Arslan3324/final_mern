const express = require('express')
const router = express.Router();

const {add,getbookmark,getwithname,deletebookmark} = require('../Controllers/controller')


router.get('/getbookmarks',getbookmark)
router.get('/getbookmark/:name',getwithname)
router.post('/addbookmark',add)
router.post('/deletebookmark/:id',deletebookmark)


module.exports  = router