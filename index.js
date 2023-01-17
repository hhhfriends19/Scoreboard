let home = document.getElementById("home-Score")
let guest = document.getElementById("guest-Score")
let homeS = 0
let guestS = 0
let addHome1 = 1
let addHome2 = 2
let addHome3 = 3
let addGuest1 = 1
let addGuest2 = 2
let addGuest3 = 3

function addH1() {
    homeS += addHome1
    home.textContent = homeS
}

function addH2() {
    homeS += addHome2
    home.textContent = homeS
}

function addH3() {
    homeS += addHome3
    home.textContent = homeS
}

function addG1() {
    guestS += addGuest1
    guest.textContent = guestS
}

function addG2() {
    guestS += addGuest2
    guest.textContent = guestS
}

function addG3() {
    guestS += addGuest3
    guest.textContent = guestS
}

function reset() {
    homeS = 0;
    guestS = 0;
    home.textContent = homeS;
    guest.textContent = guestS;
}
