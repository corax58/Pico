const Album = require('../models/albumModel');
const mongoose = require('mongoose')



const getAllAlbums = async (req, res) => {

    try {
        const albums = await Album.find().sort({createdAt: -1});
        res.status(200).json(albums)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const getAlbum = async (req, res) => {

    const id = req.params.id

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send('No album with that id')
    }

    try {
        const album = await Album.findById(id);
        res.status(200).json(album)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const createAlbum = async (req, res) => {

    const album = req.body;

    console.log(album)

    try{
        const newAlbum = await Album.create(album);
        res.status(200).json(newAlbum)
    }catch(err){
        res.status(400).json({message: err.message})
    }
}

const deleteAlbum = async (req, res) => {

    const id = req.params.id;
    try{
        const deletedPost = await Album.findByIdAndDelete(id);
        res.status(200).json(deletedPost)
    }catch (err){
res.status(404).json({message: err.message})
    }
}


module.exports = { getAllAlbums, getAlbum, createAlbum, deleteAlbum }