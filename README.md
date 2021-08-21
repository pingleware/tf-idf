# Installation
To install,

    npm i @presspage/tf-idf

# Getting Started
Start by importing the module,

    import {stopwords, TFIDF} = require('@presspage/tf-idf');

    // if you need to add additional stop words, just append to the array stopwords?

    var content = "Your lengthly content....";

    var topic_sentences = TFIDF(content);

    // topic_sentences will be an array of three elements

# Contact Us
The best contact method is via email at presspage.entertainment@gmail.com

# License
Creative Commons Attribution 4.0