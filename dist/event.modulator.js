(()=>{"use strict";var e={541:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.wordReplacementsList=t.titleCaseStylesList=t.titleCaseDefaultOptionsList=t.ignoredWordsList=t.correctTitleCasingList=t.correctPhraseCasingList=t.commonAbbreviationList=t.allowedTitleCaseStylesList=void 0;t.commonAbbreviationList=["a","an","the","as","at","by","for","in","of","on","to","up","yet","so","but","nor","or","and"];t.correctTitleCasingList=["AJAX","CSS","DOM","ES6","HTML","JavaScript","jQuery","MobX","SCSS","TypeScript","Vue.js",".NET","ASP","ASPX","MySQL","PHP","PostgreSQL","Python","SQL","GraphQL","HTML5","API","APIs","ASCII","CI","CircleCI","CLI","DLL","DNS","EC2","FTP","HTTP","HTTPs","ICMP","IDE","IP","ISP","JSON","JSP","LPWAN","M2M","MQTT","OOP","REST","SSH","SSL","TCP","UDP","URL","WLAN","WYSIWYG","XML","YAML","YML","IMAP","RSS","IaaS","PaaS","SaaS","CaaS","FaaS","XaaS","RaaS","IoE","IoT","LoRa","NB-IoT","RFID","RF","RFI","RFQ","ECMAScript","IO","I/O","DevOps","SecOps","DDoS","VoIP","AI","AR","ML","VR","w/","w/o","e-Book","e-Books","eBook","eBooks","eCommerce","eMarket","eMarketplace","eMarketplaces","eMarkets","eReader","eShop","eShops","eStore","eStores","E-commerce","AP","COGS","EBIT","EPS","FIFO","GAAP","LIFO","P&L","ROI","SOX","TCO","VAT","CAGR","DCF","ETF","IPO","IRR","M&A","NAV","PE","PEG","PPE","ROE","S&P","TVM","VC","B2B","B2C","CMO","CPA","CPC","CPL","CPM","CRM","CTA","CTR","SEO","SEM","SMM","USP","A/B","CTA","CTOR","CTR","KPI","PWA","SEM","SERP","SERPs","SMM","SMO","FAQ","FAQA","FAQS","UI","UI/UX","UX","T&C","TOS","PP","CRM","PoE","PoW","PoC","A11Y","PR","BANT","GAP","KPI","MQL","NPS","POS","SPIN","SQL","SWOT","AFA","ADR","CCPA","CFAA","CISG","DMCA","EULA","GDPR","HIPAA","NDA","SOW","TOS","CEO","CEOs","CFO","CFOs","CIO","CIOs","CMO","CMOs","COO","COOs","CPO","CPOs","CRO","CROs","CSO","CSOs","CTO","CTOs","EVP","EVPs","HR","HRs","SVP","SVPs","VP","VPs","NGO","NPO","NGOs","NPOs","UN","UNESCO","UNICEF","UNHCR","UNODC","UNDP","UNFPA","UNEP","Adobe","Airbnb","Alibaba","Allstate","American Express","Apple","AT&T","BMW","Boeing","Cisco","Citigroup","Coca","Deloitte","Disney","Dropbox","ExxonMobil","Ford","GE","General","Goldman Sachs","Google","Hilton","HP","IBM","Intel","JPMorgan","Johnson & Johnson","LinkedIn","McDonald's","Mercedes-Benz","Microsoft","Nestle","Nike","Nissan","Oracle","PepsiCo","Pfizer","Salesforce","Samsung","Shell","Sony","Tesla","Toyota","Uber","Verizon","Visa","Walmart","Wells Fargo","Yahoo","Zara","IKEA","Facebook","YouTube","Instagram","Twitter","TensorFlow","Amazon","Netflix","eBay","iPhone","iPad","iPod","PlayStation","PayPal","GitHub","GitLab","CodeIgniter","WordPress","WooCommerce","MongoDB","JIRA","HubSpot","AirDrop","AirPlay","AirPods","AirTags","FinalCut","GarageBand","iBooks","iCloud","iLife","iMac","iMessage","iMovie","iPhoto","iWatch","iWork","LogicPro","macOS","ProTools","QuickTime","AdWords","AdSense","TikTok","Slack","Trello","Zoom","Twitch","Snapchat","WhatsApp","Telegram","Discord","Reddit","Quora","StackOverflow","StackExchange","Coca-Cola","AWS","GCP","VMware","CVS","NBA","NCAA","NFL","WWE","WWF","FIFA","a.m.","p.m.","ca.","cc.","fig.","pl.","pt.","rev.","sr.","v.","vol.","et al.","pp.","p.","ph.d.","m.d.","d.d.s.","d.m.d.","d.o.","d.c.","d.v.m.","d.n.p.","d.p.m.","d.s.w.","d.s.n.","d.n.sc.","d.n.a.","d.n.t.","d.n.p.t.","d.n.o.","d.n.m.","d.n.e.","d.n.s.","d.n.p.s.","adj.","adv.","cf.","cm.","co.","corp.","dept.","dist.","ed.","edn.","esp.","etc.","ex.","i.e.","e.g.","op. cit.","vs.","Ltd.","Co.","Inc.","St.","Ave.","Bldg.","No."];t.wordReplacementsList=[{"a.k.a":"AKA"},{"a.s.a.p":"ASAP"},{angularjs:"Angular.js"},{"back-end":"Backend"},{"d.i.y":"DIY"},{"e-book":"eBook"},{"e-books":"eBooks"},{"e-commerce":"eCommerce"},{ecom:"eCommerce"},{ecommerce:"eCommerce"},{"f.a.q":"FAQ"},{"f.a.q.a":"FAQs"},{"f.a.q.s":"FAQs"},{"f.y.i":"FYI"},{"front-end":"Frontend"},{"full-stack":"Fullstack"},{nextjs:"Next.js"},{nodejs:"Node.js"},{nuxtjs:"Nuxt.js"},{reactjs:"React.js"},{"t.b.d":"TBD"},{vuejs:"Vue.js"},{phd:"ph.d."}];const r=Object.freeze({AP:"ap",APA:"apa",BRITISH:"british",CHICAGO:"chicago",NYT:"nyt",WIKIPEDIA:"wikipedia"});t.titleCaseStylesList=r;const s=Object.values(r);t.allowedTitleCaseStylesList=s;const i=Object.freeze({ap:{shortConjunctionsList:["and","but","or","for","nor","yet","so"],articlesList:["a","an","the"],shortPrepositionsList:["as","at","by","in","of","on","to","up","via"],neverCapitalizedList:[]},apa:{shortConjunctionsList:["and","as","but","by","for","in","nor","of","on","or","so","to","yet"],articlesList:["a","an","the"],shortPrepositionsList:["as","at","by","for","in","of","on","to","up","via"],neverCapitalizedList:[]},british:{shortConjunctionsList:["and","but","or","for","nor","yet","so"],articlesList:["a","an","the"],shortPrepositionsList:["as","at","by","in","of","on","to","up","via"],neverCapitalizedList:[]},chicago:{shortConjunctionsList:["and","but","or","for","nor","yet","so"],articlesList:["a","an","the"],shortPrepositionsList:["as","at","by","for","in","of","on","to","up","with","via"],neverCapitalizedList:["etc."]},nyt:{shortConjunctionsList:["and","but","or","for","nor","yet","so"],articlesList:["a","an","the"],shortPrepositionsList:["as","at","by","in","of","on","to","up","via"],neverCapitalizedList:[]},wikipedia:{shortConjunctionsList:["and","as","but","for","if","nor","or","so","yet"],articlesList:["a","an","the"],shortPrepositionsList:["as","at","by","in","of","on","to","up","via"],neverCapitalizedList:[]}});t.titleCaseDefaultOptionsList=i;t.ignoredWordsList=[];t.correctPhraseCasingList=["The Cybersmile Foundation","CO. by Colgate","The Simpsons"]},675:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(541);function i(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class o{static validateOption(e,t){if(!Array.isArray(t))throw new TypeError(`Invalid option: ${e} must be an array`);if(!t.every((e=>"string"==typeof e)))throw new TypeError(`Invalid option: ${e} must be an array of strings`)}static validateOptions(e){for(const t of Object.keys(e))if("style"!==t)if("wordReplacementsList"!==t){if(!s.titleCaseDefaultOptionsList.hasOwnProperty(t))throw new TypeError(`Invalid option: ${t}`);TitleCaseValidator.validateOption(t,e[t])}else{if(!Array.isArray(e.wordReplacementsList))throw new TypeError(`Invalid option: ${t} must be an array`);for(const r of e.wordReplacementsList)if("string"!=typeof r)throw new TypeError(`Invalid option: ${t} must contain only strings`)}else{if("string"!=typeof e.style)throw new TypeError(`Invalid option: ${t} must be a string`);if(!s.allowedTitleCaseStylesList.includes(e.style))throw new TypeError(`Invalid option: ${t} must be a string`)}}static getTitleCaseOptions(e={},t=[]){const r=JSON.stringify({options:e,lowercaseWords:t});if(o.titleCaseOptionsCache.has(r))return o.titleCaseOptionsCache.get(r);const i={...s.titleCaseDefaultOptionsList[e.style||"ap"],...e},a=i.articlesList.concat(t).filter(((e,t,r)=>r.indexOf(e)===t)),n=i.shortConjunctionsList.concat(t).filter(((e,t,r)=>r.indexOf(e)===t)),l=i.shortPrepositionsList.concat(t).filter(((e,t,r)=>r.indexOf(e)===t)),c=[...(i.replaceTerms||[]).map((([e,t])=>[e.toLowerCase(),t])),...s.wordReplacementsList],p={articlesList:a,shortConjunctionsList:n,shortPrepositionsList:l,neverCapitalizedList:[...i.neverCapitalizedList],replaceTerms:c};return o.titleCaseOptionsCache.set(r,p),p}static isShortConjunction(e,t){const r=[...o.getTitleCaseOptions({style:t}).shortConjunctionsList],s=e.toLowerCase();return r.includes(s)}static isArticle(e,t){return o.getTitleCaseOptions({style:t}).articlesList.includes(e.toLowerCase())}static isShortPreposition(e,t){const{shortPrepositionsList:r}=o.getTitleCaseOptions({style:t});return r.includes(e.toLowerCase())}static isNeverCapitalized(e,t){const r=`${t}_${e.toLowerCase()}`;if(o.isNeverCapitalizedCache.has(r))return o.isNeverCapitalizedCache.get(r);const{neverCapitalizedList:s}=o.getTitleCaseOptions({style:t}),i=s.includes(e.toLowerCase());return o.isNeverCapitalizedCache.set(r,i),i}static isShortWord(e,t){if("string"!=typeof e)throw new TypeError(`Invalid input: word must be a string. Received ${typeof e}.`);if(!s.allowedTitleCaseStylesList.includes(t))throw new Error(`Invalid option: style must be one of ${s.allowedTitleCaseStylesList.join(", ")}.`);return o.isShortConjunction(e,t)||o.isArticle(e,t)||o.isShortPreposition(e,t)||o.isNeverCapitalized(e,t)}static hasNumbers(e){return/\d/.test(e)}static hasUppercaseMultiple(e){let t=0;for(let r=0;r<e.length&&t<2;r++)/[A-Z]/.test(e[r])&&t++;return t>=2}static hasUppercaseIntentional(e){return/[A-Z]/.test(e.slice(1))&&/[a-z]/.test(e.slice(0,-1))}static hasSuffix(e){return e.length>"'s".length&&e.endsWith("'s")}static hasApostrophe(e){return-1!==e.indexOf("'")}static hasHyphen(e){return-1!==e.indexOf("-")||-1!==e.indexOf("–")||-1!==e.indexOf("—")}static hasRomanNumeral(e){if("string"!=typeof e||""===e)throw new TypeError("Invalid input: word must be a non-empty string.");return/^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/i.test(e)}static hasHyphenRomanNumeral(e){if("string"!=typeof e||""===e)throw new TypeError("Invalid input: word must be a non-empty string.");const t=e.split("-");for(let e=0;e<t.length;e++)if(!o.hasRomanNumeral(t[e]))return!1;return!0}static hasHtmlBreak(e){return"nl2br"===e}static startsWithSymbol(e){if("string"!=typeof e)throw new Error(`Parameter 'word' must be a string. Received '${typeof e}' instead.`);if(0===e.length)return!1;const t=e.charAt(0);return"#"===t||"@"===t||"."===t}static endsWithSymbol(e,t=[".",",",";",":","?","!"]){if("string"!=typeof e||!Array.isArray(t))throw new Error("Invalid arguments");return t.some((t=>e.endsWith(t)))||t.includes(e.slice(-2))}static isWordIgnored(e,t=s.ignoredWordsList){if(!Array.isArray(t))throw new TypeError("Invalid input: ignoredWords must be an array.");if("string"!=typeof e||""===e.trim())throw new TypeError("Invalid input: word must be a non-empty string.");const r=e.toLowerCase().trim();return t.includes(r)}static isWordInArray(e,t){return!!Array.isArray(t)&&t.some((t=>t.toLowerCase()===e.toLowerCase()))}static replaceTerm(e,t){if("string"!=typeof e||""===e)throw new TypeError("Invalid input: word must be a non-empty string.");if(!t||"object"!=typeof t)throw new TypeError("Invalid input: replaceTermsObj must be a non-null object.");const r=e.toLowerCase();if(t.hasOwnProperty(r))return t[r];if(t.hasOwnProperty(e))return t[e];const s=e.toUpperCase();return t.hasOwnProperty(s)?t[s]:e}static correctSuffix(e,t){if("string"!=typeof e||""===e)throw new TypeError("Invalid input: word must be a non-empty string.");if(!t||!Array.isArray(t)||t.some((e=>"string"!=typeof e)))throw new TypeError("Invalid input: correctTerms must be an array of strings.");if(/'s$/i.test(e)){const r=e.slice(0,-2),s=t.findIndex((e=>e.toLowerCase()===r.toLowerCase()));if(s>=0){return`${t[s]}'s`}return`${r.charAt(0).toUpperCase()+r.slice(1)}'s`}return e}static correctTerm(e,t,r=/[-']/){if("string"!=typeof e||""===e)throw new TypeError("Invalid input: word must be a non-empty string.");if(!t||!Array.isArray(t))throw new TypeError("Invalid input: correctTerms must be an array.");if(!("string"==typeof r||Array.isArray(r)||r instanceof RegExp))throw new TypeError("Invalid input: delimiters must be a string, an array of strings, or a regular expression.");"string"==typeof r?r=new RegExp(`[${r}]`):Array.isArray(r)&&(r=new RegExp(`[${r.join("")}]`));const s=e.split(r),i=s.length;for(let e=0;e<i;e++){const r=s[e].toLowerCase(),i=t.findIndex((e=>e.toLowerCase()===r));i>=0&&(s[e]=t[i])}return s.join(r.source.charAt(0))}static correctTermHyphenated(e,t){const r=e.split("-"),i=e=>e.charAt(0).toUpperCase()+e.slice(1),a=e=>e.charAt(0)+e.slice(1).toLowerCase(),n={ap:(e,t)=>0===t?i(e):a(e),chicago:i,apa:(e,r,s)=>o.isShortWord(e,t)&&r>0&&r<s-1?e.toLowerCase():i(e),nyt:(e,t)=>0===t?i(e):a(e),wikipedia:(e,t)=>0===t?i(e):a(e)},l=n[t]||a,c=r.map(((e,t)=>{if(/^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/i.test(e))return e.toUpperCase();let i=e;const o=e.toLowerCase(),a=s.correctTitleCasingList.findIndex((e=>e.toLowerCase()===o));if(a>=0)i=s.correctTitleCasingList[a];else if(o.endsWith("'s")){const e=o.substring(0,o.length-2),t=s.correctTitleCasingList.findIndex((t=>t.toLowerCase()===e));t>=0&&(i=`${s.correctTitleCasingList[t]}'s`)}return l(i,t,r.length)}));return c.join("-")}}t.default=o,i(o,"titleCaseOptionsCache",new Map),i(o,"isNeverCapitalizedCache",new Map)},429:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TitleCaser=void 0;var s,i=r(541),o=(s=r(675))&&s.__esModule?s:{default:s};class a{constructor(e={}){this.options=e,this.wordReplacementsList=i.wordReplacementsList}toTitleCase(e){try{if(0===e.trim().length)throw new TypeError("Invalid input: input must not be empty.");if("string"!=typeof e)throw new TypeError("Invalid input: input must be a string.");if(void 0!==this.options&&"object"!=typeof this.options)throw new TypeError("Invalid options: options must be an object.");const{style:t="ap",neverCapitalize:r=[],replaceTermsList:s=i.wordReplacementsList}=this.options,a=["nl2br",...r],{articlesList:n,shortConjunctionsList:l,shortPrepositionsList:c,neverCapitalizedList:p,replaceTerms:d}=o.default.getTitleCaseOptions(this.options,i.commonAbbreviationList,i.wordReplacementsList),u=s.map((e=>Object.keys(e)[0].toLowerCase())),C=Object.fromEntries(s.map((e=>[Object.keys(e)[0].toLowerCase(),Object.values(e)[0]])));let f=e.trim();f=f.replace(/ {2,}/g,(e=>e.slice(0,1))),f=f.replace(/<br\s*[\/]?>/gi,"nl2br ");const h=f.split(" ");f=h.map(((e,r)=>{switch(!0){case o.default.hasHtmlBreak(e):case o.default.isWordIgnored(e,a):return e;case u.includes(e.toLowerCase()):return C[e.toLowerCase()];case o.default.isWordInArray(e,i.correctTitleCasingList):return o.default.correctTerm(e,i.correctTitleCasingList);case o.default.hasSuffix(e,t):return o.default.correctSuffix(e,i.correctTitleCasingList);case o.default.hasHyphen(e):return o.default.correctTermHyphenated(e,t);case o.default.hasUppercaseIntentional(e):return e;case o.default.isShortWord(e,t)&&0!==r:return r>0&&o.default.endsWithSymbol(h[r-1],[":","?","!","."])?e.charAt(0).toUpperCase()+e.slice(1):e.toLowerCase();case o.default.endsWithSymbol(e):const s=e.split(/([.,\/#!$%\^&\*;:{}=\-_`~()])/g).map(((e,t)=>o.default.isWordInArray(e,i.correctTitleCasingList)?o.default.correctTerm(e,i.correctTitleCasingList):(t>0&&o.default.endsWithSymbol(e),e.charAt(0).toUpperCase()+e.slice(1))));return s.join("");case o.default.startsWithSymbol(e):return o.default.isWordInArray(e,i.correctTitleCasingList)?o.default.correctTerm(e):e;case o.default.hasRomanNumeral(e):return e.toUpperCase();case o.default.hasNumbers(e):return e;default:return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}})).join(" ");for(const e of i.correctPhraseCasingList)f.toLowerCase().includes(e.toLowerCase())&&(f=f.replace(new RegExp(e,"gi"),e));return f=f.replace(/nl2br /gi,"<br />"),f}catch(e){throw new Error(e)}}setReplaceTerms(e){if("object"!=typeof e)throw new TypeError("Invalid argument: replace terms must be an object.");Object.entries(e).forEach((([e,t])=>{const r=i.wordReplacementsList.findIndex((t=>t[e]));-1!==r?i.wordReplacementsList[r][e]=t:i.wordReplacementsList.push({[e]:t})})),this.options.wordReplacementsList=i.wordReplacementsList}addReplaceTerm(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Invalid argument: term and replacement must be strings.");const r=this.wordReplacementsList.findIndex((t=>t[e]));-1!==r?this.wordReplacementsList[r][e]=t:this.wordReplacementsList.push({[e]:t}),this.options.wordReplacementsList=this.wordReplacementsList}removeReplaceTerm(e){if("string"!=typeof e)throw new TypeError("Invalid argument: term must be a string.");const t=this.wordReplacementsList.findIndex((t=>Object.keys(t)[0]===e));if(-1===t)throw new Error(`Term '${e}' not found in word replacements list.`);this.wordReplacementsList.splice(t,1),this.options.wordReplacementsList=this.wordReplacementsList}setStyle(e){if("string"!=typeof e)throw new TypeError("Invalid argument: style must be a string.");this.options.style=e}}t.TitleCaser=a,e.exports&&(e.exports={TitleCaser:a})}},t={};function r(s){var i=t[s];if(void 0!==i)return i.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,r),o.exports}var s={};(()=>{var e=s;Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"TitleCaser",{enumerable:!0,get:function(){return t.TitleCaser}});var t=r(429);"function"!=typeof String.prototype.toTitleCase&&(String.prototype.toTitleCase=function(e){return new t.TitleCaser(e).toTitleCase(this)}),"object"==typeof window&&(window.TitleCaser=t.TitleCaser)})(),module.exports=s})();