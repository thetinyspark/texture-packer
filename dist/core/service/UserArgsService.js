"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
class UserArgsService {
    constructor() {
        commander_1.program.version("1.11.0");
        commander_1.program.option('--dir <type>', 'the texture source directory', './');
        commander_1.program.option('--size <number>', 'the output atlas size', '2048');
        commander_1.program.option('--output <type>', 'the output dir', './');
        commander_1.program.option('--optimize <number>', 'optimize by cropping transparent pixels', '1');
        commander_1.program.option('--debug <number>', 'draws regions', '0');
        commander_1.program.parse(process.argv);
    }
    getUserArg(key) {
        return commander_1.program.opts()[key] || null;
    }
}
exports.default = UserArgsService;
