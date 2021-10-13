"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getNextPowerOf2(value) {
    var num = 1;
    while (num < value) {
        num *= 2;
    }
    return num;
}
exports.default = getNextPowerOf2;
