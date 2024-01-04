const express = require("express");
const { getAllBlogs } = require("../controller/blogController");
const router = express.Router()


router.get("/", getAllBlogs)



module.exports = router;