/*HOME*/
let homePts = 0;
let homeScore = document.getElementById("homepts");
let homeFoulPts = 0;
let homeFoulScore = document.getElementById("hmfoulpts");

function homeOne(){
homePts += 1;
homeScore.textContent = homePts
}
function homeTwo(){
homePts +=2;
homeScore.textContent = homePts
}
function homeThree(){
homePts += 3;
homeScore.textContent = homePts
}
function homeRes(){
homePts = 0
homeScore.textContent = 0
}
function homeUn(){
homePts -= 1;
homeScore.textContent = homePts
}

function hmBtnPts(){
homeFoulPts -= 1;
homeFoulScore.textContent = homeFoulPts
}
function hmBtnUndo(){
homeFoulPts += 1
homeFoulScore.textContent = homeFoulPts
}

/*PERIOD*/
let pdPts = 0;
let pdScore = document.getElementById("pdpts");

function btnRight(){
pdPts += 1;
pdScore.textContent = "00" + pdPts
}
function btnLeft(){
pdPts -= 1
pdScore.textContent = "00" + pdPts
}

/*GUEST*/
let guestPts = 0;
let guestScore = document.getElementById("gstpts");
let guestFoulPts = 0;
let guestFoulScore = document.getElementById("gstfoulpts");

function gstOne(){
guestPts += 1;
guestScore.textContent = guestPts
}
function gstTwo(){
guestPts += 2;
guestScore.textContent = guestPts
}
function gstThree(){
guestPts += 3;
guestScore.textContent = guestPts
}
function gstRes(){
guestPts = 0
guestScore.textContent = 0
}
function gstUn(){
guestPts -= 1;
guestScore.textContent = guestPts
} 

function gstBtnPts(){
guestFoulPts -= 1;
guestFoulScore.textContent = guestFoulPts
}
function gstBtnUndo(){
guestFoulPts += 1
guestFoulScore.textContent = guestFoulPts
} 
