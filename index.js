// Q1// let name="Mahijith K Menon";
// console.log(name);
//Q2
// const Scanner=require('readline-sync');
// let name=Scanner.question('What is your Name?\n');
// console.log(name);
//Q3
const Scanner=require('readline-sync');
// let name=Scanner.question('What is your Name?\n');
// console.log("Welcome " + name);
// let age=Scanner.question('What is your Age?');
// if(age>25){
//   console.log("Right");
// }
// else{
//   console.log("Wrong");
// }
// let live=Scanner.question('your hometown is Bokaro\n');
// let score=0;
// if(live==="yes"||live=="YES"){
//   score++;
// }
// console.log("Score is: "+score);
//Q
// function add(a,b){
//   c=a+b;
//   return c;
// }
// console.log(add(4,5));
// let answer=Scanner.question('How many sides does a square have?\n');
// score=0;
// if(Number(answer)===4){
//   score++;
// }

// console.log("Score is "+score);
// if(score){
//   console.log("You Won!!");
// }
// else{
//   console.log("Wrong Answer");
// }
// for(i=0;i<5;i++){
//   console.log("Mahijith"+" Number "+i);
// }
//Pattern
// n=Scanner.question('How many no. of rows in stars you want\n');
// for(i=1;i<=Number(n);i++){
// for(j=1;j<=i;j++){
//   console.log("* ");
// }
//    console.log("\n");
// }
// i=22;
// for(j=0;j<10;j++){
//   console.log(i+j);
// }
// let groceries=['Apple','Banana','Cherry','Betroot','Pumpkin'];
// for(i=0;i<groceries.length;i=i+2){
//   console.log(groceries[i]);
// }
// for(i=0;i<groceries.length;i=i+1){
//   console.log(groceries[i]);
// }
// let superHeros={
//   Batman:'Vigilante',
//   Superman:'Hero with a cape'
// }
// console.log(superHeros.Batman);
score=0;
highscore=0;
play=true;
let playerName=Scanner.question("What is your name\n");
let Reference=Scanner.question("Do You Know Mahijith(y/n)\n");
if(Reference=='y'){
  console.log("Well He made a Game for you");
}
else{
   console.log("Oh ho no perhaps ! Here's A Game made by him try it out!!\n\n");
}
console.log(playerName +" Game is Starting!!! Hope you'll enjoy\n!!!------- Warning Sensitive Cases------\n" );
console.log(" Enter the answer as same as shown in the given option for ex if (b) Goa is right then your answer should be Goa" );
questionOne={
  question:"Which one of the following river flows between Vindhyan and Satpura ranges?\n(a) Narmada\n(b) Mahanadi\n(c) Son\n(d) Netravati",
  answer:"Narmada"
}
questionTwo={
  question:"What is your favorite Superhero in Netflix(Daredevil,Punisher)",
  answer:"Daredevil"
}
questionThree={
  question:"Do You Like Dogs(Yes/No)",
  answer:"Yes"
}
questionFour={
  question:"What do you like the most(Coding/Sleeping)",
  answer:"Coding"
}
questionFive={
  question:"The Central Rice Research Station is situated in(Google It)?",
  answer:"Cuttack"
}
questionSix={
  question:"Who among the following wrote Sanskrit grammar?",
  answer:"Panini"
}
questionSeven={
  question:"Which among the following headstreams meets the Ganges in last?",
  answer:"Bhagirathi"
}
questionEight={
  question:"The metal whose salts are sensitive to light is?",
  answer:"Silver"
}
questionNine={
  question:"Patanjali is well known for the compilation of",
  answer:"Yoga Sutra"
}
questionTen={
  question:"River Luni originates near Pushkar and drains into which one of the following?",
  answer:"Rann of Kachchh"
}

function quiz(a,b){
  let live=Scanner.question(a+"\n");
  if(live==b){
    score++;
  }
  else{
    console.log("Wrong Answer!!");
   score--
}
  console.log("Score is "+score);
  scoreCheck(score);
}
function scoreCheck(score){
  if(score==5){
    play=false;
    console.log("-------- You Entered Level 2 ---------")
  }
  if(score==8){
    console.log("-------- You Entered Level 3 ---------")
  }
  if(score==10){
    console.log("-------- You Won! ---------")
    play=false;
  }
  
}
while(play===true){
quiz(questionOne.question,questionOne.answer);
quiz(questionTwo.question,questionTwo.answer);
quiz(questionThree.question,questionThree.answer);
quiz(questionFour.question,questionFour.answer);
quiz(questionFive.question,questionFive.answer);
quiz(questionSix.question,questionSix.answer);
quiz(questionSeven.question,questionSeven.answer);
quiz(questionEight.question,questionEight.answer);
quiz(questionNine.question,questionNine.answer);
quiz(questionTen.question,questionTen.answer);
  play=false;
}
// if(score<0){
//   score=0;
// }
if(highscore<score){
  highscore=score;
  console.log("You Scored the highest rank in the game!!")
  console.log("Take Screenshot if you want!!!")
}
console.log("Your Score is "+score);
console.log("HighScore is "+highscore);
gamePlay=Scanner.question('Want to play the game again(y/n)');
if(gamePlay=='y'){
  score=0;
  play=true;
}