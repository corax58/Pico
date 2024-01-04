const express = require("express");
const {
  getAllAlbums,
  getAlbum,
  createAlbum,
  deleteAlbum,
  searchAlbums,
} = require("../controllers/albumController");

const router = express.Router();

//routes

router.get("/", getAllAlbums);

router.get("/search", searchAlbums);

router.get("/:id", getAlbum);

router.post("/", createAlbum);

router.delete("/:id", deleteAlbum);

module.exports = router;
