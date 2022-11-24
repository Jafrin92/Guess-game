// common
let player = document.querySelector(".player");
let game_img = document.querySelector(".game-img");
let win_img = document.querySelector(".win-img");

// player one
let player_one = document.querySelector(".player-one");
let player_one_input = document.querySelector(".player-one-input");
let player_one_err = document.querySelector(".player-one-err");
let player_one_btn = document.querySelector(".player-one-btn");

// player one
let player_two = document.querySelector(".player-two");
let player_two_input = document.querySelector(".player-two-input");
let player_two_err = document.querySelector(".player-two-err");
let player_two_btn = document.querySelector(".player-two-btn");

//chance
let chance_main = document.querySelector(".chance-main");
let chance = document.querySelector(".chance");
let count = 5;

let restart = document.querySelector(".restart");
let player_one_number;

//player one start

player_one_btn.addEventListener("click", function () {
  if (player_one_input.value) {
    if (player_one_input.value - 20) {
      if (player_one_input.value >= 0 && player_one_input.value <= 10) {
        player_one_err.innerHTML = "";
        player.innerHTML = "Player Two";
        player_one.style.display = "none";
        player_two.style.display = "block";
        player_one_number = player_one_input.value;
      } else {
        player_one_err.innerHTML = "Number must be between or equal 0 to 10.";
      }
    } else {
      player_one_err.innerHTML = "Please give a number not text.";
    }
  } else {
    player_one_err.innerHTML = "Please give a number.";
  }
});

//player one end

//player two start

player_two_btn.addEventListener("click", function () {
  if (player_two_input.value) {
    if (player_two_input.value - 20) {
      if (player_two_input.value >= 0 && player_two_input.value <= 10) {
        player_two_err.innerHTML = "";
        if (count !== 1) {
          count--;
          player_two_err.innerHTML = "Wrong Number, Please try again";
          if (player_one_number == player_two_input.value) {
            player.style.color = "green";
            player_two_err.innerHTML = "";
            player.innerHTML = "Congratulations, You are winner";
            player_two_input.style.display = "none";
            player_two_btn.style.display = "none";
            chance_main.style.display = "none";
            game_img.style.display = "none";
            win_img.style.display = "block";
            restart.style.display = "block";
          } else {
            chance.innerHTML = count;
          }
        } else {
          player.style.color = "green";
          player_two_err.innerHTML = "";
          player.innerHTML = "Opps! Player one winner";
          player_two_input.style.display = "none";
          player_two_btn.style.display = "none";
          chance_main.style.display = "none";
          game_img.style.display = "none";
          win_img.style.display = "block";
          restart.style.display = "block";
        }
      } else {
        player_two_err.innerHTML = "Number must be between or equal 0 to 10.";
      }
    } else {
      player_two_err.innerHTML = "Please give a number not text.";
    }
  } else {
    player_two_err.innerHTML = "Please give a number.";
  }
});

//player two end

//Restart start
restart.addEventListener("click", function () {
  location.reload();
});
//Restart end
