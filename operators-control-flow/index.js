/*Question 3
    Bolatito just got admitted to Greenfield High School as an Arts student. To commence her studies, she needs to know the subjects she will be taking as an Arts student. All students have to take the General subjects.
	The subjects for each class group are as follows:
	Science Subjects - Physics, Chemistry, Biology, Technical Drawing 
    Social Science Subjects - Accounting, Commerce, Marketing, Geography
    Arts Subjects - Government, Economics, Literature, History
    General Subjects - English, Mathematics

    Using if…else conditional statement, write a program that will help Bolatito determine the subjects she will be taking for the session using her class group. Also, in the case of an invalid class group, your output should be the General subjects. 

*/

// Get Bolatito's class group
let classGroup = "Arts";

// Determine the subjects based on the class group using if-else statements 

//create an empty array to store the subjects
let subjects = [];

if(classGroup === "Science") {
    subjects = ["Physics", "Chemistry", "Biology", "Technical Drawing", "English", "Mathematics"];
} else if (classGroup === "Social Science") {
    subjects = ["Accounting", "Commerce", "Marketing", "Geography", "English", "Mathematics"];
} else if (classGroup === "Arts") {
    subjects = ["Government", "Economics", "Literature", "History", "English", "Mathematics"];
} else {
    subjects = ["English", "Mathematics"];
}


// Output the subjects
console.log("Your subjects are:- " +  subjects.join(", "));  //Your subjects are:- Government, Economics, Literature, History, English, Mathematics 


/*Question 5
Write a program that takes a positive number (num) and finds the power of 2 nearest to that number. The program stores the resulting value to pwr. Then you log the answer in this format: 
“The number (pwr) is the power of 2 nearest to (num).”

If there are two candidate values, display the smaller one. For example, 2 and 4 4 are both the powers of 2 nearest to 3. The function should display 2 because it’s smaller than 4.

For example,
If num = 40, pwr = 32. Then you log to your console in this format:
“The number 32 is the power of 2 nearest to 40.”

If num = 50, pwr = 64.. Then you log to your console in this format:
“The number 64 is the power of 2 nearest to 50.”

*/

  
function findNearestPowerOf2(num) {
    let pwr = 1;
    for (let i = 0; pwr <= num; i++) {
      pwr = 2 ** i;
      console.log(pwr)
    }
    const prevPwr = pwr / 2;
    
    return (num - prevPwr) <= (pwr - num) ? prevPwr : pwr;
  }
  
  const num = 4;
  const pwr = findNearestPowerOf2(num);
  console.log(`The number ${pwr} is the power of 2 nearest to ${num}.`); //The number 64 is the power of 2 nearest to 50.
  