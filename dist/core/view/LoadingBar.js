"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const process = require("process");
class LoadingBar {
    constructor() { }
    start() { }
    progress(num) {
        num = Math.round(num);
        const numFilled = Math.round(num / 5);
        const numEmpties = (100 / 5) - numFilled;
        const filled = (String)("=").repeat(numFilled);
        const empty = (String)("-").repeat(numEmpties);
        if (num === 100) {
            process.stdout.write("[" + filled + empty + "] " + num + "%");
            process.stdout.write("\n");
        }
        else {
            process.stdout.write("[" + filled + empty + "] " + num + "% \r");
        }
    }
}
exports.default = LoadingBar;
