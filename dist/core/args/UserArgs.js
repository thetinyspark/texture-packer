"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserArgs {
    constructor() {
        this.size = 1;
        this.directory = "./";
        let args = process.argv;
        let current = "";
        let i = 0;
        for (; i < args.length; i++) {
            current = args[i];
            if (current == "--size" && i + 1 < args.length) {
                this.size = this.getNextPowerOf2(parseInt(args[i + 1]));
            }
            if (current == "--dir" && i + 1 < args.length) {
                this.directory = args[i + 1];
            }
        }
    }
    getNextPowerOf2(value) {
        let num = 1;
        while (num < value) {
            num *= 2;
        }
        return num;
    }
}
exports.UserArgs = UserArgs;
