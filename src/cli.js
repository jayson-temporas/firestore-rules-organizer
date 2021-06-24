#!/usr/bin/env node
var concat = require('concat')
const execPath = process.cwd();

const config = require(`./config`)(execPath);
const rulesFolder =  execPath + '/' + config.rules_folder + '/';
const fs = require('fs');
var fileNames = [ __dirname + '/includes/head.rules'];

fs.readdirSync(rulesFolder).forEach(file => {
    console.log('\x1b[32m', "Added Firestore Rules: " + file, '\x1b[0m')
    fileNames.push(rulesFolder + file);
});

fileNames.push(__dirname + '/includes/tail.rules');
concat(fileNames, config.rules_output);