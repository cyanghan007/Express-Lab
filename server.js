const express = require('express')
require('dotenv').config()
const app = express();
const port = process.env.PORT;

const anchorLink = (content = '') => {
    
}

// Configure the app (app.set)
const fs = require('fs') // this engine requires the fs module like we did Saturday
app.engine('hypatia', (filePath, options, callback) => { // define the view engine called hypatia
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
    return callback(null, rendered)
  })
})
app.set('views', './views') // specify the views directory
app.set('view engine', 'hypatia') // register the hypatia view engine

// Mount routes
app.get('/', (req, res) => {
    res.render('template', { title: 'Code', message: 'Hello there!', content: 'You ready to hear some bad jokes? Lets go for it!' })
  })
  
  app.get('/2', (req, res) => {
    res.render('sheet', { title: 'Got jokes', message: 'What do cows most like to read?', content: 'Cattle-logs!' })
  })
  
  app.get('/3', (req, res) => {
    res.render('template', { title: 'Got jokes', message: 'What is Forest Gumps email password?', content: '1forrest1' })
  })

  app.get('/4', (req, res) => {
    res.render('sheet', { title: 'Got jokes', message: 'What do you call a sleeping T-rex?', content: 'A dino-snore!' })
  })

  app.get('/5', (req, res) => {
    res.render('template', { title: 'Got jokes', message: 'Whats the differnece between a cat and a comma?', content: 'A cat has claws at the end of paws; A comma is a pause at the end of a clause.' })
  })

  app.get('/6', (req, res) => {
    res.render('sheet', { title: 'Got jokess', message: 'What did the left eye say to the right eye?', content: 'Between you and me, something smells.' })
  })

  app.get('/7', (req, res) => {
    res.render('template', { title: 'Got jokes', message: 'What do you call a magic dog?', content: 'A labracadabrador!' })
  })

  app.get('/8', (req, res) => {
    res.render('sheet', { title: 'Got jokes', message: 'What did the pirate say when he turned 80?!', content: 'Aye matey!' })
  })

  app.get('/9', (req, res) => {
    res.render('template', { title: 'Got jokes', message: 'Once my dog ate all the scrabble tiles?', content: 'He kepy leaving  little messages around the house.' })
  })

  app.get('/10', (req, res) => {
    res.render('sheet', { title: 'Got jokes', message: 'What  do you call a train carrying bubblegum?', content: 'A chew-chew train.' })
  })

app.listen(port,() => {
    console.log('I am listening on port' , port);
});
