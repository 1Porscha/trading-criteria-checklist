// const criteriaModel = require("../models/criteria");
// const express = require("express");
// const router = express.Router();



// router.post('/api/criteria', async (req, res)=>{
//   try{
//     const newCriteria = new criteriaModel({
//       criteria: req.body.criteria
//     })
//     //save this item in database
//     const saveCriteria = await newCriteria.save()
//     res.status(200).json(saveCriteria);
//   }catch(err){
//     res.json(err);
//   }
// })
//   // test route
//   app.get("/test", (req, res) => {
//     res.send("test route");
//   });

 

// //Create trade route, use information from req.body to create new product in database
// app.post('/Home', async (req, res) => {
  
//   let trade = await new trade(req.body).save();

//   console.log(trade)
//   if (trade){
//   console.log("upload complete")
//   }
//     res.send(trade);

// });

// //Display all trade in collections in our database
// app.get('/Home', async (req, res) => {
    
//   let trade = await trade.find();
//   console.log("Display trade")
//   res.send(trade);

// });

// //Display completedTrade in collection in our database
// app.get('/get_completed_trade', async (req, res) => {

//   let trade = await trade.find().populate('completedTrade')
//   res.send(trade)
// })

// //update/change trade, find the item by its id and update it
// app.put('/edit_trade/:id', async (req, res) => {
  
//   let showId= req.params.id
//   console.log(showId)

//   let trade = await trade.findOneAndUpdate(
//   { _id: showId }, req.body );
//   console.log(trade)
//   res.send(trade);

// });

// // delete trade from database, find the item by its id and delete it
// app.delete('/delete_trade/:id', async (req, res) => {
    
//   let id = req.params.id

//   let trade = await trade.findByIdAndDelete(id);
//   console.log(trade)
//   res.send(trade);

// });

// //   // test route
// //   app.get("/test", (req, res) => {
// //     res.send("test route");
// //   });
  
  // catch-all route, must be last in route list, so it can catch all previous routes first
//   app.get("/*", (req, res) => {
//     res.sendFile(path.join(__dirname, "build", "index.html"));
//   });


// module.exports = router;