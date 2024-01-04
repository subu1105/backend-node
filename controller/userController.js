const users = [
    { id: 1, name: "chiku" },
    { id: 2, name: "chiku1" },
    { id: 3, name: "chiku2" },
    { id: 4, name: "chiku3" },
    { id: 5, name: "chiku4" },
]

const getAllUsers = (req, res) => {
    res.send(users);
}

const getUserById = (req, res) => {

    const userid = parseInt(req.params.usersId)
    let userData = users.find((eachobj) =>
        eachobj.id == userid
    )
    if (userData) {

        res.status(200).send(userData)
    }
    else {
        res.status(404).send("plese provide correct user id")
    }

}

const addNewUsers = (req, res) => {
    const newItem = req.body
    newItem.id = users.length + 1
    users.push(newItem)
    res.status(201).send({ users })
}

const usersUpdate = (req, res) => {
    const userid = parseInt(req.params.usersId)
    const userData = req.body
    let index = users.findIndex((eachobj) => eachobj.id == userid);
    if (index != -1) {
        users[index].name = userData.name;
        res.status(200).send(users[index])
    }
    else {
        res.status(400).send("this is an error for updation")
    }
}

const userDeleteById = (req, res) => {
    const userid = parseInt(req.params.userId)
    let index = users.findIndex((eachobj) => eachobj.id == userid);
    if (index != -1) {
        let userDelete = users.splice(index, 1)
        console.log(userDelete);
        res.send(userDelete)
    }
    else {
        res.send("this is a error through")
    }

}

module.exports = { getAllUsers, getUserById, addNewUsers, usersUpdate, userDeleteById }