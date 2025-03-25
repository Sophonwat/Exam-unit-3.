import fetch from 'node-fetch';
import { decodeChallenge } from './answer3.mjs'; // Import the decodeChallenge function

const ALCHEMY_API = "https://alchemy-kd0l.onrender.com";
const PLAYER_NAME = "Sophonwatb@uia.no";

async function start() {
    const response = await fetch(`${ALCHEMY_API}/start?player=${PLAYER_NAME}`);
    const data = await response.json();
    console.log("Start Response:", data);

    if (data.challenge) {
        // Replace this with the actual text from the page containing BOMBAST
        const pageText = "difficultates"; 

        // Use the decodeChallenge function
        const decodedAnswer = decodeChallenge(data.challenge, pageText);
        // Log the decoded answer before sending it to the server
        console.log("Decoded Answer to Send:", decodedAnswer);
        const serverResponse = await answer(decodedAnswer, PLAYER_NAME);
        console.log("Server Response:", serverResponse);
        // Fetch and display the clue if the answer is incorrect
        if (serverResponse.message === 'Incorrect answer. Try again!') {
            await getClue();
        }
    }
}

export async function answer(answer, player) { // Export the answer function, which sends the answer to the server from the imported module
    const response = await fetch(`${ALCHEMY_API}/answer`, { // Send a POST request to the server with the answer and player name
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answer, player }), // Send the answer and player name in the request body
    });
    return await response.json(); // Return the JSON response from the server
}

async function getClue() { // Function to fetch the clue from the server, exported for testing
    const clueUrl = `${ALCHEMY_API}/clue?player=${PLAYER_NAME}`;
    console.log(`Clue URL: ${clueUrl}`);
}

start();