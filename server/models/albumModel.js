const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const albumSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    postedBy:{
        _id:String,
        username:String,
        profilePic:String,
    },
    imagesUrl: [String],
   desctiption: String
    
}, {
    timestamps: true
})


module.exports= mongoose.model("Album", albumSchema)