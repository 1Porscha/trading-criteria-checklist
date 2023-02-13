const express = require('express')

const path = require("path");
// logs different request to our server
const logger = require("morgan");
//cross origin access management
const cors = require("cors");

const app = express()

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
  
 
  
  // test route
  app.get("/test", (req, res) => {
    res.send("test route");
  });
  
  // catch-all route, must be last in route list, so it can catch all previous routes first
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });

app.listen(5000, () => {
    console.log(`Server is Listening on 5000`)
})