const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');

// Initialize the App
const app = express();

// middlewares
//Form Data middleWare
app.use(bodyParser.urlencoded({
  extended: false
}));

// Json Body MiddleWare
app.use(bodyParser.json());

// Cors MiddleWare
app.use(cors());

//Setting up the static directory
app.use(express.static(path.join(__dirname, 'public')));

//Use the passport MiddleWare
app.use(passport.initialize());
//Bring in the Passport Strategy
require('./config/passport')(passport);

// Bring in the DataBase Config and connect with database
const db = require('./config/keys').mongoURI;
mongoose.connect(db, { useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
  console.log('Database connected successfully')
}).catch(err=>{
  console.log(`Unable to connect to Database ${err}`)
});

// app.get('/',(req, res)=>{
//   return res.send("<h1>hello noobss</h1>");
// });

//Bring in the users const router = express.Router();
const users= require('./routes/api/users');
app.use('/api/users',users);
const vqtests= require('./routes/api/vqtests');
app.use('/api/vqtests',vqtests);

//aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname, 'public/index.html'))
})
//aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
  console.log(`Server started on port ${PORT}`);
});
