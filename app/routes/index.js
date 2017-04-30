'use strict';

var timeHandler = require(process.cwd() + '/app/controllers/timeHandler.js');

module.exports = function (app) {
   app.route('/')
      .get(function (req, res) {
         res.sendFile(process.cwd() + '/public/index.html');
      });
      
    app.route('/:date').get(timeHandler)
};
