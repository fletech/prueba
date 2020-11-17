const series =[ { "id": 1, "name": "Friends" }, { "id": 2, "name": "Breaking Bad" }, { "id": 3, "name": "Dexter" }, { "id": 4, "name": "Six Feet Under" } ]
console.log(series[1].id)

const express = require('express');
const app = express();

app.get('/', function (req,res){

     return res.send('Bienvenides')
        
 })
 app.get("/serie/:id", function(req, res){         
      res.send(series[req.params.id - 1]) })

app.listen (3000, function() {console.log('servidor corriendo en http://localhost:3000')})