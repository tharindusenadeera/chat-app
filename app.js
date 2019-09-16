const express = require('express')
const http = require('http')

const app = express()

//set the template engine ejs
app.set('view engine', 'ejs')

//middlewares
app.use(express.static('public'))

//routes
app.route('/', (req,res)  =>{
    res.render('views/index')
})

//listing on server
const server = http.createServer(app).listen(8080, function(err) {
    if (err) {
      console.log(err);
    } else {
      const host = server.address().address;
      const port = server.address().port;
      console.log(`Server listening on ${host}:${port}`);
    }
  })

//socket.io installation
const io = require("socket.io")(server)

//listning on connection
io.on('connection', (socket) => {
    console.log("New user is connected")
    
})