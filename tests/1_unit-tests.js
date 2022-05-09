const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
  test("Translate Mangoes are my favorite fruit. to British English", function(done) {
    assert.equal(translator.translateAmerican("Mangoes are my favorite fruit.", false), "Mangoes are my favourite fruit.");
    done();
  });
  
  test("I ate yogurt for breakfast.", function(done) {
    assert.equal(translator.translateAmerican("I ate yogurt for breakfast.", false), "I ate yoghurt for breakfast.");
    done();
  });

  test("We had a party at my friend's condo.", function(done) {
    assert.equal(translator.translateAmerican("We had a party at my friend's condo.", false), "We had a party at my friend's flat.");
    done();
  });

  test("Can you toss this in the trashcan for me?", function(done) {
    assert.equal(translator.translateAmerican("Can you toss this in the trashcan for me?", false), "Can you toss this in the bin for me?");
    done();
  });


  
  test("The parking lot was full.", function(done) {
    assert.equal(translator.translateAmerican("The parking lot was full.", false), "The car park was full.");
    done();
  });

  test("Like a high tech Rube Goldberg machine.", function(done) {
    assert.equal(translator.translateAmerican("Like a high tech Rube Goldberg machine.", false), "Like a high tech Heath Robinson device.");
    done();
  });

  test("To play hooky means to skip class or work.", function(done) {
    assert.equal(translator.translateAmerican("To play hooky means to skip class or work.", false), "To bunk off means to skip class or work.");
    done();
  });

  test("No Mr. Bond, I expect you to die.", function(done) {
    assert.equal(translator.translateAmerican("No Mr. Bond, I expect you to die.", false), "No Mr Bond, I expect you to die.");
    done();
  });

  test("Dr. Grosh will see you now.", function(done) {
    assert.equal(translator.translateAmerican("Dr. Grosh will see you now.", false), "Dr Grosh will see you now.");
    done();
  });

  test("Lunch is at 12:15 today.", function(done) {
    assert.equal(translator.translateAmerican("Lunch is at 12:15 today.", false), "Lunch is at 12.15 today.");
    done();
  }); 


  
  test("We watched the footie match for a while.", function(done) {
    assert.equal(translator.translateBritish("We watched the footie match for a while.", false), "We watched the soccer match for a while.");
    done();
  });
  test("Paracetamol takes up to an hour to work.", function(done) {
    assert.equal(translator.translateBritish("Paracetamol takes up to an hour to work.", false), "Tylenol takes up to an hour to work.");
    done();
  });
  test("First, caramelise the onions.", function(done) {
    assert.equal(translator.translateBritish("First, caramelise the onions.", false), "First, caramelize the onions.");
    done();
  });
  test("I spent the bank holiday at the funfair.", function(done) {
    assert.equal(translator.translateBritish("I spent the bank holiday at the funfair.", false), "I spent the public holiday at the carnival.");
    done();
  });
  test("I had a bicky then went to the chippy.", function(done) {
    assert.equal(translator.translateBritish("I had a bicky then went to the chippy.", false), "I had a cookie then went to the fish-and-chip shop.");
    done();
  });
  test("I've just got bits and bobs in my bum bag.", function(done) {
    assert.equal(translator.translateBritish("I've just got bits and bobs in my bum bag.", false), "I've just got odds and ends in my fanny pack.");
    done();
  });
  test("The car boot sale at Boxted Airfield was called off.", function(done) {
    assert.equal(translator.translateBritish("The car boot sale at Boxted Airfield was called off.", false), "The swap meet at Boxted Airfield was called off.");
    done();
  });
  test("Have you met Mrs Kalyani?", function(done) {
    assert.equal(translator.translateBritish("Have you met Mrs Kalyani?", false), "Have you met Mrs. Kalyani?");
    done();
  });
  test("Prof Joyner of King's College, London.", function(done) {
    assert.equal(translator.translateBritish("Prof Joyner of King's College, London.", false), "Prof. Joyner of King's College, London.");
    done();
  });
  test("Tea time is usually around 4 or 4.30.", function(done) {
    assert.equal(translator.translateBritish("Tea time is usually around 4 or 4.30.", false), "Tea time is usually around 4 or 4:30.");
    done();
  });

  
  
  test("Mangoes are my favorite fruit.", function(done) {
    assert.equal(translator.translateAmerican("Mangoes are my favorite fruit.", true), 'Mangoes are my <span class="highlight">favourite</span> fruit.');
    done();
  });
  test("I ate yogurt for breakfast.", function(done) {
    assert.equal(translator.translateAmerican("I ate yogurt for breakfast.", true), 'I ate <span class="highlight">yoghurt</span> for breakfast.');
    done();
  });
  test("We watched the footie match for a while.", function(done) {
    assert.equal(translator.translateBritish("We watched the footie match for a while.", true), 'We watched the <span class="highlight">soccer</span> match for a while.');
    done();
  });
  test("Paracetamol takes up to an hour to work.", function(done) {
    assert.equal(translator.translateBritish("Paracetamol takes up to an hour to work.", true), '<span class="highlight">Tylenol</span> takes up to an hour to work.');
    done();
  });
  
});
