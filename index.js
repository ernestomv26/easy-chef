var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');

const app = express();
var jsonParser = bodyParser.json();
//starting express server and loading the front page
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


var pool = mysql.createPool({
  connectionLimit : 100,
  host     : '127.0.0.1',
  user     : 'user2',
  password : 'the',
  database : 'hackathon',
  debug    : false
});

// connection.query('SELECT * from recipe', function(err, rows) {
//   if (!err)
//     console.log('The solution is: ', rows);
//   else
//     console.log('Error while performing Query.');
// });

function handle_database(req,res) {
    
  pool.getConnection(function(err,connection){
    if (err) {
      res.json({"code" : 100, "status" : "Error in connection database"});
      return;
    }   

    console.log('connected as id ' + connection.threadId);
      
    connection.query("SELECT * from recipe WHERE recipe = '"+res.body.query+"';",function(err,rows){
    connection.release();
    if(!err) {
      res.json(rows);
    }           
    });

    connection.on('error', function(err) {      
      res.json({"code" : 100, "status" : "Error in connection database"});
      return;     
    });
  });
}

// app.get('/submitRecipe', function(request, response) {
//   console.log("SELECT * from recipe WHERE recipe = '"+request.body.query+"';");
//   pool.getConnection()
//   connection.query("SELECT * from recipe WHERE recipe = '"+request.body.query+"';", function(err, rows) {
//     if (!err)
//       console.log('The solution is: ', rows);
//     else
//       console.log('Error while performing Query.');
//   });
// });

app.get("/submitRecipe", function(req, res){-
  handle_database(req,res);
});
  
app.listen(8080, () => {
  console.log('listening on 8080');
});