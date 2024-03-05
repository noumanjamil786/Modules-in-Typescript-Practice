"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const First_js_1 = __importDefault(require("./First.js"));
const Second_js_1 = __importDefault(require("./Second.js"));
let sum = First_js_1.default + Second_js_1.default;
console.log(sum);
