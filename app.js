const startBtn = document.querySelector('.start')
const screen = document.querySelectorAll('.screen')
const timelist = document.querySelector('#timelist')
const board = document.querySelector('#board')
const score = document.querySelector('.score')
let countdown = document.querySelector('#time')
let time = 0
let points = 0
let intervalTimer
let chosenTime



startBtn.addEventListener('click', (e) => {
    e.preventDefault()
    screen[0].classList.add('up')
})

timelist.addEventListener('click', e => {
    if (e.target.classList.contains('time-btn')) {
    time = e.target.getAttribute('time')
    chosenTime = time
    screen[1].classList.add('up')
    score.innerHTML = `Score: <span class="primary">${points = 0}</span>`
    document.querySelector('.text').style.opacity = 1 // appear orange text
    countdown.parentNode.style.opacity = 1 // appear time left text
    go()
    }
})

board.addEventListener('click', (event) => {
    if(event.target.classList.contains('circle')) {
    points++
    event.target.remove()
    randomCircle()
    score.innerHTML = `Score: <span class="primary">${points}</span>`
    }
    else {
        if (time !== 0) {
        points--
        score.innerHTML = `Score: <span class="primary">${points}</span>`
    }
    }
})

function timer () { 
   return intervalTimer = setInterval(dectime, 1000)
}

function go () {
    countdown.innerHTML = time
    document.querySelector('.text').innerHTML = 'If you miss you lose a point'
    timer()  // countdown
    randomCircle()
}

function dectime() {
    if(time === 0) {
        clearInterval(intervalTimer) // stop timer
        finish()
    }   else {
        let current = --time
        if (current < 10) { 
            current = `0${current}`
        }
        countdown.innerHTML = current
    }
}


function finish() {
    countdown.parentNode.style.opacity = 1
    document.querySelector('.text').innerHTML = `<button onclick='reset()' class="time-btn">Restart</button> <button class="time-btn" onclick='goup()'>Change Time</button>`
    
    if (points < 0 && points > -49) {
        board.innerHTML = '<h3>How does that even happen?</h3>' 
    }else if (points < -50) {
        board.innerHTML = '<h3>ARE YOU FUCKING INSANE?</h3>'
    }else {
        board.innerHTML = '<h3>Finished!</h3>' }
      
}

function randomCircle () {
    const circle = document.createElement('div')
    const size = randomNum(15, 45)
    const {width, height} = board.getBoundingClientRect()
    const x = randomNum(1.5, width - size)
    const y = randomNum(1.5, height - size)

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${x}px`
    circle.style.left = `${y}px`
    board.append(circle)
}

function randomNum (lowest, highest) {
    return Math.round(Math.random() * (highest - lowest) + lowest)
}

function goup() {
    screen[1].classList.remove('up')
    board.innerHTML = ''
}

function reset() {
    score.innerHTML = `Score: <span class="primary">${points = 0}</span>`
    board.innerHTML = ''    
    countdown.innerHTML = chosenTime
    time = chosenTime
    document.querySelector('.text').innerHTML = 'If you miss you lose a point'
    timer()  // countdown
    randomCircle()
}