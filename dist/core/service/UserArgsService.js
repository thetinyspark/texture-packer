"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var UserArgsService = /** @class */ (function () {
    function UserArgsService() {
        commander_1.program.version("2.0.0");
        commander_1.program.option('--dir <type>', 'the texture source directory', './');
        commander_1.program.option('--size <number>', 'the output atlas size', '2048');
        commander_1.program.option('--output <type>', 'the output dir', './');
        commander_1.program.parse(process.argv);
    }
    UserArgsService.prototype.getUserArg = function (key) {
        return commander_1.program.opts()[key] || null;
    };
    return UserArgsService;
}());
exports.default = UserArgsService;
