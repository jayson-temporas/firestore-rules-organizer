const fs = require("fs");

var defaultConfig = {
    rules_folder: "firestore-rules",
    rules_output: "firestore.rules",
};

function config(execPath) {
  if (fs.existsSync(`${execPath}/firestore_rules_organizer.config.js`)) {
    console.log("Reading configuration from firestore_rules_organizer.config.js");
    var config = require(`${execPath}/firestore_rules_organizer.config.js`);
    var finalConfig = Object.assign({}, defaultConfig, config);
      
    return finalConfig;
  } 

  return defaultConfig;
}

module.exports = config;