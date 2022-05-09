'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const {text, locale} = req.body;
      let translation;

      if (text === undefined) {
        res.json({ error: 'Required field(s) missing' });
      } else if (text === "") {
        res.json({
          error: "No text to translate",
        })
      } else if ("american-to-british" !== locale &&
                  "british-to-american" !== locale) {
        res.json({
          error: 'Invalid value for locale field'
        })
      } else {

        if (locale === "american-to-british") {
          translation = translator.translateAmerican(text);
        } else {
          translation = translator.translateBritish(text);
        }
        
        if (text === translation) {
          res.json({
            text,
            translation: "Everything looks good to me!"
          });
        } else {
          res.json({
            text,
            translation,
          });
        }
        

      }
    });
};
