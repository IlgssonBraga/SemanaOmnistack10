const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const http = require('http')
const routes = require('./routes')
const {setupWebsocket} = require('./websocket')

const app = express()
const server = http.Server(app)
setupWebsocket(server)

mongoose.connect('mongodb+srv://ilgssonbraga:math130717@cluster0-cfrtu.gcp.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(3333)