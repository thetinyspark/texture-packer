"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserArgs = void 0;
var UserArgs = /** @class */ (function () {
    function UserArgs() {
        this.size = 1;
        this.directory = "./";
        var args = process.argv;
        var current = "";
        var i = 0;
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
    UserArgs.prototype.getNextPowerOf2 = function (value) {
        var num = 1;
        while (num < value) {
            num *= 2;
        }
        return num;
    };
    return UserArgs;
}());
exports.UserArgs = UserArgs;
