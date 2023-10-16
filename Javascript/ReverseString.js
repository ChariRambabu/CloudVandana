function reverseWord(word) {
    let reversedWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }
    return reversedWord;
}

function reverseWords(sentence) {
    let words = [];
    let currentWord = '';
    
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === ' ') {
            words.push(currentWord);
            currentWord = '';
        } else {
            currentWord += sentence[i];
        }
    }
    
    if (currentWord !== '') {
        words.push(currentWord);
    }
    
    let reversedSentence = words.map(reverseWord).join(' ');
    return reversedSentence;
}

const inputSentence = "Good Morning";
const reversedSentence = reverseWords(inputSentence);

console.log(reversedSentence);
