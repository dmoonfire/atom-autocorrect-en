import { EnglishWordCorrection } from "./EnglishWordCorrection";

const EnglishWordCorrectionEntry = {
    plugin: new EnglishWordCorrection(),

    activate(state: any) {
        return true;
    },

    deactivate() {
        return true;
    },

    serialize(): any {
        return {};
    },

    provideWordCorrection(): EnglishWordCorrection {
        return this.plugin;
    },
};

module.exports = EnglishWordCorrectionEntry;
