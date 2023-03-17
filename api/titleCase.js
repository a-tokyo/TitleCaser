import {
    COMMON_ABBREVIATIONS,
    CORRECT_TITLE_CASE,
    REPLACE_TERMS,
} from "./titleCaseConstants.js";

import {
    isWordInArray,
    isWordIgnored,
    hasIntentionalUppercase,
    hasHyphen,
    startsWithSymbol,
    hasNumbersInWord,
    isRomanNumeral,
    endsWithSymbol,
    correctHyphenatedTerm,
    correctTerm,
    isShortWord,
    getTitleCaseOptions
} from "./titleCaseUtils.js";


String.prototype.toTitleCase = function(options = {}) {
    try {
        if (typeof this !== 'string') throw new TypeError("Invalid input: input must be a string.");
        if (typeof options !== "undefined" && typeof options !== "object") throw new TypeError("Invalid options: options must be an object.");

        const {
            style = "ap"
        } = options;
        const {
            articles,
            shortConjunctions,
            shortPrepositions,
            neverCapitalized,
            replaceTerms
        } = getTitleCaseOptions(options, COMMON_ABBREVIATIONS, REPLACE_TERMS);

        const replaceTermsArray = REPLACE_TERMS.map(term => Object.keys(term)[0].toLowerCase());
        const replaceTermsObj = Object.fromEntries(REPLACE_TERMS.map(term => [Object.keys(term)[0].toLowerCase(), Object.values(term)[0]]));
        const words = this.split(" ");

        const wordsInTitleCase = words.map((word, i) => {
            switch (true) {
                case isWordIgnored(word):
                    return word;
                case replaceTermsArray.includes(word.toLowerCase()):
                    return replaceTermsObj[word.toLowerCase()];
                case isWordInArray(word, CORRECT_TITLE_CASE):
                    return correctTerm(word, CORRECT_TITLE_CASE);
                case hasIntentionalUppercase(word):
                    return word;
                case isShortWord(word, style) && i !== 0:
                    return (i > 0 && endsWithSymbol(words[i - 1], [':', '?', '!', '.'])) ? word.charAt(0).toUpperCase() + word.slice(1) : word.toLowerCase();
                case endsWithSymbol(word):
                    const splitWord = word.split(/([.,\/#!$%\^&\*;:{}=\-_`~()])/g);
                    const processedWords = splitWord.map((splitWord, j) => {
                        if (isWordInArray(splitWord, CORRECT_TITLE_CASE)) return correctTerm(splitWord, CORRECT_TITLE_CASE);
                        else return (j > 0 && endsWithSymbol(splitWord)) ? splitWord.charAt(0).toUpperCase() + splitWord.slice(1) : splitWord.charAt(0).toUpperCase() + splitWord.slice(1);
                    });
                    return processedWords.join("");
                case hasHyphen(word):
                    return correctHyphenatedTerm(word, style);
                case startsWithSymbol(word):
                    return !isWordInArray(word, CORRECT_TITLE_CASE) ? word : correctTerm(word);
                case isRomanNumeral(word):
                    return word.toUpperCase();
                case hasNumbersInWord(word):
                    return word;
                default:
                    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }
        });

        return wordsInTitleCase.join(" ");
    } catch (error) {
        throw new Error(error);
    }
};