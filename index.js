let homescoreone = document.getElementById("Home1")
let homescoreEl1 = document.getElementById("score")
let score = 0

function incrementone() {
    score += 1
    homescoreEl1.textContent = score
}

let homescoretwo = document.getElementById("Home2")
let homescoreEl2 = document.getElementById("score")


function incrementtwo() {
    score += 2
    homescoreEl2.textContent = score
}

let homescorethree = document.getElementById("Home3")
let homescoreEl3 = document.getElementById("score")


function incrementthree() {
    score += 3
    homescoreEl3.textContent = score
}

let guestscoreone = document.getElementById("Guest1")
let guestscoreEl1 = document.getElementById("gscore")
let gscore = 0

function gincrementone() {
    gscore += 1
    guestscoreEl1.textContent = gscore
}

let guestscoretwo = document.getElementById("Guest2")
let guestscoreEl2 = document.getElementById("gscore")


function gincrementtwo() {
    gscore += 2
    guestscoreEl2.textContent = gscore
}

let guestscorethree = document.getElementById("Guest3")
let guestscoreEl3 = document.getElementById("gscore")


function gincrementthree() {
    gscore += 3
    guestscoreEl3.textContent = gscore
}