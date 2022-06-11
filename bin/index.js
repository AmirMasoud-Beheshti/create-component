#!/usr/bin/env node
const fs = require("fs");
const path = require('path');
const yargs = require("yargs");
const { source } = require("../templates/react");
const Handlebars = require("handlebars");

const template = Handlebars.compile(source);
const commands = yargs.argv._;
const [componentName, componentDir] = commands;

if (componentName) {
  if (componentDir ) {
    fs.appendFile(
      `${componentName}.jsx`,
      template({ name: componentName }),
      (err) => {
        console.log(err);
        throw err;
      }
    );
  }
}
