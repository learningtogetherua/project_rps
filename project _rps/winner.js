const userImg = document.querySelector('.you-img')
const compImg = document.querySelector('.comp-img')
const youimgWinner = document.querySelector('.yuo-img-bg')
const compImgWinner = document.querySelector('.comp-img-bg')

const choseImgMap = {
    "0" : {image: '0.png', alt: 'Paper'},
    "1" : {image: '1.png', alt: 'Scissors'},
    "2" : {image: '2.png', alt: 'Rock'},
}

const params = new URLSearchParams(window.location.search)

if(!params.has('user')||!params.has('comp')) {
    window.location.href = `./index.html`
}

let user = params.get('user')
let comp = params.get('comp')

userImg.src = `./image/${choseImgMap[user].image}`
userImg.alt = choseImgMap[user].alt

compImg.src = `./image/${choseImgMap[comp].image}`
compImg.alt = choseImgMap[comp].alt

document.querySelector('.play-again-btn').addEventListener(('click'), ()=>{
    window.location.href = `./index.html`
})

function checkWin () {
    let winner = ""
    if( user === comp) {
        winner = 'tie'
    } else if (user === '0' && comp === '1') {
        winner = 'comp'
    }else if (user === '0' && comp === '2') {
        winner = 'user'
    }else if (user === '1' && comp === '0') {
        winner = 'user'
    }else if (user === '1' && comp === '2') {
        winner = 'comp'
    }else if (user === '2' && comp === '0') {
        winner = 'comp'
    }else if (user === '2' && comp === '1') {
        winner = 'user'
    }
    if (winner === 'tie') {
        document.querySelector('.play-again-text').innerText = "TIE"
        
    } else if (winner === 'user'){
        document.querySelector('.play-again-text').innerText = "YOU WIN"
        youimgWinner.src =`./image/Group 14.png`
        
    }else if(winner === 'comp'){
        document.querySelector('.play-again-text').innerText = "YOU LOST"
        compImgWinner.src =`./image/Group 14.png`        
    }

};

checkWin ()