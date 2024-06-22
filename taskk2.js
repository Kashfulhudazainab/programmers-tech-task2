let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turno=true; //playerx,playero

//draw condition
let click_count=0;
let win=false;


//2D ARRAY

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
[3,4,5],
[6,7,8]
];

const resetGame = () => {
    turno=true;
    enableBoxes();
msgContainer.classList.add("hide");
click_count=0;
win=false;
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was clickes!");
        if(turno){
            box.innerText="0";
            turno=false;
                }else{
                    box.innerText="X";
                    turno=true;
                }
        box.disabled=true;

        checkWinner();
    });
});

const disableBoxes = () =>{
for(let box of boxes){
    box.disabled=true;
}
};


const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    };

    const draw = () => {
        msg.innerHTML=`Match is draw!`;
            msgContainer.classList.remove("hide");
            disableBoxes();
    };

const showWinner = (winner) => {
    msg.innerHTML=` Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
for(let pattern of winPatterns)
    {  //check pattern from array

let pos1=boxes[pattern[0]].innerText;
let pos2=boxes[pattern[1]].innerText;
let pos3=boxes[pattern[2]].innerText;


if(pos1!=""&&pos2!=""&&pos3!=""){
    if(pos1==pos2&&pos2==pos3){
    //   console.log("winner is ",pos1);
      showWinner(pos1);
      break;
    win=true;
    return;
    }

}
        }

        click_count++;
      if(click_count==9&&!win){
            draw();
        }
};


newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);