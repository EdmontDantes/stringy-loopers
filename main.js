// # Setup
// For this exercise, we don't need to run npm test. We will only use the command node main.js in the terminal to see the results of our functions.


// 0. Once again, write a function that accepts a number and prints out a banner with the words "Challenge" and the number in it. Use string interpolation if you want! **Call it before calling each function. Don't call it again if you need to print twice to test a function.**
function challengeBanner(num) {
    console.log(`##### Challenge ${num} #####`);
}
// 1. Write a function that prints out only the vowels from a given string. Do not use regular expressions ("regex"). Now call it with "Regular expressions are for term 2.". You should see an "e" printed, followed by a "u", followed by an "a", and so on.
challengeBanner(1);
function printsOutOnlyVowels (str) {
    for (i = 0; i <= str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' 
        || str[i] === 'i' || str[i] === 'o' ||
            str[i] === 'u' || str[i] === 'A' ||
            str[i] === 'E' || str[i] === 'I' ||
            str[i] === 'O' || str[i] === 'U')
                console.log(str[i]);
    }
}
printsOutOnlyVowels ('Regular expressions are for term 2.');
// 2. Write a function that prints out the first 5 vowels from the given string. Continue to not use regexes. Now call it with "Regular expressions are for term 2.". You should see an "e" printed, followed by a "u", followed by an "a", followed by an "e", followed by another "e", and then nothing else. Now call it again with "Hello!" You should see only an "e" and an "o" print.
challengeBanner(2);
        function printsOutfirstFivevowels(str) {
            const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
            let letters = str.split ('');
            let printVowels = [];
            for (let i in letters) {
                if (vowels.includes(letters[i])){
                    printVowels.push(letters[i]);
                }
            }
            let firstFivevowels = printVowels.slice(0,5)
            console.log(firstFivevowels.join('\n'));
        }
        printsOutfirstFivevowels('Regular expressions are for term 2.');


// printsOutfirstFivevowels('Hello');
challengeBanner(3);
// 3. Write a function that prints out every third character, _without_ examining every character. In other words, you may _not_ increment your index by one and decide whether to print based on the result of a modulus operation on that index. (A standard solution for this.). Now call it with "I am the alfalfa and the omelette." You should see "a", followed by "t", followed by a space, and so on. An "e" should be the last thing printed, with no `undefined` values showing up.
function printsEveryThirdCharV1 (str) {
    let letters = str.split ('');
    let i = 2;
    let incrementIbyThree = 3;
    let intermediateVar = 1;
    lettersIncremented = '';
    console.log(letters[i])
    // while (letters.length >= intermediateVar) {
    //     intermediateVar ++;
    while (intermediateVar <= letters.length) {
    lettersIncremented = (letters[i + (intermediateVar * incrementIbyThree)]);
            console.log(lettersIncremented);
            intermediateVar = intermediateVar + 1;
    }
    
    }


// printsEveryThirdCharV1('I am the alfalfa and the omelette.')

function printsEveryThirdCharV2 (str) {
    let intermediateNum = 2
    while (intermediateNum<=str.length) {
        console.log(str[intermediateNum]);
        intermediateNum = intermediateNum + 3;
    }
}

printsEveryThirdCharV2('I am the alfalfa and the omelette.')
// 4. Write a function that prints out the first four characters after the given index in the given string, or, if there are fewer characters remaining from, prints only the remaining ones. Now call it with 'Oh hi, I didn't see you there. Welcome.' and `4` as your parameters. You should see 'i', followed by ',', followed by a space, followed by an 'I'. Now call it again with 'Oh hi, I didn't see you there. Welcome.' and `38` as your parameters. You should 'm', 'e', and '.' printed, and no fourth printing.
challengeBanner (4)

function printsOutFirstFourChars (str, num) {
    let intermediateVar = 0;
    for(i=num; i < str.length; i++) {
        if(intermediateVar <= 4) {
            console.log(str[i]);
            intermediateVar++;
        }
    }
}
printsOutFirstFourChars('Oh hi, I didn\'t see you there. Welcome.', 4);
printsOutFirstFourChars('Oh hi, I didn\'t see you there. Welcome.', 36);

// 5. Write a function that prints out the index of every `u` it finds in the given string. Do not use `indexOf`. Now call it with `'You picked the wrong house, bub.'`. You should see `2`, `23`, and `29` printed out. 
challengeBanner(5);
function printsEveryUitFinds (str) {
    for (i=0; i < str.length; i++) {
        if (str[i] === 'u' || str[i] === 'U')
        console.log(i);
    }
}

printsEveryUitFinds ('You picked the wrong house, bub.');
//  6. Write a function that prints out the first index of the letter `u` in the given string. Do not use `indexOf`. Now call it with `'You picked the wrong house, bub.'` You should see the number `2` printed, and only that.
challengeBanner(6);
function printsOnlyFirstU (str) {
    let firstU = 1;
    for (i = 0; i < str.length; i++) {
        if (str[i] === 'u' && firstU === 1 ||
        str[i] === 'U' && firstU === 1) {
            console.log(i);
            firstU++;
        }
    }
}
printsOnlyFirstU ('You picked the wrong house, bub.')
// 7. Write a function that prints out the first index of the letter `u` in the given string, with a `-1` printed if it doesn't find it. Do not use `indexOf`. Now call it with `'You picked the wrong house, bub.'` You should see the number `2` printed, and only that. Now call it with `"I'm Canadian."` You should see `-1` print out.
challengeBanner(7);

function printsIndexOfUOrminusOne (str) {
    let firstU = 1;
    for (i = 0; i < str.length; i++) {
        if (str[i] === 'u' && firstU === 1 ||
        str[i] === 'U' && firstU === 1) {
            console.log(i);
            firstU++;
        }
    }
    console.log(-1);
}

printsIndexOfUOrminusOne ('You picked the wrong house, bub.');
printsIndexOfUOrminusOne ('I\'m Canadian.');