"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
commander_1.program.version("2.0.0");
commander_1.program.option('--dir <type>', 'the texture source directory', './');
commander_1.program.option('--size <number>', 'the output atlas size', '2048');
commander_1.program.parse(process.argv);
exports.default = commander_1.program;
