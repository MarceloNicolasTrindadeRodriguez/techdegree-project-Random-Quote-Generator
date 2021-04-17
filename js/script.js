/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/
/**
 * This is a variable that stores 5 quotes, the first one with a citation and a year :)
 */

let quotes = [
  {
    quote: "Go big or go home.",
    source: "Paul Walker",
    citation: "Fast and Furious",
    year: 2015,
  },
  {
    quote: "No one is more hated than the one who speaks the truth.",
    source: "Plato",
  },
  {
    quote: "The only true wisdome is knowing we know nothing.",
    source: "Socrates",
  },
  {
    quote: "The true sign of intelligence is imagination.",
    source: "Albert Einstein",
  },
  { quote: "Genius is eternal patience.", source: "Michelangelo" },
];

/***
 * `getRandomQuote` function
 ***/
/**
 * This function is for selecting a random quote from the array of quotes up top
 */
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomQuote = quotes[randomNumber];

  return randomQuote;
}

/***
 * `printQuote` function
 ***/
/**
 * This function prints out the random quote to the webpage.
 */
function printQuote() {
  let quoteObject = getRandomQuote();
  let textDisplay = `<p class="quotes">${quoteObject.quote}</p><p class="source">${quoteObject.source}`;
  if (quoteObject.citation) {
    textDisplay =
      textDisplay + `<span class="citation">${quoteObject.citation}</span>`;
  }
  if (quoteObject.year) {
    textDisplay = textDisplay + `<span class="year">${quoteObject.year}</span>`;
  }
  textDisplay = textDisplay + `</p>`;
  document.getElementById("quote-box").innerHTML = textDisplay;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
