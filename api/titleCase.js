import {
    COMMON_ABBREVIATIONS,
    CORRECT_TITLE_CASE,
    replaceCasing,
    CORRECT_PHRASE_CASE,
} from "./consts.js";

import {
    isWordInArray,
    isWordIgnored,
    isWordBreak,
    hasIntentionalUppercase,
    hasHyphen,
    hasSuffix,
    correctSuffix,
    startsWithSymbol,
    hasNumbersInWord,
    isRomanNumeral,
    endsWithSymbol,
    correctHyphenatedTerm,
    correctTerm,
    isShortWord,
    getTitleCaseOptions
} from "./utils.js";

String.prototype.toTitleCase = function (options = {}) {
    try {
        if (typeof this !== 'string') throw new TypeError("Invalid input: input must be a string.");
        if (typeof options !== "undefined" && typeof options !== "object") throw new TypeError("Invalid options: options must be an object.");

        const {
            style = "ap",
            neverCapitalize = []
        } = options;

        const ignoreList = ["nl2br", ...neverCapitalize];
        const {
            articles,
            shortConjunctions,
            shortPrepositions,
            neverCapitalized,
            replaceTerms
        } = getTitleCaseOptions(options, COMMON_ABBREVIATIONS, replaceCasing);

        const replaceTermsArray = replaceCasing.map(term => Object.keys(term)[0].toLowerCase());
        const replaceTermsObj = Object.fromEntries(replaceCasing.map(term => [Object.keys(term)[0].toLowerCase(), Object.values(term)[0]]));

        let inputString = this.trim();
        inputString = inputString.replace(/ {2,}/g, (match) => match.slice(0, 1));
        inputString = inputString.replace(/<br\s*[\/]?>/gi, "nl2br ");

        const words = inputString.split(" ");
        const wordsInTitleCase = words.map((word, i) => {
            switch (true) {
                case isWordBreak(word):
                    return word;
                case isWordIgnored(word, ignoreList):
                    return word;
                case replaceTermsArray.includes(word.toLowerCase()):
                    return replaceTermsObj[word.toLowerCase()];
                case isWordInArray(word, CORRECT_TITLE_CASE):
                    return correctTerm(word, CORRECT_TITLE_CASE);
                case hasSuffix(word, style):
                    return correctSuffix(word, CORRECT_TITLE_CASE);
                case hasHyphen(word):
                    return correctHyphenatedTerm(word, style);
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

        inputString = wordsInTitleCase.join(" ");

        for (const phrase of CORRECT_PHRASE_CASE) {
            if (inputString.toLowerCase().includes(phrase.toLowerCase())) {
                inputString = inputString.replace(new RegExp(phrase, 'gi'), phrase);
            }
        }

        inputString = inputString.replace(/nl2br /gi, "<br />");
        return inputString;
    } catch (error) {
        throw new Error(error);
    }
};

export function titleCase(nodes = null) {
    try {
        if (nodes === null) {
            nodes = document.querySelectorAll('.title-case');
        }

        if (!Array.isArray(nodes)) {
            nodes = [nodes];
        }

        for (const node of nodes) {
            if (node instanceof HTMLElement) {
                const text = node.innerHTML;
                const textCase = text.toTitleCase({ style: 'ap', neverCapitalize: ['nl2br'] });
                node.innerHTML = textCase;
            } else {
                throw new Error("Invalid argument: nodes must be an array of DOM elements.");
            }
        }
    } catch (error) {
        throw new Error(error);
    }
}



                   
