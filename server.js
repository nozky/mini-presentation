const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express();
const gpio = require('rpi-gpio')

app.use(cors())
app.use(express.static(path.join(__dirname, '/public')))

// init gpio
gpio.setup(8,gpio.DIR_HIGH)

app.get('/on',(req,res)=>{
  gpio.write(8,false,(err)=>{
    if (err){ console.log(err) }
  })
  console.log('Turning on')
  res.send('Turning on...')
})

app.get('/off',(req,res)=>{
  gpio.write(8,true,(err)=>{
    if (err){ console.log(err) }
  })

  console.log('Turning off')
  res.send('Turning off...')
})

app.get('*',(req, res)=>{
  res.send(`<h1>No page here. Everyone's laughing at you. :) (404)</h1>`)
})

app.listen(3000, ()=> {
  console.log('Listening on port 3000 on raspberry pi')
})