

const { Schema, model } = require("mongoose");

const postSchema=Schema({
    title:String,
    body:String,
    device:String
})

// this is model
const PostModel=model("Post",postSchema)
module.exports={PostModel}