const express = require("express")
const {getMessages, addMessage} = require("./models/messages")
const app = express()

app.use(express.json())

app.post('/messages', function(req, res) {
  addMessage(req.body, (err) => {
    if (err) {
      return res.send({ success: false })
    }
    res.send({success: true})
  })
})

app.get('/messages', function(req, res) {
  getMessages((err, data) => {
    if (err) {
      return res.send({ success: false })
    }
    res.send({success: true, data})
  })
})

app.listen(5000)