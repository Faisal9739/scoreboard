let home = 0
let guest = 0
let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
document.getElementById("home-el").textContent = home
document.getElementById("guest-el").textContent = guest



function home1(){
    home ++
    homeEl.textContent = home
}
function home2(){
    home += 2
    homeEl.textContent = home
}
function home3(){
    home += 3
    homeEl.textContent = home
}
function guest1(){
    guest ++
    guestEl.textContent = guest
}
function guest2(){
    guest +=2
    guestEl.textContent = guest
}
function guest3(){
    guest +=3
    guestEl.textContent = guest
}
function reset(){
    home = 0
    homeEl.textContent = home
    guest = 0
    guestEl.textContent = guest
    
}    