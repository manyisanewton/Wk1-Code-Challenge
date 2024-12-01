//Write a function that prompts the user to input student marks. 
//The input should be between 0 and 100.
//The output should correspond the correct grade, as shown below: 
//A > 79, B - 60 to 79, C - 59 to 49, D - 40 to 49, E - less 40

let mark = prompt("Input student marks (0 - 100)")
//const mark=()
 studentGrading(mark);
 
function studentGrading(mark){

if (mark>79 && mark<=100){
return "A";
} 
else if(mark>=60 && mark<=79){
return "B";
} 
else if(mark>=49 && mark<=59){
return "C";
} 
else if(mark>=40 && mark<=49){
return "D";
} 
else if(mark<=40){
return "E";
} 
else{
return "invalid"
}

} 



console.log(studentGrading(mark));

// Example outputs for different inputs:
console.log(studentGrading(89)); // Should return "A"
console.log(studentGrading(60)); // Should return "B"
console.log(studentGrading(59)); // Should return "C"
console.log(studentGrading(49)); // Should return "D"
console.log(studentGrading(44)); // Should return "D"
console.log(studentGrading(20)); // Should return "E"
console.log(studentGrading(99)); // Should return "A"
console.log(studentGrading(109)); // Should return "Invalid input"."This is because the Marks should be between 0 and 100."