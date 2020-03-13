const express = require('express');
const app = express();
const path = require('path');
const config = require('./Config/config');

// Serve Static Files
app.use(express.static(path.join(__dirname +"public")));
// Allow cross origin
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requestted-with, Content-Type, Accept");
next();
});








require('./routes/route')(app);
const server = app.listen(config.server.port, config.server.host, () => {
console.log(`the surver is running on the port %s :`, server.address().port);
})