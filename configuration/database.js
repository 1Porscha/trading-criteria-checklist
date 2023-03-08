// install mongoose
const mongoose = require('mongoose'); 

let connectionString =`mongodb+srv://${process.env.MONGOUSERNAME}:${process.env.MONGOPASSWORD}@mongosetupcluster.srxdrsr.mongodb.net/TradingCriteriaChecklist?retryWrites=true&w=majority`

//connect to our MongoDB database 
mongoose.set('strictQuery', false);
mongoose.connect(connectionString, {
     useNewUrlParser: true,
    useUnifiedTopology: true,
  });

//let us know mongoose was successful and activatedd
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});