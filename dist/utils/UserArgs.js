"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserArgs = /** @class */ (function () {
    function UserArgs() {
    }
    UserArgs.getUserArgs = function () {
        var args = process.argv;
        for (var i = 0; i < args.length; i++) {
            console.log(args[i]);
        }
    };
    return UserArgs;
}());
exports.UserArgs = UserArgs;
