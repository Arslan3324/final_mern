var Bookmark = require('../model/Bookmark');
const path = require('path')


const add = async(req,res)=>{

    await Bookmark.create(req.body)
    res.send({status:"success"})
}


module.exports = {
    add
}
