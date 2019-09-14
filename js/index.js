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
  user     : 'root',
  password : 'password',
  database : 'hackathon',
  debug    : false
});

// function handle_database(req,res) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

//   pool.getConnection(function(err,connection){
//     if (err) {
//       res.json({"code" : 100, "status" : "Error in connection database"});
//       return;
//     }   

//     console.log('connected as id ' + connection.threadId);
  
//     pool.query("SELECT must from test WHERE recipe = '" + req.body["query"] +  "';",function(err,rows){
//     connection.release();
//     if(!err) {
      
//       res.json(rows);
//     }           
//     });

//     connection.on('error', function(err) {      
//       res.json({"code" : 100, "status" : "Error in connection database"});
//       return;     
//     });
//   });
// }

function handle_database(req,res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  pool.getConnection(function(err,connection){
    if (err) {
      res.json({"code" : 100, "status" : "Error in connection database"});
      return;
    }   

    console.log('connected as id ' + connection.threadId);
  
    pool.query("INSERT INTO `fridge` VALUES ('" + req.body["query"] +  "');",function(err,rows){
    connection.release();
    if(!err) {
      res.json(rows);
    }           
    else {
      console.log(err)
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

function handle_database1(req,res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  pool.getConnection(function(err,connection){
    if (err) {
      res.json({"code" : 100, "status" : "Error in connection database"});
      return;
    }   

    console.log('connected as id ' + connection.threadId);
  
    pool.query("select distinct(meal) from recipes as t where t.meal not in (select meal as r from recipes where ingredient not in (select ingredient from fridge));",function(err,rows1){
    connection.release();
    console.log(rows1)
    if(!err) {
      res.json(rows1);
    }           
    });

    connection.on('error', function(err) {      
      res.json({"code" : 100, "status" : "Error in connection database"});
      return;     
    });
  });
}

app.get("/getRecipe", function(req, res){
  handle_database1(req,res);
});
  
app.listen(8080, () => {
  console.log('listening on 8080');
});