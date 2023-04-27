// Get dependencies
let express = require('express');
let path = require('path');
let http = require('http');
var mongoose = require('mongoose');

let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

// import the routing file to handle the default (index) route
let index = require('./server/routes/app');
const documentsRoutes = require('./server/routes/documents');
// const pubPapersRoutes = require('./server/routes/pubPapers');
// const projChoicesRoutes = require('./server/routes/projChoices');
// const userRoutes = require('./server/routes/user');

// ... ADD CODE TO IMPORT YOUR ROUTING FILES HERE ...

let app = express(); // create an instance of express

// Tell express to use the following parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

app.use(logger('dev')); // Tell express to use the Morgan logger

// Add support for CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});

// Tell express to use the specified director as the
// root directory for your web site
app.use(express.static(path.join(__dirname, 'dist/insight-proj')));

// Tell express to map the default route ('/') to the index route
app.use('/', index);
app.use('/documents', documentsRoutes);
// app.use('/pubPapers', pubPapersRoutes);
// app.use('/projChoices', projChoicesRoutes);
// app.use('/user', userRoutes);

//For 404
app.use((req, res, next) => {
  res.render('index')
});


// establish a connection to the mongo database
// mongoose.connect('mongodb+srv://Davidson:6erYFFMgI4qWRNod@clustercms.nn6yu.mongodb.net/InsightProjDB?retryWrites=true&w=majority',
mongoose.connect('mongodb+srv://lucydavidson:Ke0PP6c0skab7Ms3@cluster0.vi6kbmc.mongodb.net/InsightTheraDB?retryWrites=true&w=majority',
  { useNewUrlParser: true }, (err, res) => {
    if (err) {
      console.log('Connection failed: ' + err);
    }
    else {
      console.log('Connected to database!');
    }
  }
);


// ... ADD YOUR CODE TO MAP YOUR URL'S TO ROUTING FILES HERE ...

// Tell express to map all other non-defined routes back to the index page
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/insight-proj/index.html'));
});

// Define the port address and tell express to use this port
const port = process.env.PORT || '3000';
app.set('port', port);

// Create HTTP server.
const server = http.createServer(app);

// Tell the server to start listening on the provided port
server.listen(port, function() {
  console.log('API running on localhost: ' + port)
});