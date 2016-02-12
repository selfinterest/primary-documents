var strict = true
	, fs = require("fs")
	, parseString = require('xml2js').parseString
	, util = require("util")
	, options = {
		explicitArray: false,
		async: true,
		trim: true
	}
;

fs.readFile(__dirname + "/test-document.xml", function(err, data){
	if(err) console.log(err);
	parseString(data, options, function(err, results){
		if(err) console.log(err);
		console.log(util.inspect(results.primaryDocument, {depth: null}));
	})
})