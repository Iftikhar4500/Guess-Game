const max = prompt("Enter the Maximum Number");
console.log(max);

const random = Math.floor(Math.random() * max) +1;   
console.log(random);

let guess = prompt("Guess the Number");
while(true){
  if(guess == "quit"){
    console.log("user quiting");
    break;
  }

  if(guess == random){
    console.log(`Conragulation you'r Right!!! random number was ${random}`);
    break;
  }
  else if(guess < random){
    guess = prompt("your guess was to small.please try again");
  }
  else if(guess > random){
    guess = prompt("your guess was to large.please try again");
  }
  else{
    guess = prompt("you guess is wrong please try again");
  }
}