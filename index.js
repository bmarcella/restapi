import express from "express";
import bodyParser from "body-parser";
import usersRoutes from './routes/users.js'; 

var app = express();

app.use(bodyParser.json());

app.use("/users",usersRoutes);
var a = 5; 
var b = 10;
app.get("/", (req, res)=>{
    var c = a + b;
    res.send("La somme est : "+c);
});

var PORT = 5000;

app.listen(PORT, ()=>{
  console.log(`Server Running on port ${PORT}`);
});
