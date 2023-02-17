const btnA = document.querySelector(".btn-1").addEventListener("click", playSongA)
const btnB = document.querySelector(".btn-2").addEventListener("click", playSongB)
const btnC = document.querySelector(".btn-3").addEventListener("click", playSongC)
const btnD = document.querySelector(".btn-4").addEventListener("click", playSongD)
const btnE = document.querySelector(".btn-5").addEventListener("click", playSongE)
const btnF = document.querySelector(".btn-6").addEventListener("click", playSongF)
const btnG = document.querySelector(".btn-7").addEventListener("click", playSongG)
const btnH = document.querySelector(".btn-8").addEventListener("click", playSongH)
const btnI = document.querySelector(".btn-9").addEventListener("click", playSongI)
const btnJ = document.querySelector(".btn-10").addEventListener("click", playSongJ)


const songA = new Audio("./img/song1.mp3")
const songB = new Audio("./img/song2.mp3")
const songC = new Audio("./img/song3.mp3")
const songD = new Audio("./img/song4.mp3")
const songE = new Audio("./img/song5.mp3")
const songF = new Audio("./img/song6.mp3")
const songG = new Audio("./img/song7.mp3")
const songH = new Audio("./img/song8.mp3")
const songI = new Audio("./img/song9.mp3")
const songJ = new Audio("./img/song10.mp3")

function playSongA() {
    songB.pause();
    songC.pause();
    songD.pause();
    songE.pause();
    songF.pause();
    songG.pause();
    songH.pause();
    songI.pause();
    songJ.pause();
    songA.play();
}
function playSongB() {
    songA.pause();
    songC.pause();
    songD.pause();
    songE.pause();
    songF.pause();
    songG.pause();
    songH.pause();
    songI.pause();
    songJ.pause();
    songB.play();
}
function playSongC() {
    songA.pause();
    songB.pause();
    songD.pause();
    songE.pause();
    songF.pause();
    songG.pause();
    songH.pause();
    songI.pause();
    songJ.pause();
    songC.play();
}
function playSongD() {
    songA.pause();
    songB.pause();
    songC.pause();
    songE.pause();
    songF.pause();
    songG.pause();
    songH.pause();
    songI.pause();
    songJ.pause();
    songD.play();
}
function playSongE() {
    songA.pause();
    songB.pause();
    songC.pause();
    songD.pause();
    songF.pause();
    songG.pause();
    songH.pause();
    songI.pause();
    songJ.pause();
    songE.play();
}
function playSongF() {
    songA.pause();
    songB.pause();
    songC.pause();
    songD.pause();
    songE.pause();
    songG.pause();
    songH.pause();
    songI.pause();
    songJ.pause();
    songF.play();
}
function playSongG() {
    songA.pause();
    songB.pause();
    songC.pause();
    songD.pause();
    songE.pause();
    songF.pause();
    songH.pause();
    songI.pause();
    songJ.pause();
    songG.play();
}
function playSongH() {
    songA.pause();
    songB.pause();
    songC.pause();
    songD.pause();
    songE.pause();
    songF.pause();
    songG.pause();
    songI.pause();
    songJ.pause();
    songH.play();
}
function playSongI() {
    songA.pause();
    songB.pause();
    songC.pause();
    songD.pause();
    songE.pause();
    songF.pause();
    songG.pause();
    songH.pause();
    songJ.pause();
    songI.play();
}
function playSongJ() {
    songA.pause();
    songB.pause();
    songC.pause();
    songD.pause();
    songE.pause();
    songF.pause();
    songG.pause();
    songH.pause();
    songI.pause();
    songJ.play(); }

// btnA.addEventListener("click" , playSong )