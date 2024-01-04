const express = require("express")
const app = express()
const userRoutes = require('./routes/userRoutes')
const bodyParser = require('body-parser')
const blogRoutes = require("./routes/blogRoutes")


const port = 5000

app.use(bodyParser.json())

app.use("/users", userRoutes)
app.use("/blog", blogRoutes)



app.listen(port, () => {
    console.log(`My server is started in this port ${port}`);
})


