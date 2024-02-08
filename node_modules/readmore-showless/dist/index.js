"use strict";
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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.tsx
var react_1 = __importStar(require("react"));
var ReadMoreButton = function (_a) {
    var text = _a.text, _b = _a.linesToShow, linesToShow = _b === void 0 ? 5 : _b, styles = _a.styles;
    var _c = (0, react_1.useState)(false), showFullText = _c[0], setShowFullText = _c[1];
    var toggleText = function () {
        setShowFullText(!showFullText);
    };
    var paragraphs = text.split('\n').map(function (paragraph) { return paragraph.trim(); }).filter(Boolean);
    var displayedText = showFullText ? paragraphs.join('\n') : paragraphs.slice(0, linesToShow).join('\n');
    return (react_1.default.createElement("div", null,
        displayedText.split('\n').map(function (paragraph, index) { return (react_1.default.createElement(react_1.default.Fragment, { key: index },
            paragraph,
            react_1.default.createElement("br", null))); }),
        paragraphs.length > linesToShow && (react_1.default.createElement("button", { style: styles, className: "cursor-pointer", onClick: toggleText }, showFullText ? "Show less..." : "Read more..."))));
};
exports.default = ReadMoreButton;
