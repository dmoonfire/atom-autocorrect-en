"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EnglishWordCorrection {
    constructor() {
        this.id = "autocorrect:en";
    }
    correctWord(buffer, change) {
        // Handle when the user has the shift-key down just a tad too long
        // and causes a double capital letter. We can only detect this with
        // three or more characters.
        change.replaceRegexp(/^([A-Z])([A-Z])([a-z])/, (entire, l1, l2, l3) => {
            return l1 + l2.toLowerCase() + l3;
        });
        // Replace common incorrect words.
        change.replaceRegexp(/^([Tt])eh$/, (entire, l1) => {
            return l1 + "he";
        });
    }
}
exports.EnglishWordCorrection = EnglishWordCorrection;
//# sourceMappingURL=EnglishWordCorrection.js.map