"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Hello = ({ name = "Hello World" }) => {
    const greeting = `Hello ${name}`;
    return <h1>{greeting}</h1>;
};
exports.default = Hello;
// const Hello = (props:any) => {
//     const greeting = `Hello ${props.name ?? 'Hello World'}`;
//     return <h1>{greeting}</h1>;
// }
// export default Hello;
