var Bookmark = require('../model/Bookmark');
const path = require('path')


const add = async(req,res)=>{

    await Bookmark.create(req.body)
    res.send({status:"success"})
}


const getbookmark = (req,res)=>{
    const bookmarks=await Bookmark.find()
    res.json({bookmarks:bookmarks})
}

const getwithname = async(req,res)=>{

    const name=req.params.name
    const bookmarks=await Bookmark.find({name:name})
    res.json({bookmarks:bookmarks})

}

const deletebookmark = (req,res)=>{
    const id = req.params.id
    await Bookmark.remove({_id:id})
    res.json({status:"success"})
}


module.exports = {
    add
}
