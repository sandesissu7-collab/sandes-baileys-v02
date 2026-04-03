"use strict";

const gradient = require("gradient-string");


const title = "⚡ sandes-baileys-v2 | Created By MR.SANDES 🍒 | Paircode: SANDES-V2";

console.log(gradient(["#ff0000", "#ff4d4d", "#ffffff"])("═════════════════════════════════════════════════════════════════"));
console.log(gradient(["#00ffcc", "#ffffff", "#00ffcc"])(title));
console.log(gradient(["#ffff00", "#ffffff"])("Enjoy using sandes-baileys-v2 🚀"));
console.log(gradient(["#ffff00", "#ffffff"])("Stay connected for updates and new features ♻"));
console.log(gradient(["#00ff00", "#ffffff", "#00ff00"])(" Contact MR.SANDES for support if any error occurs ✨"));
console.log(gradient(["#ff0000", "#ff4d4d", "#ffffff"])("═════════════════════════════════════════════════════════════════"));
    
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p))
            __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

Object.defineProperty(exports, "__esModule", { value: true });
exports.proto = exports.makeWASocket = void 0;

const WAProto_1 = require("../WAProto");
Object.defineProperty(exports, "proto", {
    enumerable: true,
    get: function() {
        return WAProto_1.proto;
    }
});

const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;

__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);
__exportStar(require("./Api"), exports);

exports.default = Socket_1.default;
