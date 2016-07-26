const checkAuth = function(req, res, next){
  if(!req.user) {
    res.status(400).send( `
      <head>
        <meta charset="UTF-8">
        <title>Please Login First</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">
      </head>
      <body>
        <div class="container">
          <div class="row">
            <h1>UNAUTHORIZED USER</h1>
            <h3>You will need to login first</h3>
            <a class="button" href="/">Go home</a>
            <a class="button" href="/register">Sign Up</a>
            <a class="button" href="/login">Login</a>
          </div>
        </div>
      </body>
    `)
  }
  else next()
}

const errorHandler = function(err, req, res, next) {
  console.log(err)
  res.render(err);
  return
} 

const cookifyUser = function(req,res,next) {
  if (req.user) {
    res.cookie(global.PROJECT_NAME + '_user',JSON.stringify(req.user))
    res.cookie('tiy_full_stack_app_name', global.PROJECT_NAME)
    next()
  }
  else {
    console.log('no user')
    res.cookie(global.PROJECT_NAME + '_user','null')
    res.cookie('tiy_full_stack_app_name', global.PROJECT_NAME)
    next()
  }
}

module.exports = {
  checkAuth: checkAuth,
  errorHandler: errorHandler,
  cookifyUser: cookifyUser
}