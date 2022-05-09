const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

  translateAmerican(text, highlight = true) {
    let translation = text;
    
    for (let partial in americanToBritishSpelling) {
      translation = translation.replace(
        new RegExp(`${partial}`, `g`), 
        `${highlight ? `<span class="highlight">`: ``}${americanToBritishSpelling[partial]}${highlight ? `</span>` : ``}`);
    }

    for (let partial in americanToBritishTitles) {
      translation = translation.replace(new RegExp(`(${americanToBritishTitles[partial]})\. `, `gi`), `${highlight ? `<span class="highlight">`: ``}$1${highlight ? `</span>` : ``} `);
    }

    for (let partial in americanOnly) {
      translation = translation.replace(new RegExp(`${partial}`, `gi`), `${highlight ? `<span class="highlight">`: ``}${americanOnly[partial]}${highlight ? `</span>` : ``}`);
    }

    translation = translation.replace(/(\d?\d):(\d\d)/g, `${highlight ? `<span class="highlight">`: ``}$1.$2${highlight ? `</span>` : ``}`);
    
    return translation;
  }

  translateBritish(text, highlight = true) {
    let translation = text;

    for (const [key, value] of Object.entries(britishOnly)) {
      translation = translation.replace(new RegExp(`(?<![a-zA-Z\-])${key}(?![a-zA-Z\-])`, `gi`), `${highlight ? `<span class="highlight">`: ``}${value}${highlight ? `</span>` : ``}`);
    }
    
    for (const [key, value] of Object.entries(americanToBritishSpelling)) {
      translation = translation.replace(new RegExp(`${value}`, `g`), `${highlight ? `<span class="highlight">`: ``}${key}${highlight ? `</span>` : ``}`);
    }
    
    for (const [key, value] of Object.entries(americanToBritishTitles)) {
      translation = translation.replace(new RegExp(`(${value}) `, `gi`), `${highlight ? `<span class="highlight">`: ``}$1${highlight ? `</span>` : ``}. `);
    }

    translation = translation.replace(/(\d?\d)\.(\d\d)/g, `${highlight ? `<span class="highlight">`: ``}$1:$2${highlight ? `</span>` : ``}`);
    
    return translation;
  }
}

module.exports = Translator;