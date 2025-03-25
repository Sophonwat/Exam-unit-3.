// Function to decode a challenge by extracting uppercase letters from a poem in the challenge text
export function decodeChallenge(challenge) {
    // Extract the poem from the challenge text
    // Use a regular expression to match text inside quotes (e.g., “poem”)
    const poemMatch = challenge.match(/“(.*?)”/); // Match the first occurrence of text inside quotes
    const poem = poemMatch ? poemMatch[1] : ''; // If a match is found, extract the text; otherwise, use an empty string

    // Extract all uppercase letters from the poem
    // Use a regular expression `[A-Z]` to match uppercase letters
    // `match` returns an array of matches, and `join('')` combines them into a single string
    const uppercaseLetters = poem.match(/[A-Z]/g).join(''); // Join the uppercase letters into a single string

    // Log the extracted uppercase letters for debugging purposes
    console.log("Uppercase Letters:", uppercaseLetters); // Display the hidden message in the console

    // Return the hidden message (uppercase letters), or an empty string if no letters are found
    return uppercaseLetters;
}