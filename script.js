 
var button = document.getElementById("show-button")

button.addEventListener('click', function(){
    
 

    var Player = document.getElementById("player")
var Score = document.getElementById("score")
var Timer = document.getElementById("timer")
var RealScore = 0
var RealTimer = 30
var IntervalCounter = 300
var TimeLineSound = new Audio()
TimeLineSound.src="timeline.mp3"

var TouchCubeSound = new Audio()
TouchCubeSound.src = "point.wav"


document.body.addEventListener('click', function(){
    TimeLineSound.play()
})



var interval = setInterval(StartTimer, IntervalCounter)

Player.addEventListener('click', function(){

  
    if(RealTimer <= 0){
        return
    }

    TouchCubeSound.play()
    RealScore++
    RealTimer += 2
    Score.textContent ='ქულა ' + RealScore
    var RandomPosX = Math.floor(Math.random()*500)
    var RandomPosY = Math.floor(Math.random()*500)
    var RandomScale = Math.floor(Math.random()*100)
  
     if (RandomScale < 10) {
         RandomScale = 20
         Player.style.width = RandomScale + 'px'
         Player.style.height = RandomScale + 'px'
     }


    Player.style.marginLeft = RandomPosX + 'px'
    Player.style.marginTop = RandomPosY + 'px'
    Player.style.width = RandomScale + 'px'
    Player.style.height = RandomScale + 'px'


})

function StartTimer(){
    RealTimer--;
    Timer.textContent = "დრო" + " " +RealTimer
    if(RealTimer <= 0){
        EndGame()
    }

}


function StopTimer(){

}

function EndGame(){
    Swal.fire('წააგე სამწუხაროდ :((((( ' + RealScore + " ქულა გაქვს")
    clearInterval(interval)
    
}

}
)

const refreshButton = document.querySelector('.refresh-button');

const refreshPage = () => {
  location.reload();
}

refreshButton.addEventListener('click', refreshPage)



