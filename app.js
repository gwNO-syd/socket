const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)

io.on('connection', socket => {
  console.log('user connected : ', socket.id)
  socket.on('loaded', (data) => {
    console.log('data from client :', data)
  })
  socket.on('message', (data) => {
    console.log('message received', data)
    io.emit('message', data)
  })
})


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

http.listen(3000, () => {
  console.log('Server is up and running on http://localhost:3000')
})