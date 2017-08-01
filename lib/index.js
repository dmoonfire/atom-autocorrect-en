"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EnglishWordCorrection_1 = require("./EnglishWordCorrection");
const EnglishWordCorrectionEntry = {
    plugin: new EnglishWordCorrection_1.EnglishWordCorrection(),
    activate(state) {
        return true;
    },
    deactivate() {
        return true;
    },
    serialize() {
        return {};
    },
    provideWordCorrection() {
        return this.plugin;
    },
};
module.exports = EnglishWordCorrectionEntry;
//# sourceMappingURL=index.js.map