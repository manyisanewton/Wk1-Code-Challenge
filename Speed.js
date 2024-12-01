
//Write a program that takes the speed of a car as input e.g 80. 
//If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70),
// it should give the driver one demerit point and print the total number of demerit points.

   //> For example, if the speed is 80, it should print: “Points: 2”. 
   //If the driver gets more than 12 points, the function should print: “License suspended”.

   function speeChecker(speed) {
      let speedLimit = 70;
      let kmforeachDemeritPoint = 5;//For every 5 km/s over the speed limit which is 70, you get 1 demerit  point
  
      if (speed <= speedLimit) { //if you speed is bellow 70 or equal to 70 you are safe 
          return "Ok";
      } else {
          const points = Math.floor((speed - speedLimit) / kmforeachDemeritPoint); //exapmle ((130-70)/5)=12 points demerit points
          if (points > 12) {
              return "License suspended";
          } else {
              return `Points: ${points}`;
          }
      }
  }
  
  // Example of my speed check
  console.log(speeChecker(50)); // Output: "ok "" because 50 is below the  speedlimit"
  console.log(speeChecker(130)); // output: 12 demerit points
  console.log(speeChecker(90)); 
  console.log(speeChecker(160));
  console.log(speeChecker(500));//license suspended because the points are more the 12