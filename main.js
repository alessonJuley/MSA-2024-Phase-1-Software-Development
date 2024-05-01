"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// imports a single function in the module
var greetings_module_js_1 = require("./greetings_module.js");
// imports all exported components in the module
var allGreetingFunctions = require("./greetings_module.js");
// import returnGreeting function
var greetings_utilities_module_js_1 = require("./greetings-utilities_module.js");
// use returnGreetings function
(0, greetings_module_js_1.returnGreeting)('Kamusta!');
allGreetingFunctions.returnGreeting('Kia ora!');
(0, greetings_utilities_module_js_1.returnGreeting)('Hello');
