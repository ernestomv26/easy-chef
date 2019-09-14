var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');

const app = express();
var jsonParser = bodyParser.json();
//starting express server and loading the front page
app.use(express.static('public'));
app.use(express.static('public/documentation'));

app.use(jsonParser);
app.use(bodyParser.urlencoded({ extended: false }));
var router = express.Router();
app.use('/', router);



// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });


var pool = mysql.createPool({
  connectionLimit : 100,
  host     : '127.0.0.1',
  user     : 'user2',
  password : 'the',
  database : 'hackathon',
  debug    : false
});

function handle_database(req,res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  pool.getConnection(function(err,connection){
    if (err) {
      res.json({"code" : 100, "status" : "Error in connection database"});
      return;
    }   

    console.log('connected as id ' + connection.threadId);
  
    console.log(req.body);
    pool.query("SELECT * from recipe WHERE recipe = '" + req.body["query"] +  "';",function(err,rows){
    connection.release();
    if(!err) {
      console.log(rows);
      res.json(rows);
    }           
    });

    connection.on('error', function(err) {      
      res.json({"code" : 100, "status" : "Error in connection database"});
      return;     
    });
  });
}

app.post("/submitRecipe", function(req, res){
  handle_database(req,res);
});
  
app.listen(8080, () => {
  console.log('listening on 8080');
});