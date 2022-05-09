/**
 *  Mark and John are trying to compare their BMI (Body Mass Index), which is
    calculated using the formula:
    BMI = mass / height ** 2 = mass / (height * height) (mass in kg
    and height in meter).
    Your tasks:
    1. Store Mark's and John's mass and height in variables
    2. Calculate both their BMIs using the formula (you can even implement both
    versions)
    3. Create a Boolean variable 'markHigherBMI' containing information about
    whether Mark has a higher BMI than John.

    Test data:
    § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
    m tall.
    § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
    m tall
 */

const markHeightT1 = 1.69;
const markMassT1 = 78;
const johnHeightT1 = 1.95;
const johnMassT1 = 92;

const markBMIT1 = markMassT1 / markHeightT1**2;
const johnBMIT1 = johnMassT1 / johnHeightT1**2;

let markHigherBMI = markBMIT1 > johnBMIT1;
console.log(markHigherBMI);

const markHeightT2 = 1.88;
const markMassT2 = 95;
const johnHeightT2 = 1.76;
const johnMassT2 = 85;

const markBMIT2 = markMassT2 / markHeightT2**2;
const johnBMIT2 = johnMassT2 / johnHeightT2**2;

markHigherBMI = markBMIT2 > johnBMIT2;
console.log(markHigherBMI);


