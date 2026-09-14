import sheet from '/main.css' with { type: 'css' }
document.adoptedStyleSheets = [sheet]

import * as Eldrow from "/eldrow.js"

const word = "xxllx"
const accuracy = [0, 0, 2, 2, 0]

new Eldrow.Eldrow(word, accuracy)