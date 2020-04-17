/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// setting the variables 
let scores, round_score, active_player,img_container,  tagCurrentScore, roll_btn, dice_image;

score = [99,0];
round_score = 0;
active_player = 0 ; // player 0 will have the first turn

let hide_display_img = function(value){img_container.style.display = value;};

let switchTurn = () => {
    // give turn to other player
    round_score = 0;
    tagCurrentScore.textContent = 0;
    document.querySelector(`.player${active_player + 1}`).classList.remove("currentTurn")
      active_player = 1 - active_player;
        document.querySelector(`.player${active_player + 1}`).classList.add("currentTurn")
        
        hide_display_img("none"); 
        // enable button
       roll_btn.removeAttribute("disabled");
       hold_btn.removeAttribute("disabled");
}

let check_score= () => {
    if(score[active_player] >= 100){
        document.querySelector(`.player${active_player + 1} > h1`).textContent = `WINNER : ${score[active_player]}`
        document.querySelector(`.player${active_player + 1} > h1`).classList.add("winner")
        roll_btn.setAttribute("disabled", "");
        hold_btn.setAttribute("disabled", "");
    }
}

img_container = document.querySelector(".dice-img");

hide_display_img("none") // hide the dice

dice_image = img_container.children[0]; // retrieving the img
  

let roll_dice = (event) => {

    tagCurrentScore = document.querySelector(`#current${active_player + 1}`);

    let dice_number = Math.floor(Math.random() * 6) + 1; // random number between 1 and 6 inclusively
    
    // setting the src attribute to retrieve the dice img that matches the dice number
    dice_image.src = `dice-${dice_number}.png`; 
    hide_display_img("block") // displaying the img


    // setting the round score, if the dice number is 1 , reset the round score to 0
    if(dice_number !== 1){
        round_score += dice_number; // adding the dice number to round score
        tagCurrentScore.textContent = round_score;
    }
    else{
        // disable button
        roll_btn.setAttribute("disabled", "");
        hold_btn.setAttribute("disabled", "");
        // pause the game for 2 seconds , give the turn to the other player
        setTimeout(switchTurn, 2000);


        

        
        
    }
    
}



let hold_score = (event) => {
    score[active_player] += round_score;
    document.querySelector(`.player${active_player + 1} > .score`).textContent = score[active_player];
    if(score[active_player] >= 94){
        check_score();
    }else{
        switchTurn();
    }
    
    

}

let new_game = () => {
    score = [0,0];
    round_score = 0;
    active_player = 0;
    switchTurn();
    document.querySelector(`.player1 > .score`).textContent = 0;
    document.querySelector(`.player2 > .score`).textContent = 0;
    document.getElementById(`idp${active_player}`).classList.remove("winner");
    
    document.getElementById("idp1").textContent = "PLAYER 1";
    document.getElementById("idp2").textContent = "PLAYER 2";
}







roll_btn = document.querySelector(".btn-roll");
roll_btn.addEventListener("click", roll_dice);

hold_btn = document.querySelector(".btn-hold");
hold_btn.addEventListener("click", hold_score);

new_btn = document.querySelector(".btn-new");
new_btn.addEventListener("click", new_game);




