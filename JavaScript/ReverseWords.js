//  1). Take a sentence as an input and reverse every word in that sentence.


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function reverseWords(input) {
    const words = input.split(/\s+/);
    let reversedSentence = '';

    for (const word of words) {
        const reversedWord = word.split('').reverse().join('');
        reversedSentence += reversedWord + ' ';
    }

    return reversedSentence.trim();
}

rl.question('Enter a sentence: ', (input) => {
    const reversedSentence = reverseWords(input);
    console.log('Reversed Sentence:', reversedSentence);
    rl.close();
});
