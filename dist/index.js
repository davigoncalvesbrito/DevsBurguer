"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const porta = process.env.port || 3000;
app_1.default.listen(porta, () => {
    console.log(`servidor fucionando na porta ${porta}`);
});
