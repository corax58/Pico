const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const albumSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    postedBy:{
        userName:String,
        profilePic:String,
    },
    imageUrls: [{ 
        imageUrl: String,
        imagePublicId: String,
       
        imageThumbnailUrl: String
    }],
    description: {type: String},
   tags: [String],
    
}, {
    timestamps: true
})


module.exports= mongoose.model("Album", albumSchema)