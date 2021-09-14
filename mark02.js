var readlineSync = require('readline-sync')
const chalk = require('chalk');
console.log('Welcome to the QUIZ')
var username = readlineSync.question('Whats your Name? :')
console.log('Hello ' + username + ", Let's Play the Quiz!!");

console.log('\n');
console.log('Rules & Instructions: ');
console.log('1.',username + ', There are 5 Questions on cricket and all are Compulsory.');
console.log('2. You have to type Full answer not option.');
console.log('3. You will get 1 points on each Right Answer.');
console.log('4. One Point will be deducted if the Answer is Wrong.');
console.log('\n');

let score = 0;


var questionsList = [ 
  {
    question : 'Q. Who won the first ever Cricket World Cup in 1975? 1.Australia 2.England 3.India 4.West Indies: \n',
    answer : 'West Indies',
  },
  {
    question : 'Q. Which is the largest cricket stadium in the world? 1.Eden Gardens 2.Melbourne Cricket Club 3.Lords 4.Narendra Modi Stadium: \n',
    answer : 'Narendra Modi Stadium',
  }, 
  {
    question : 'Q. What is the nickname of Sachin Tendulkar? 1.The Little Genius 2.The Little Master 3.The God of Cricket 4.Master Blaster: \n',
    answer : 'The Little Master',
  }, 
  {
    question : 'Q. Which Australian player has scored the most test runs? 1.Steve Waugh 2.Don Bradman 3.Ricky Ponting 4.Matthew Hayden: \n',
    answer : 'Ricky Pontingr',
  },
   {
    question : 'Q. Who won the first ever Cricket T20 World Cup in 2007? 1.Australia 2.England 3.India 4.West Indies: \n',
    answer : 'India',
  }
];

function quiz(question,answer){
    let userAnswer = readlineSync.question(question);

    if(userAnswer.toLowerCase() == answer.toLowerCase()){
    console.log('You are Right.');
    score = score + 1;
  } else{
    console.log('You are Wrong.');
    console.log('The Correct Answer is:',answer);
    score = score - 1;
  }
    if(score < 0){
    score = 0;
  }
     console.log(chalk.cyan('Score is: ',score));
     console.log('_________________')
}

for(var i = 0;i<questionsList.length;i++){
    quiz(questionsList[i].question,questionsList[i].answer);
}
console.log('Congratulations,',username,'your Total Score is: ',score);