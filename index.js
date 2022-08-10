import express from "express";
import bodyParser from "body-parser";
import usersRoutes from './routes/users.js'; 

var app = express();

app.use(bodyParser.json());

app.use("/users",usersRoutes);


app.get("/", (req, res)=>{
    res.send("Helo");
});

var PORT = 5000;

app.listen(PORT, ()=>{
  console.log(`Server Running on port ${PORT}`);
});
