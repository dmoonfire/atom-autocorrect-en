export class EnglishWordCorrection {
    public id: string = "autocorrect:en";

    public correctWord(buffer: AtomCore.IEditor, change: any): void {
        // Handle when the user has the shift-key down just a tad too long
        // and causes a double capital letter. We can only detect this with
        // three or more characters.
        change.replaceRegexp(
            /^([A-Z])([A-Z])([a-z])/,
            (entire: string, l1: string, l2: string, l3: string) => {
                return l1 + l2.toLowerCase() + l3;
            });

        // Replace common incorrect words.
        change.replaceRegexp(
            /^([Tt])eh$/,
            (entire: string, l1: string) => {
                return l1 + "he";
            });
    }
}
