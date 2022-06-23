const game = () => {
  let player_score = 0;
  let computer_score = 0;
  let rounds = 0;

  const playGame = () => {
    const headBtn = document.querySelector(".head-btn");
    const tailBtn = document.querySelector(".tail-btn");
    const playerOptions = [headBtn, tailBtn];
    const computerOptions = ["head", "tail"];
    const outcomeOptions = ["head", "tail"];

    // function  to start playing the head or tail game
    playerOptions.forEach((optn) => {
      optn.addEventListener("click", (e) => {
        e.preventDefault();

        const roundsLeft = document.querySelector("#roundsLeft");
        let roundCount = document.querySelector("#rounds");
        rounds++;

        roundCount.innerHTML = (
          parseInt(roundCount.innerHTML) - 1
        ).toString();

        // find the choice
        const compChoice = Math.floor(Math.random() * 2);
        const computerChoice = computerOptions[compChoice];
        const outcomeChoice = Math.floor(Math.random() * 2);

        const outcome = outcomeOptions[outcomeChoice];

        // check out who wins
        winner(optn.value, computerChoice, outcome);

        // calling GameOver
        if (rounds == 5) {
          gameOver(playerOptions, roundsLeft);
        }
      });
    });
  };

  // function that shows the winner
  const winner = (player, computer, outcome) => {
    const result = document.querySelector(".result");
    const playerScoreCount = document.querySelector(".player-count");
    const computerScoreCount = document.querySelector(".computer-count");

    player = player.toLowerCase();
    computer = computer.toLowerCase();
    outcome = outcome.toLowerCase();

    if (player == outcome) {
      playerScoreCount.innerHTML = (
        parseInt(playerScoreCount.innerHTML) + 1
      ).toString();
      result.innerHTML = "You Won!";
      player_score = playerScoreCount.innerHTML;
    } else if (computer == outcome) {
      computerScoreCount.innerHTML = (
        parseInt(computerScoreCount.innerHTML) + 1
      ).toString();
      result.innerHTML = "Computer Won!";
      computer_score = computerScoreCount.innerHTML;
    } else if (computer == outcome && player == outcome) {
      playerScoreCount.innerHTML = (
        parseInt(playerScoreCount.innerHTML) + 1
      ).toString();
      computerScoreCount.innerHTML = (
        parseInt(computerScoreCount.innerHTML) + 1
      ).toString();

      result.innerHTML = "You and Computer Won!";
    } else {
      playerScoreCount.innerHTML = (
        parseInt(playerScoreCount.innerHTML) + 0
      ).toString();
      computerScoreCount.innerHTML = (
        parseInt(computerScoreCount.innerHTML) + 0
      ).toString();

      result.innerHTML = "No one wins!";
    }
  };

  //   function when rounds end
  const gameOver = (playerOptions, roundsLeft) => {
    const choose = document.querySelector(".choose-move");
    const reloadBtn = document.querySelector(".btn-reload");
    const result = document.querySelector(".result");

    choose.innerHTML = "Game Over";
    choose.classList.add("gameOver");
    playerOptions.forEach((optn) => {
      optn.classList.add("none");
    });

    roundsLeft.style.display = "none";

    if (player_score > computer_score) {
      result.innerHTML = "You Won The Game!!";
      result.classList.add("gameResult");
      result.classList.add("text-danger");
    } else if (player_score < computer_score) {
      result.innerHTML = "Computer Won The Game!!";
      result.classList.add("text-primary");
      result.classList.add("gameResult");
    } else {
      result.innerHTML = "You Both Tied!!";
      result.classList.add("gameResult");
      result.classList.add("text-muted");
    }

    reloadBtn.classList.remove("none");
    reloadBtn.addEventListener("click", () => {
      window.location.reload();
    });
  };
  playGame();
};
game();
