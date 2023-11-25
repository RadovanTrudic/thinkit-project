const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter string:', (answer:string) => {
  if (answer.length > 10) {
    console.error('Input is too long. Please enter a sentence with a maximum of 1000 characters.');
    rl.close();
    return;
  }
  console.log(`Hello, ${answer}!`);
  console.log(getMiddle(answer))
  rl.close();
});

function getMiddle(word:string) {
    const len = word.length;
    let res = "";
    if(len%2==0){
        res += word[len/2-1] + word[len/2];
        return res;
    }
    
    res = word[Math.floor(len/2)];
    return res;
}

