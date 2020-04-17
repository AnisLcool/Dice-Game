/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// setting the variables 
let scores, round_score, active_player,img_container,  tagScore, roll_btn, dice_image;

score = [0,0];
round_score = 0;
active_player = 0 ; // player 0 will have the first turn

img_container = document.querySelector(".dice-img");
tagScore = document.querySelector(`#current${active_player + 1}`)


img_container.style.display = "none"; // hiding the dice

dice_image = img_container.children[0]; // retrieving the img

  

let roll_dice = (event) => {
    
    let dice_number = Math.floor(Math.random() * 6) + 1; // random number between 1 and 6 inclusively
    
    // setting the src attribute to retrieve the dice img that matches the dice number
    dice_image.src = `dice-${dice_number}.png`; 
    img_container.style.display = "block"; // displaying the img

    round_score += dice_number; // adding the dice number to round score

    // setting the round score, if the dice number is 1 , reset the round score to 0
    if(dice_number !== 1){
        tagScore.textContent = round_score;
    }
    else{
        round_score = 0;
        tagScore.textContent = 0;
    }
    
}

roll_btn = document.querySelector(".btn-roll");
roll_btn.addEventListener("click", roll_dice);





