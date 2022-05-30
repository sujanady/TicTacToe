console.log("Welcome to Tic Tac Toe");
let music = new Audio("click.mp3");
let audio_turn = new Audio("turn.mp3");
let gameover = new Audio("win.mp3");
let turn = "X";
let c="";
let finish = false;

const change = () => {
    if (turn == "X")
        return turn="0";
    else if(turn == "0")
    return turn = "X";

}

const win = () => {
    let boxtexts = document.getElementsByClassName('boxtext')
    let wins =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")){
           document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " won \nCangratulations" 
            finish = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="180px" }
    })
    


}


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText == '') {
            boxtext.innerText = turn;
            turn = change();
           
            win();
            if(!finish){ document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
           

        }

    })
})