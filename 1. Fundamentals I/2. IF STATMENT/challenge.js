/**
 * Use the BMI example from Challenge #1, and the code you already wrote, and
   improve it.
   Your tasks:
   1. Print a nice output to the console, saying who has the higher BMI. The message
   is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
   2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
   BMI (28.3) is higher than John's (23.9)!"
   Hint: Use an if/else statement
 */

const markHeightT1 = 1.69;
const markMassT1 = 78;
const johnHeightT1 = 1.95;
const johnMassT1 = 92;

const markBMIT1 = markMassT1 / markHeightT1 ** 2;
const johnBMIT1 = johnMassT1 / johnHeightT1 ** 2;

let markHigherBMI = markBMIT1 > johnBMIT1;

if (markHigherBMI) {
   console.log(`Mark's BMI (${markBMIT1}) is higher than John's (${johnBMIT1}) !`);

} else {
   console.log(`John's BMI (${johnBMIT1}) is higher than Mark's (${markBMIT1}) !`);

}



