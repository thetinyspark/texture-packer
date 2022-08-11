"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var process = require("process");
var LoadingBar = /** @class */ (function () {
    function LoadingBar() {
    }
    LoadingBar.prototype.start = function () { };
    LoadingBar.prototype.progress = function (num) {
        num = Math.round(num);
        var numFilled = Math.round(num / 5);
        var numEmpties = (100 / 5) - numFilled;
        var filled = (String)("=").repeat(numFilled);
        var empty = (String)("-").repeat(numEmpties);
        if (num === 100) {
            process.stdout.write("[" + filled + empty + "] " + num + "%");
            process.stdout.write("\n");
        }
        else {
            process.stdout.write("[" + filled + empty + "] " + num + "% \r");
        }
    };
    return LoadingBar;
}());
exports.default = LoadingBar;
