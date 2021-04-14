const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express();

app.use(cors())
app.use(express.static(path.join(__dirname, '/public')))

app.get('/on',(req,res)=>{
  console.log('Turning on')
  res.send('Turning on...')
})

app.get('/off',(req,res)=>{
  console.log('Turning off')
  res.send('Turning off...')
})

app.get('*',(req, res)=>{
  res.send(`<h1>No page here. Everyone's laughing at you. :) (404)</h1>`)
})

app.listen(3000, ()=> {
  console.log('Listening on port 3000 on raspberry pi')
})