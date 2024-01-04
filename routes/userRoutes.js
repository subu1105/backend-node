const express = require("express")
const router = express.Router()
const { getAllUsers, getUserById, addNewUsers, usersUpdate, userDeleteById } = require("../controller/userController")



router.get("/", getAllUsers)
router.get("/:usersId", getUserById)
router.post("/addusers", addNewUsers)
router.put("/:usersId", usersUpdate)
router.delete("/:userId", userDeleteById)
module.exports = router;
