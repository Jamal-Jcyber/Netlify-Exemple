"use strict";
const path = require('path');

module.exports = function(app){
    app.get('/', (req, res) => {
        res.end('HW')
    });

    app.get('/images', (req, res) => {
        res.sendFile(path.join(__dirname , "../public/1.jpg"));
    });
} 