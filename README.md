# Exam Unit 3
## Table of Contents
- [Challenge One](#challenge-one)
- [Challenge Two](#challenge-two)
- [Challenge Three](#challenge-three)
- [Conclusion](#conclusion)|

## API Challenge

### Start up:
When I started the code with a simple API request from the server using the "PLAYER_NAME," the response I received was:  
`{ error: 'Missing player name' }`.  

To fix this issue, I had to use the full URL with the player name included:  
`https://alchemy-kd0l.onrender.com/start/?player=Sophonwatb@uia.no`.  

#### Issue:
The problem was caused by a mistake in the query parameter. I had used `student` instead of `player`.  
Here the incorrect and corrected code:  

```javascript
// Incorrect:
const response = await fetch(`${ALCHEMY_API}/start?student=${PLAYER_NAME}`);

// Correct:
const response = await fetch(`${ALCHEMY_API}/start?player=${PLAYER_NAME}`);
```

#### answer function reusable:
I created a reusable function for answering challenges. The function only required changing the import part for each challenge. Here’s the reusable code:

```javascript
if (data.challenge) {
    const decodedAnswer = decodeChallenge(data.challenge);
    console.log("Decoded Answer to Send:", decodedAnswer);
    const serverResponse = await answer(decodedAnswer, PLAYER_NAME);
    console.log("Server Response:", serverResponse);
    if (serverResponse.message === 'Incorrect answer. Try again!') {
        await getClue();
    }
}
```

#### Challenge One:
The first challenge I received was:  
`☉☿☽♂☉`.

Initially, I searched for the symbols on Google and found a [Wikipedia page on alchemical symbols](https://en.wikipedia.org/wiki/Alchemical_symbol). After some trial and error, I realized the correct mapping was:

```javascript
const symbolMap = {
    '☉': 'Gold',
    '☿': 'Quicksilver',
    '☽': 'Silver',
    '♂': 'Iron',
};

const decodedMessage = challenge
    .split('')
    .map(symbol => symbolMap[symbol] || '?')
    .join(',');
```

However, the answer required the symbols to be joined with commas (`,`) to be accepted. Copilot suggested using `.join(',')`, which solved the issue:

```javascript
.split('')
.map(symbol => symbolMap[symbol] || '?')
.join(',');
```

---

### Challenge Two:
This challenge involved decoding a hidden message from a poem. Initially, I didn’t understand the meaning behind the text. After examining the poem for a while, I noticed the uppercase letters formed a hidden message (an acrostic).

#### Solution:
The function `decodeChallenge` extracts uppercase letters from the poem. Here’s how it works:

```javascript
const poemMatch = challenge.match(/“(.*?)”/); // Extract text inside quotes
const poem = poemMatch ? poemMatch[1] : ''; // Get the poem or an empty string
const uppercaseLetters = poem.match(/[A-Z]/g).join(''); // Extract and join uppercase letters
console.log("Uppercase Letters:", uppercaseLetters); // Debugging
return uppercaseLetters; // Return the hidden message
```

#### Example:
If the challenge text is:  
`Find the secret in “Look Up To The Stars”`,  

The function extracts:  
- Text inside quotes: `"Look Up To The Stars"`.  
- Uppercase letters: `"LUTTS"`.  

The hidden message is: `"LUTTS"`.  

This function was simple to understand but required practice to implement effectively.

---

### Challenge Three:
This challenge was based on a book cipher. The instructions were:

1. The cipher is based on the book *"Chirurgische Bücher und Schrifften."*
2. Locate the page containing the word "BOMBAST."
3. Use the following rules to decode the cipher:
   - The first number corresponds to the page number.
   - The second number corresponds to the line number on that page.
   - The third number corresponds to the letter in that line.

#### Example:
For the cipher `17 20 9`:  
- Page 17  
- Line 20  
- 9th letter in that line  

#### My Attempt:
I found the word "BOMBAST" on the first page of the book ([LINK](https://example.com)). However, decoding the cipher was challenging because the lines and letters didn’t match the expected format.

Here’s an example of the cipher text I encountered:  
`   '\n' +
    '\n' +
    '\n' +
    '17 20   20 9 17 24 4 34   24 127 127 1 8 8   17 20   17 10 1   34 1 46 17   48 24 45 12 17 ,   4 34 9 45 17   17 10 1   2 20 23 38 45 12 24   2 20 23   17 10 1   17 10 1   2 20 45 23 17 10   1 12 1 38 1 34 17 ;   127 20 38 29 4 34 1   38 1 23 127 45 23 108 ,   127 20 9 9 1 23   24 34 131   8 45 12 2 45 23   20 48 1 23   10 1 24 17 ,   24 131 131   8 24 12 17   24 34 131   270 24 17 1 23 ,   4 34 2 45 8 1   5 20 12 131   17 10 23 20 45 5 10   24 4 23 '`  

I tried to decode it using the rules but couldn’t make sense of the results.

#### Resources:
I referred to the following resources to understand book ciphers:  
- [Wikipedia: Book Cipher](https://en.wikipedia.org/wiki/Book_cipher)  
- [Instructables: Book Ciphers](https://www.instructables.com/Book-Ciphers/)  
- [YouTube: Book Cipher - 1 Minute Instructional](https://www.youtube.com/watch?v=example)  

Despite these resources, I struggled to decode the cipher. The process of finding the correct page, line, and letter was too complex.

#### Final Clue:
The final solution required encoding the formula into alchemical symbols. However, I couldn’t fully decode the cipher to proceed with this step.

---

### Conclusion:
The challenges became progressively harder. While I managed to solve the first two challenges with Copilot’s help, the third challenge was beyond my understanding. I learned a lot about decoding techniques and how to use Copilot effectively, but I need more practice with book ciphers to improve.