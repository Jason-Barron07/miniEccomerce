const express = ('express')
const path = ('path')
const app = express('')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const port = +process.env.PORT || 3306


app.listen(port, ()=>{
    console.log( `This server is running on port ${port}`)
})