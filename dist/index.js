#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var UserArgs_1 = require("./core/args/UserArgs");
var args = new UserArgs_1.UserArgs();
if (!fs.existsSync(args.directory)) {
    console.log("'", args.directory, "' is not a valid directory");
    process.exit(1);
}
var filenames = fs.readdirSync(args.directory);
console.log(filenames);
