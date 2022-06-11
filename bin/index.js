#!/usr/bin/env node
import fs from "fs";
import path from "path";
import yargs from "yargs/yargs";
import { createReactComponent } from "./utils.js";
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));


const commands = yargs(process.argv.slice(2)).argv._;
const [componentName, dir] = commands;

if (componentName) {
  if (dir) {
    const componentPath = path.join(__dirname, dir);
    createReactComponent(componentPath, componentName);
  }
}
