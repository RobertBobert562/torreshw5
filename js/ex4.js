/* HW 5
   Example 4 JavaScript code
*/
console.log("Torres Output from HW 5 Example 4");

//first loop: update scores
for (const student of studentList) {
    student.scores = student.scores.map(score => score + 5);
  }
  
  //second loop: adds average to scores
  for (const student of studentList) {
    const avgScore = student.scores.reduce((acc, score) => acc + score) / student.scores.length;
    student.scores.push(avgScore);
  }
  
  //third loop: display the results by iterating through all students
  for (const student of studentList) {
    const { firstName, lastName, scores } = student;
    const fullName = `${lastName}, ${firstName}`;
    const updatedScores = scores.join(', ');
    console.log(`full name (last, first): ${fullName}`);
    console.log(`Updated scores are: ${updatedScores}`);
  }
  