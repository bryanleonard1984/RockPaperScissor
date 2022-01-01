var score = 0;
var total = 0;
var turn = 0;
var playChoice;
var comChoice;
var comChoiceStr;
var imgPlayer = document.getElementById("player");
var imgComp = document.getElementById("comput");
var result = document.getElementById("result");

function RockSelect()
{
	playChoice = "rock";
	imgPlayer.src = "../images/rock.jpg";
	compSelect();
	switch (comChoiceStr)
	{
		case "rock":
			result.innerHTML = "It's a tie.";
      score = 0.5;
			break;
		case "paper":
			result.innerHTML = "Sorry, you lost.";
      score = 0;
			break;
		case "scissors":
			result.innerHTML = "You win!";
      score = 1;
			break;
		default:
			break;
	}
  ScoreTally();
}

function PapSelect()
{
	playChoice = "paper";
	imgPlayer.src = "../images/paper.jpg";
	compSelect();
	switch (comChoiceStr)
	{
		case "rock":
			result.innerHTML = "You win!";
      score = 1;
			break;
		case "paper":
			result.innerHTML = "It's a tie.";
      score = 0.5;
			break;
		case "scissors":
			result.innerHTML = "Sorry, you lost.";
      score = 0;
			break;
		default:
			break;
	}
  ScoreTally();
}

function SciSelect()
{
	playChoice = "scissors";
	imgPlayer.src = "../images/scissors.jpg";
	compSelect();
	switch (comChoiceStr)
	{
		case "rock":
			result.innerHTML = "Sorry, you lost.";
      score = 0;
			break;
		case "paper":
			result.innerHTML = "You win!";
      score = 1;
			break;
		case "scissors":
			result.innerHTML = "It's a tie.";
      score = 0.5;
			break;
		default:
			break;
	}
  ScoreTally();
}

function compSelect()
{
	comChoice = Math.floor((Math.random() * 3) +1);
	switch (comChoice)
	{
		case 1:
			comChoiceStr = "rock";
			imgComp.src = "../images/rock.jpg";
			break;
		case 2:
			comChoiceStr = "paper";
			imgComp.src = "../images/paper.jpg";
			break;
		case 3:
			comChoiceStr = "scissors";
			imgComp.src = "../images/scissors.jpg";
			break;
		default:
			break;
	}
}

function ScoreTally()
{
  turn = turn + 1;
  total = total + score;
  document.getElementById("score").innerHTML = "Score: " + total + " / " + turn;
}
