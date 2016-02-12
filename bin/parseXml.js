/**
 * Created by terrence_watson on 2/11/16.
 */

var program = require("commander")
    , debug = require("debug")("parseXml")
    , log = require("winston")
    , fs = require("fs")
    , path = require("path")
    , P = require("bluebird")
    , parseString = P.promisify(require('xml2js').parseString)
    , parseOptions = {
        explicitArray: false,
        async: true,
        trim: true
    }
    , readFile = P.promisify(fs.readFile)
    , Document = require("../src/components/Document")
;




program
    .option('-f, --filename [filename]', 'The file to process')
    .parse(process.argv)
;

if(!program.filename) {
    log.error("A filename must be specified.");
    process.exit();
}


debug("Filename is %s", program.filename);

readFile(program.filename, {encoding: "utf8"})
    .then( contents => parseString(contents, parseOptions))
    .then( Document.create)
