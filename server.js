const express = require("express");
let app = express();
app.get("/test/task1", function(req, res){
	console.log("Creating API");
        res.send("Response to client.");
})
app.listen(4512);
