import fs from "fs";
import path from "path";
import { reactTemplate, cssModuleTemplate } from "../templates/react.js";
import Handlebars from "handlebars";
const template = Handlebars.compile(reactTemplate);
const styleTemplate = Handlebars.compile(cssModuleTemplate);
export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
export const createReactComponent = (componentPath, componentName) => {
//   fs.stat(`${path.basename(componentPath)}/${componentName}.jsx`, (err,stat)=> {
//    if(err ===null){
//     console.log('file exist');
//    } else if(err.code === 'ENOENT') {
//     // file does not exist
//     fs.writeFile('log.txt', 'Some log\n', (err)=>{
//       console.log('dosent exist');
//     });
// }
//   })
  componentName = capitalizeFirstLetter(componentName);
  fs.appendFile(
    `${path.basename(componentPath)}/${componentName}.jsx`,
    template({ name: componentName }),
    (err) => {
      if (err) {
        throw err;
      }
      console.log("File Created");
    }
  );
  fs.appendFile(
    `${path.basename(componentPath)}/${componentName}.module.scss`,
    styleTemplate({ name: componentName }),
    (err) => {
      if (err) {
        throw err;
      }
      console.log("File Created");
    }
  );
};
