## toTitleCase()
### Converts a string to title case

`to-title-cased` is a function that takes a string and converts it to title case using various style guidelines, including the American Psychological Association (APA), American Psychological Association 7th edition (APA 7), Associated Press (AP), Chicago Manual of Style, New York Times (NYT), Wikipedia, and British styles. The function capitalizes the first letter of each word, except for articles, coordinating conjunctions, and prepositions, unless they are the first word of the string. The function also ensures that certain abbreviations and acronyms are in the correct format according to the style guidelines.

This package supports custom options to further refine the conversion, including words that should never be capitalized, words or phrases to ignore, short conjunctions, short prepositions, and more. These options allow for greater customization and flexibility when converting strings to title case.

[see demo here](https://codepen.io/danielhaim/pen/wvEqvQP)

## Installation

You can install `title-case` using npm:

```bash
npm install to-title-cased
```

Alternatively, you can also install it using yarn:

```yarn
yarn add to-title-cased
```

After installing the package, you can use it in your code by importing it:

```javascript
const toTitleCase = require('to-title-cased');
```

Or if you're using ES6 syntax:

```javascript
import { toTitleCase } from 'to-title-cased';
```

```javascript
String.prototype.toTitleCase(style, options);
```

## Parameters
- `shortConjunctions`: short conjunctions that should not be capitalized, such as "and", "but", and "if"
- `articles`: articles that should not be capitalized, such as "a", "an", and "the".
- `shortPrepositions`: short prepositions that should not be capitalized, such as "of", "to", and "by".
- `neverCapitalized`: words that should never be capitalized, such as "etc.", "i.e.", and "vs.".

## Options

- `UNIQUE_WORDS` is a list of words that should never be capitalized, such as "etc.", "i.e.", and "vs.".
- `CORRECTED_TITLE_CASE_TERMS` is a list of words that should be capitalized differently than the default title case rules, such as "Front-End" and "Back-End".
- `UPPERCASE_COMMON_WORDS` is a list of abbreviations and acronyms that should be capitalized, such as "API" and "HTML".

### Return value
A new string with the original string converted to title case.

### Examples

```javascript
"Back-End Web Development: Building Scalable APIs with Node.js".toTitleCase();
"Exploring Back-End Frameworks: Comparing Django, Ruby on Rails, and Laravel".toTitleCase({ style: 'chicago' });
"Mastering Front-End Web Design: Tips and Tricks for Creating Responsive Layouts".toTitleCase({ style: 'nyt' });
"Back-End Security: Best Practices for Securing Your Web Applications".toTitleCase({ style: 'wikipedia' });
"Advanced jQuery Techniques: Tips and Tricks for Experienced Front-End Developers".toTitleCase({ style: 'british' });
"The Future of Back-End Development: Trends and Technologies to Watch".toTitleCase({ style: 'ap' });
"Front-End Performance Optimization: Tools and Techniques for Faster Websites".toTitleCase({ style: 'apa' });
```

```javascript
// Example 1: Default title case
const input = "the quick brown fox jumps over the lazy dog";
const output = input.toTitleCase(); // "The Quick Brown Fox Jumps Over the Lazy Dog"
```

```javascript
// Example 2: Title case with small words not capitalized
const input = "to be or not to be";
const output = input.toTitleCase(); // "To Be or Not to Be"
```

```javascript
// Example 3: Title case with specific words not capitalized
const input = "the name of the musical is The Musical";
const output = input.toTitleCase( { neverCapitalized: ["The Musical"] }); // "The Name of the Musical Is The Musical"
```

```javascript
// Example 4: Chicago style title case
const input = "the quick rabbit together with the brown fox jumped over the dog";
const output = input.toTitleCase({ style: "chicago" }); // "The Quick Rabbit Together with the Brown Fox Jumped Over the Dog"
```

```javascript
"JQuery Plugins for Front-End Developers: A Comprehensive Guide".toTitleCase({ style: 'apa' });
// converts JQuery to jQuery, even if it's the first word, 
// replaces Front-End with Frontend (see correctCapitalization)
```

## Tests

```bash
npm test
```

```bash
  String.prototype.toTitleCase
    ✓ throws TypeError if input is not a string (4 ms)
    ✓ throws TypeError if options is not an object
    ✓ AP style (1 ms)
    ✓ Chicago style (1 ms)
    ✓ APA style (1 ms)
    ✓ NYT style (2 ms)
    ✓ Wikipedia style
    ✓ Reserved keyword (jQuery, Frontend)
    ✓ Reserved keyword, correct capitalization (Back-End > Backend) (1 ms)
    ✓ Complex title with various formatting (1 ms)
    ✓ Colonization of mars with mixed case and possessive (1 ms)
    ✓ Cryptocurrencies with all caps and ampersand (2 ms)
    ✓ Technology and mental health with question mark and quotes (1 ms)
    ✓ Fashion with acronym and hyphen (1 ms)
    ✓ Nutrition with colon and apostrophe
    ✓ Correct capitalization for special terms (1 ms)
    ✓ Correct capitalization for special terms

Test Suites: 1 passed, 1 total
Tests:       11 passed, 11 total
Snapshots:   0 total
Time:        0.124 s, estimated 1 s
```

## Resources

- [APA Style Grammar Guidelines: Capitalization](https://apastyle.apa.org/style-grammar-guidelines/capitalization/title-case)
- [Chicago Manual of Style: Capitalization](https://chat.openai.com/chat/643828ec-d4b5-4f21-b035-62946dd2cec3#:~:text=Chicago%20Manual%20of%20Style%3A%20Capitalization)
- [Wikipedia: Letter case](https://chat.openai.com/chat/643828ec-d4b5-4f21-b035-62946dd2cec3#:~:text=Wikipedia%3A%20Letter%20case)
- [Grammarly Handbook: Title Case](https://www.grammarly.com/blog/title-case/) - an overview of title case and its rules
- [Title Capitalization Rules for Writers](https://www.scribendi.com/advice/title_capitalization_rules.en.html) - a guide to title case with examples and exceptions.

### Notes

- The toTitleCase() function correctly capitalizes the first letter of each word in a string, while handling various exceptions and rules.
- The function supports several optional configuration options, such as specifying words that should never be capitalized, short conjunctions that should not be capitalized, and short prepositions that should not be capitalized.
- The function also supports two style options: APA style and Chicago style.
- The function is optimized to improve performance by memoizing capitalized versions of words and avoiding unnecessary work when checking for ignored words, intentionally uppercase words, URLs, hashtags, and handles.
- The function correctly handles multi-word small words and hyphenated words, as well as non-ASCII characters.
- The function includes unit tests to ensure proper functionality and prevent regressions.
