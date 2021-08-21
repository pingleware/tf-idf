/**
 * Originally from https://hackernoon.com/finding-the-most-important-sentences-using-nlp-tf-idf-3065028897a3
 */

// Turns an array of words into lowercase and removes stopwords
const stopwords = ["a", "share", "linkthese", "about", "above", "after", "again", "against", "all", "am", "an", "and", "any", "", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "between", "both", "but", "by", "can't", "cannot", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "don't", "down", "during", "each", "few", "for", "from", "further", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "he'd", "he'll", "he's", "her", "here", "here's", "hers", "herself", "him", "himself", "his", "how", "how's", "i", "i'd", "i'll", "i'm", "i've", "if", "in", "into", "is", "isn't", "it", "it's", "its", "itself", "let's", "me", "more", "most", "mustn't", "my", "myself", "no", "nor", "not", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "ours", "ourselves", "out", "over", "own", "same", "shan't", "she", "she'd", "she'll", "she's", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "to", "too", "under", "until", "up", "very", "was", "wasn't", "we", "we'd", "we'll", "we're", "we've", "were", "weren't", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "who's", "whom", "why", "why's", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "you're", "you've", "your", "yours", "yourself", "yourselves", "this", "messenger", "facebook"];


function prettify(document) {

    // turn document into lowercase words, remove all stopwords
    var doc = document.replace(/[.,]/g, '');

    let document_in_lowercase = doc.split(" ").map(function (x) {
        return x.toLowerCase();
    });

    return document_in_lowercase.filter(x => !stopwords.includes(x));
}

function uniqueWords(words) {
    const unique_words_set = new Set(words);

    return unique_words = Array.from(unique_words_set);
}

function countWords(words) {
    // returns a dictionary of {WORD: COUNT} where count is

    // how many times that word appears in "words".

    const unique_words = uniqueWords(words);

    let dict = {};

    // for every single unique word

    for (let i = 0; i <= unique_words.length - 1; i++) {

        dict[unique_words[i]] = 0;

        // see how many times this unique word appears in all words

        for (let x = 0; x <= words_without_stopwords.length - 1; x++) {

            if (unique_words[i] === words[x]) {

                dict[unique_words[i]] = dict[unique_words[i]] + 1;

            }

        }

    }

    return dict;
}

function termFrequency(document) {
    // calculates term frequency of each sentence
    words_without_stopwords = prettify(document);

    // gets rid of trailing spaces
    const sentences = document.split(".").map(item => item.trim());
    sentences[0] = sentences[0].substring(146);

    const TFVals = countWords(words_without_stopwords);
    const unique_words = uniqueWords(words_without_stopwords);

    // actually makes it TF values according to formula
    for (const [key, value] of Object.entries(TFVals)) {
        TFVals[key] = TFVals[key] / words_without_stopwords.length;
    }

    // splits it up into sentences now
    var TFSentences = {};

    // for every sentence
    for (let i = 0; i <= sentences.length - 1; i++) {
        // for every word in that sentence
        let sentence_split_words = sentences[i].split(" ");

        // get the assiocated TF values of each word
        // temp.add is the "TF" value of a sentence, we need to divide it at the end
        let temp_add = 0.0;
        let words_no_stop_words_length = prettify(sentences[i]).length;

        for (let x = 0; x <= sentence_split_words.length - 1; x++) {
            // get the assiocated TF value and add it to temp_add
            if (sentence_split_words[x].toLowerCase() in TFVals) {
                // adds all the TF values up
                temp_add = temp_add + TFVals[sentence_split_words[x].toLowerCase()];
            } else {
                // nothing, since it's a stop word.
            }
        }
        // TF sentences divide by X number of items on top
        TFSentences[sentences[i]] = temp_add / words_no_stop_words_length;
    }

    return TFSentences;
}

function inverseDocumentFrequency(document) {
    // calculates the inverse document frequency of every sentence
    const words_without_stopwords = prettify(document);
    const unique_words_set = uniqueWords(words_without_stopwords);

    const sentences = document.split(".").map(item => item.trim());
    sentences[0] = sentences[0].substring(146);

    const lengthOfDocuments = sentences.length;
    // prettifys each sentence so it doesn't have stopwords

    const wordCountAll = countWords(words_without_stopwords);

    // counts words of each sentence
    // as each sentence is a document
    wordCountSentences = [];

    for (let i = 0; i <= lengthOfDocuments - 1; i++) {
        wordCountSentences.push(countWords(prettify(sentences[i])));
    }

    // calculate TF values of all documents
    let IDFVals = {};

    // how many times that word appears in all sentences (documents)
    wordCountSentencesLength = wordCountSentences.length;

    // for every unique word
    for (let i = 0; i <= unique_words_set.length - 1; i++) {
        let temp_add = 0;
        // count how many times unique word appears in all sentences
        for (let x = 0; x <= wordCountSentencesLength - 1; x++) {
            if (unique_words_set[i] in wordCountSentences[x]) {
                temp_add = + 1;
            }
        }
        IDFVals[unique_words_set[i]] = Math.log10(wordCountAll[unique_words_set[i]] / temp_add);
    }

    let IDFSentences = {};

    // for every sentence
    for (let i = 0; i <= lengthOfDocuments - 1; i++) {
        // for every word in that sentence
        let sentence_split_words = sentences[i].split(" ");
        // get the assiocated IDF values of each word
        // temp.add is the "IDF" value of a sentence, we need to divide it at the end
        let temp_add = 0.0;
        let words_no_stop_words_length = prettify(sentences[i]).length;

        for (let x = 0; x <= sentence_split_words.length - 1; x++) {
            // if the word is not a stopword, get the assiocated IDF value and add it to temp_add
            if (sentence_split_words[x].toLowerCase() in IDFVals) {
                // adds all the IDF values up
                temp_add = temp_add + IDFVals[sentence_split_words[x].toLowerCase()];
            } else {
                // nothing, since it's a stop word.
            }
        }
        IDFSentences[sentences[i]] = temp_add / words_no_stop_words_length;
    }

    return IDFSentences;
}

function TFIDF(documents) {
    // calculates TF*IDF
    const TFVals = termFrequency(documents);
    const IDFVals = inverseDocumentFrequency(documents);

    let TFidfDict = {};

    for (const [key, value] of Object.entries(TFVals)) {
        if (key in IDFVals) {
            TFidfDict[key] = TFVals[key] * IDFVals[key];
        }
    }

    let max = 0.0;
    let max2 = 0.0;
    let max3 = 0.0;
    let max_sentence = "";
    let max2Sent = "";
    let max3Sent = "";

    // finds the top 3 sentences in TFidfDict
    for (const [key, value] of Object.entries(TFidfDict)) {
        if (TFidfDict[key] > max) {
            max = TFidfDict[key];
            max_sentence = key;
        } else if (TFidfDict[key] > max2 && TFidfDict[key] < max) {
            max2 = TFidfDict[key];
            max2Sent = key;
        } else if (TFidfDict[key] > max3 && TFidfDict[key] < max2 && TFidfDict[key] < max) {
            max3 = TFidfDict[key];
            max3Sent = key;
        }
    }

    return [max_sentence, max2Sent, max3Sent];
}

module.exports = { stopwords, TFIDF };