const p1Btn=document.getElementById('p1Inc');
const reset=document.getElementById('reset');
const p2Btn=document.getElementById('p2Inc');
const p1Score=document.getElementById('p1Score');
const p2Score=document.getElementById('p2Score');
const slider=document.getElementById('winningScore');
const sliderVal=document.getElementById("sliderValue");
let p1=0;
let p2=0;
let winningScore=5,pValue=5;
let gameOver=false;
p1Btn.addEventListener('click',()=>{
    if(!gameOver)
        {
            p1+=1;
            if(p1===winningScore)
                {
                    gameOver=true;
                    p1Score.classList.add('Winner');
                    p2Score.classList.add('Loser');
                    console.log("hi");
                }
            p1Score.innerText=p1;
        }
})
p2Btn.addEventListener('click',()=>{
    if(!gameOver)
        {
            p2+=1;
            if(p2===winningScore)
                {
                    gameOver=true;
                    p2Score.classList.add('Winner');
                    p1Score.classList.add('Loser');
                }
            p2Score.innerText=p2;
        }
})
const resetFunction=()=>{
    p1Score.innerText=0;
    p2Score.innerText=0;
    p1=0;
    p2=0;
    gameOver=false;
    p2Score.classList.remove('Winner','Loser');
    p1Score.classList.remove('Loser','Winner');
    winningScore=5;
    sliderVal.innerText=winningScore;
}
reset.addEventListener('click',resetFunction)

slider.addEventListener('click',()=>{
    resetFunction();
    winningScore=Number(slider.value);
    sliderVal.innerText=winningScore;
})
