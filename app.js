
alert ("Welcome to the Secret Number's Game!");
let maxNum = 100;
let secNum = parseInt (Math.random() * maxNum + 1);
console.log (secNum);
let shot;
let tries = 1;

//while shooting
while (shot != secNum) {
    shot = prompt(`choose a number between 1 and ${maxNum}`);
    //if shoot is right
    if (shot == secNum) {
        break;
    } else {
        if (shot > secNum) {
            alert (`the secret number is less than ${shot}`);
        } else {
            alert (`the secret number is more than ${shot}`);
        }
        tries++;
    }
}

let wTries = tries > 1 ? 'tries' : 'try';
alert (`Hell Yeah! ${secNum} was a good shot, you had ${tries} ${wTries}`);