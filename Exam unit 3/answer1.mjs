// Function to decode a challenge by mapping alchemical symbols to their corresponding names
export function decodeChallenge(challenge) {
    // Define a mapping of alchemical symbols to their corresponding names
    const symbolMap = {
        '☉': 'Gold',  // Sun symbol represents Gold
        '☿': 'Quicksilver', // Mercury symbol represents Quicksilver
        '☽': 'Silver', // Moon symbol represents Silver
        '♂': 'Iron',  // Mars symbol represents Iron
    };

    // Extract the encoded message from the challenge text
    // Use a regular expression to match text inside quotes (e.g., “encodedMessage”)
    const codeMatch = challenge.match(/“(.*?)”/); // Match the first occurrence of text inside quotes
    const encodedMessage = codeMatch ? codeMatch[1] : ''; // If a match is found, extract the text; otherwise, use an empty string

    // Decode the encoded message into a plain sequence of names
    const decodedMessage = encodedMessage
        .split('') // Split the encoded message into an array of individual symbols
        .map(symbol => symbolMap[symbol] || '?') // Map each symbol to its corresponding name in the symbolMap
                                                // If a symbol is not found in the map, use '?' as a placeholder
        .join(','); // Join the resulting array of names into a single string, separated by commas

    // Log the encoded message for debugging purposes
    console.log("Encoded Message:", encodedMessage); // Display the extracted encoded message in the console

    // Log the decoded message for debugging purposes
    console.log("Decoded Message:", decodedMessage); // Display the decoded message in the console

    // Return the decoded message, replacing any unknown symbols with '?'
    return decodedMessage;
}