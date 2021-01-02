const express=require("express");
const bodyParser=require("body-parser");
require("dotenv").config();
const cors=require("cors");
const app=express();
const port = process.env.PORT || 7000;

require("./config/dbConf.js");

//middlewars
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//require("./routes/common-routes.js")(app);
require("./routes/emp-routes.js")(app);

//error handeling
app.use((req, res) => {
  res.status(404).send({"url ": `${req.originalUrl} was not found` });
});

app.listen(port ,()=>{
	console.log("Server is running in port of "+port);
});

module.exports = app;