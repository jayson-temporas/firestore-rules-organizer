#!/usr/bin/env node
const concat = require('concat')
const path = require('path')
const execPath = process.cwd();
const config = require(`./config`)(execPath);
const rulesFolder =  execPath + '/' + config.rules_folder + '/';
const fs = require('fs');
const fileExtension = '.rules';
var fileNames = [ __dirname + '/includes/head.rules'];

fs.readdirSync(rulesFolder).forEach(file => {
    if (path.extname(file) == fileExtension) {
        console.log('\x1b[32m', "Added Firestore Rules: " + file, '\x1b[0m')
        fileNames.push(rulesFolder + file);
    }
});

fileNames.push(__dirname + '/includes/tail.rules');
concat(fileNames, config.rules_output);