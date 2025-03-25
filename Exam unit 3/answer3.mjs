// Function to decode a challenge by mapping numbers to letters in a given page text
export function decodeChallenge(numbers, pageText) {
    // Check if the pageText is provided; if not, throw an error
    if (!pageText) {
        throw new Error("pageText is undefined. Please provide the text of the page containing BOMBAST.");
    }

    // Split the cipher text into an array of numbers
    // Use a regular expression `\d+` to match sequences of digits
    // `match` returns an array of these matches, and `map` converts each match to an integer
    const numberArray = numbers.match(/\d+/g).map(num => parseInt(num, 10));

    // Decode the numbers into letters from the page text
    // For each number in the array:
    // - If the number is within the valid range (1 to pageText.length), map it to the character at that position
    // - Subtract 1 from the number because array indices are zero-based
    // - If the number is out of range, use '?' as a placeholder
    const decodedMessage = numberArray.map(num => {
        return (num > 0 && num <= pageText.length) ? pageText[num - 1] : '?'; // Handle out-of-range numbers
    }).join(''); // Join the resulting array of characters into a single string

    // Return the decoded message
    return decodedMessage;
}

// Function to encode a message into alchemical symbols
export function encodeToAlchemicalSymbols(message) { 
    // Define a mapping of uppercase letters to alchemical symbols
    const symbolMap = {
        'A': '☉', 'B': '☿', 'C': '☽', 'D': '♂', 'E': '♃',
        'F': '♄', 'G': '♁', 'H': '♆', 'I': '♇', 'J': '♈',
        'K': '♉', 'L': '♊', 'M': '♋', 'N': '♌', 'O': '♍',
        'P': '♎', 'Q': '♏', 'R': '♐', 'S': '♑', 'T': '♒',
        'U': '♓', 'V': '☽', 'W': '☉', 'X': '☿', 'Y': '☽',
        'Z': '♂',
    };

    // Convert the input message to uppercase to match the keys in the symbolMap
    // Split the message into an array of characters
    // Map each character to its corresponding symbol in the symbolMap
    // If a character is not found in the symbolMap, use '?' as a placeholder
    // Join the resulting array of symbols into a single string
    return message.toUpperCase().split('').map(letter => symbolMap[letter] || '?').join(''); //
}