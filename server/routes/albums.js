const express = require('express')
const{
    getAllAlbums,
    getAlbum,
    createAlbum,
    deleteAlbum,
} = require('../controllers/albumController')

const router = express.Router()

router.get('/', getAllAlbums)

router.get('/:id', getAlbum)

router.post('/', createAlbum)



router.delete('/:id', deleteAlbum)




module.exports = router