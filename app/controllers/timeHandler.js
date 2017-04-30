'use strict';

function timeHandler (req, res) {
    var time = new Date(req.params.date)
    
    if(isNaN(time))
        time = new Date(parseInt(req.params.date))

    var result = {};
    if(isNaN(time)) {
        result.unix = null
        result.natural = null;
    }
    else  {
        result.unix = time.getTime()/1000|0;
        result.natural = time.toLocaleString("en-us", {month: "long", day: "numeric", year: "numeric"})
    }    
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result))
}

module.exports = timeHandler;
