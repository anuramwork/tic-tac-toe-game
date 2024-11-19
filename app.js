let resetGame = document.querySelector("#reset");
let newGame = document.querySelector("#newGame");
let boxes = document.querySelectorAll(".box")

let turn0 =true;
let winner;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
] ;

console.log(resetGame);
console.log(newGame);
console.log(boxes);


const resetGameFn = ()=> {
    for( let nodes of boxes){
        // console.log(nodes);
        nodes.innerText = "";
        turn0 =true;

    }

} ;








for (let box of boxes){
    box.addEventListener("click",()=>{
        if(turn0 === true){
            box.innerText = 'O';
            turn0 = false;
        }
        else{
            box.innerText = 'X';
            turn0 = true;
        }
        // box.disabled = true;
        console.log("box was clicked");
        
        winner = checkWinner();
        if (winner !== undefined){
            setTimeout(() => {
                alert(`Winner is ${winner}"`);
                resetGameFn();
            }, 500); // 500 milliseconds = 0.5 seconds
            
            
        }

});
}


const checkWinner = () => {
    for(let pattern of winPatterns){
        console.log(pattern[0],pattern[1],pattern[2]);
        let valat0 = boxes[pattern[0]].innerText;
        let valat1 = boxes[pattern[1]].innerText;
        let valat2 = boxes[pattern[2]].innerText;
        console.log(valat0,valat1,valat2);
        if(valat0 !== '' || valat1 !== '' || valat2 !== ''){
            if(valat0 == valat1 && valat0 == valat2){
                

               
                
                return valat0;
            }
            
        }
    
       
        
    }
};


resetGame.addEventListener("click",resetGameFn);