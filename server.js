const express = require('express')

const path = require("path");
// logs different request to our server
const logger = require("morgan");
//cross origin access management
const cors = require("cors");


require('dotenv').config()
//database
require('./configuration/database.js')

//model
// const router = require('./routes/criteriaRoutes');
// const criteria = require('./models/criteria.js')
// const Trade = require('./models/Trade.js');
// const completedTrade = require('./models/completedTrade.js');
const Criteria = require('./models/criteria.js');
// const Trade = require('./models/criteria.js');
// const trade = require('./routes/TradeRoutes')
// const criteriaRoutes = require('./routes/criteria');
// const TodoItemRoute = require('./routes/todoItems')



const app = express()
const router = express.Router();

// allow cross origin access
app.use(cors({
      origin: "*",
    }));
  
  // logs the different requests to the server
  app.use(logger("dev"));
  
  // parse stringified objects (JSON)
  app.use(express.json());
  
  // serve build folder
  app.use(express.static(path.join(__dirname, "build")));
  
  // // test route
  // app.get("/test", (req, res) => {
  //   res.send("test route");
  // });

  // app.get("/", (req, res) => {
  //   res.send("test route");
  // });

//Create criteria route, use information from req.body to create new product in database

app.post('/create_criteria', async (req, res) =>{


let criteriaFromCollection = await Criteria.create({
  criteria: req.body.criteria,
  completed: req.body.completed,
})
  res.json("criteria added successfully")
  console.log(criteriaFromCollection)
 
})



//Display all criteria in our database from collection
app.get('/get_criteria', async (req, res) => {
    // get data from database using find method 
  let response = await Criteria.find({});
  // console.log("Display Criteria")
  // console.log(response)
  // send it back to front end
  res.json(response);
});


//delete criteria from database, find the item by its id and delete it
app.delete('/delete_criteria', async (req, res) => {
    
  let id = req.body.id
 console.log(req.body)
  let response = await Criteria.findByIdAndDelete(id);
  console.log(response)
  // res.send(response);
  res.json(response)

});

//use infomation from req.body(ID) to edit criteria
app.put('/edit_criteria/:id', async (req, res) => {
  
  let id = req.params.id
  console.log(id)
console.log(req.body)
  // let editCriteria ={
  // criteria: req.body.criteria,
  // completed: req.body.completed,
  // }

  let response = await Criteria.findByIdAndUpdate(id, req.body)
 
  console.log(response)
  res.json(response);
});


// //delete criteria from database, find the item by its id and delete it
// app.delete('/delete_criteria/:id', async (req, res) => {
    
//   let id = req.params.id

//   let response = await Criteria.findByIdAndDelete(id);
//   console.log(response)
//   res.send(response);

// });
  
  // // test route
  // app.get("/test", (req, res) => {
  //   res.send("test route");
  // });
  // app.use("/", router)
  // app.use("/", criteriaRoutes.js)
  

  // catch-all route, must be last in route list, so it can catch all previous routes first
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });

app.listen(5000, () => {
    console.log(`Server is Listening on 5000`)
})





