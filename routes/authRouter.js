let Router = require('express').Router;
let passport = require ('passport')
let User = require('../db/schema.js').User
let checkAuth = require('../config/middleware.js').checkAuth


const authRouter = Router()


authRouter
  .post('/register', function(req, res){
    // passport appends json-data to request.body
    console.log(req.body)
    let newUser = new User(req.body)

    User.find({email: req.body.email}, function(err, results){
      if (err) return res.status(500).send('error saving querying db for user')

      if(results !== null && results.length > 0 ) { 
        return res.status(401).send(`oops, record for <${req.body.email}> already exists`)
      }

      newUser.save(function(err, record){
        if(err) return res.status(500).send('server/db error on attempt to save user to db')
        let userCopy = newUser.toObject()
        delete userCopy.password
        res.json(userCopy)
      })
    })
  })

authRouter
  .get('/current', function (req, res) {
    if (req.user) res.json({user: req.user});
    else res.json({user: null})
  })
  .post('/login', passport.authenticate('local'), function(req, res){
      let userCopy = req.user.toObject()
      delete userCopy.password
      console.log(userCopy)
      checkAuth(req, res, function(req){res.redirect('/dashboard')})
  })
  .get('/logout', function (req, res) {
    if (req.user) {
      console.log(req.user)
      var email = req.user.email
      res.json({
        msg: `user <${email}> logged out`
      })
      req.logout()
      checkAuth(req, res, function(){res.redirect('/auth/dashboard')})
    }
    else {
      res.json({
        msg: 'error: no current user'
      })
    }
    checkAuth(req, res, function(){res.redirect('/auth/dashboard')})
  })


module.exports = authRouter