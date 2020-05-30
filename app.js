 
 const express = require('express');
 const expressLayouts = require ('express-ejs-layouts');
 const mongoose = require('mongoose');
 const flash = require ('connect-flash');
 const session = require ('express-session');
 const app = express();
 const passport = require('passport');
 //passport config
 require('./config/passport')(passport);
 //DB config
 const db = require('./config/keys').MongoURI;
 //Connect to Mongo
 mongoose.connect(db, {useNewUrlParser: true })
 .then(()=> console.log('MongoDB Connected...'))
 .catch(err => console.log(err));

 //EJS
 //app.use(expressLayouts);

 app.set('view engine', 'ejs');
 app.use(express.static(__dirname + '/public'));
 
 
 //Bodyparser
 app.use(express.urlencoded({ extended: false }));
 //Express session midlewear
 app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
    
  }));
  //passport middleware
  app.use(passport.initialize());
 app.use(passport.session()); 

  //connect flash
  app.use(flash());
  //Global variables
  app.use((req, res, next) => {
      res.locals.success_msg = req.flash('success_msg');
      res.locals.error_msg = req.flash('error_msg');
      res.locals.error = req.flash('error');
      next();
  });
//Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
const navbar = require('./routes/navbar');
app.use("/navbar",navbar);


app.engine('ejs',require('ejs-locals'));
app.set('view engine', 'ejs');
 app.use(express.static(__dirname + '/public'));
 const PORT =process.env.PORT || 8080 ;
 app.listen(PORT,console.log(`server started on port ${PORT}`));
 
