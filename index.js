#!/usr/bin/env node
const fs = require("fs");
const yargs = require("yargs/yargs")(process.argv.slice(2)).argv;
const {source} = require('./template/react');
const Handlebars = require("handlebars");

const template= Handlebars.compile(source);
const [component, componentName] = yargs._;
if (component === "react") {
  fs.appendFile(`${componentName}.jsx`, template({name:componentName}), (err)=> {
    throw err
  });
} else {
  console.error("Something Wrong !");
}
