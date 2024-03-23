let userName = "Minakshee ";
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

const userQuestion = "";
console.log(userQuestion);

const randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall="zero";
    break;
  case 1:
    eightBall="It is certain";
    break;
  case 3:
    eightBall="It is decidedly so";
    break;
  case 4:
    eightBall="Reply hazy try again";
    break;
  case 5:
    eightBall="Cannot predict now";
    break;
  case 6:
    eightBall="Do not count on it";
    break;
  case 7:
    eightBall="My sources say no";
    break;
  case 8:
    eightBall="Outlook not so good";
    break;
  case 9:
    eightBall="Signs point to yes";
    break;
  default:
    console.log("Incorrect num");
}

console.log(`The magic eightBall says ${eightBall}`);
