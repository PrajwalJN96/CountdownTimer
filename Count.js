let strBtn = document.getElementById("start")
let stpBtn = document.getElementById("stop")
let rstBtn = document.getElementById("reset")
let hrsele = document.getElementById("hrs")
let minsele = document.getElementById("mins")
let secsele = document.getElementById("secs")
let countele = document.getElementById("count")
let t1 = document.getElementById("t1")
let t2 = document.getElementById("t2")
let t3 = document.getElementById("t3")
let stylesheet = document.getElementById("style")
let timerele =  document.getElementById("timer") 
let audio = new Audio('./clickSound/mouseClick.mp3')

let hrs = 0;
let mins = 0;
let secs = 0;
let count = 0;
let timer = false;

function stopWatch(){
    if(timer){

        if(count == 100){
            secs ++;
            count = 0;
        }

        if(secs == 60){
            mins ++;
            secs = 0;
        }

        if( mins == 60){
            hrs ++;
            mins = 0;
        }
        let strCount =count;
        let strMins = mins;
        let strSecs = secs;
        let strHrs = hrs;
        
        
        if(count < 10){
            strCount = "0"+count;
        }
        if(secs < 10){
            strSecs = "0"+secs;
        }
        if(mins < 10){
            strMins = "0"+mins;
        }
        if(hrs < 10){
            strHrs = "0"+hrs;
        }
        hrsele.innerText = strHrs;
        minsele.innerText = strMins;
        secsele.innerText = strSecs;
        countele.innerText = strCount;

        count++;
        setTimeout(stopWatch,10)
    }
}

strBtn.addEventListener("click",()=>{
    audio.play();
    timer = true;
    strBtn.classList.add("btnchng");
    stpBtn.classList.remove("btnchng");
    document.body.classList.add("bodychng")
    timerele.classList.add("bodychng")
    
    stopWatch();
})

stpBtn.addEventListener("click",()=>{
    audio.play();
   if(timer === true){
    strBtn.classList.remove("btnchng");
    stpBtn.classList.add("btnchng");
    timer = false;
   }
})

rstBtn.addEventListener("click",()=>{
    audio.play();
    document.body.classList.remove("bodychng")
    strBtn.classList.remove("btnchng");
    stpBtn.classList.remove("btnchng");
    timer = false;

    hrs = 0;
    mins = 0;
    secs = 0;
    count = 0;

    countele.innerText = "00"
    secsele.innerText = "00"
    minsele.innerText = "00"
    hrsele.innerText = "00"
})

t1.addEventListener("click",()=>{
    console.log("t1")
    stylesheet.setAttribute('href', 'count1.css');
})
t2.addEventListener("click",()=>{
    console.log("t2")
    stylesheet.setAttribute('href', 'count2.css');
})
t3.addEventListener("click",()=>{
    console.log("t3")
    stylesheet.setAttribute('href', 'count3.css');
  })
