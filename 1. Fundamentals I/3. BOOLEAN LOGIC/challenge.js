/**
 * There are two gymnastics teams, Dolphins and Koalas. They compete against each
   other 3 times. The winner with the highest average score wins a trophy!
   Your tasks:
   1. Calculate the average score for each team, using the test data below
   2. Compare the team's average scores to determine the winner of the competition,
   and print it to the console. Don't forget that there can be a draw, so test for that
   as well (draw means they have the same average score)
   3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
   team only wins if it has a higher score than the other team, and the same time a
   score of at least 100 points. Hint: Use a logical operator to test for minimum
   score, as well as multiple else-if blocks �
   4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
   both teams have the same score and both have a score greater or equal 100
   points. Otherwise, no team wins the trophy
   Test data:
   § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
   § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
   § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
 */

let dolphinScore1 = 96;
let dolphinScore2 = 108;
let dolphinScore3 = 89;
let dolphinScoreAverage = (dolphinScore1 + dolphinScore2 + dolphinScore3 )  / 3;

let koalaScore1 = 88;
let koalaScore2 = 91;
let koalaScore3 = 110;
let koalaScoreAverage = (koalaScore1 + koalaScore2 + koalaScore3 )  / 3;


// Test 
if(dolphinScoreAverage > koalaScoreAverage){
   console.log(`Dolphin's the winner! Points: ${dolphinScoreAverage}`);

}else if(dolphinScoreAverage < koalaScoreAverage){
   console.log(`Koala's the winner! Points: ${koalaScoreAverage}`);
   
}else{

   console.log(`It's a draw! Dolphin's points: ${dolphinScoreAverage}, Koala's points: ${koalaScoreAverage}`);
   
}

// Bonus 1
dolphinScore1 = 97;
dolphinScore2 = 112;
dolphinScore3 = 101;
dolphinScoreAverage = (dolphinScore1 + dolphinScore2 + dolphinScore3 )  / 3;

koalaScore1 = 109;
koalaScore2 = 95;
koalaScore3 = 123;
koalaScoreAverage = (koalaScore1 + koalaScore2 + koalaScore3 )  / 3;


if(dolphinScoreAverage > koalaScoreAverage && dolphinScoreAverage >= 100){
   console.log(`Dolphin's the winner! Points: ${dolphinScoreAverage}`);

}else if(dolphinScoreAverage < koalaScoreAverage && koalaScoreAverage >= 100){
   console.log(`Koala's the winner! Points: ${koalaScoreAverage}`);
   
}else{

   console.log(`It's a draw! Dolphin's points: ${dolphinScoreAverage}, Koala's points: ${koalaScoreAverage}`);
   
}

// Bonus 2
dolphinScore1 = 97;
dolphinScore2 = 112;
dolphinScore3 = 101;
dolphinScoreAverage = (dolphinScore1 + dolphinScore2 + dolphinScore3 )  / 3;

koalaScore1 = 109;
koalaScore2 = 95;
koalaScore3 = 106;
koalaScoreAverage = (koalaScore1 + koalaScore2 + koalaScore3 )  / 3;


if(dolphinScoreAverage > koalaScoreAverage && dolphinScoreAverage >= 100){
   console.log(`Dolphin's the winner! Points: ${dolphinScoreAverage}`);

}else if(dolphinScoreAverage < koalaScoreAverage && koalaScoreAverage >= 100){
   console.log(`Koala's the winner! Points: ${koalaScoreAverage}`);
   
}else if(dolphinScoreAverage === koalaScoreAverage && koalaScoreAverage >= 100 && dolphinScoreAverage >= 100){
   console.log(`It's a draw! Dolphin's points: ${dolphinScoreAverage}, Koala's points: ${koalaScoreAverage}`);
   
}else{

   console.log(`There's no winner`);
   
}





