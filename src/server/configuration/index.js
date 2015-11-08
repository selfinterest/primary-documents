var APP_NAME = "PRIMARY_DOCUMENTS";

if(process.env.NODE_ENV === "production") {
	APP_NAME += "_PRODUCTION";
}


var defaultConfig = {
  //defaults go here. 
  PORT: 3000
};

module.exports = require('rc')(APP_NAME, defaultConfig);