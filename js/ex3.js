/* HW 5
   Example 3 JavaScript code
*/
console.log("Torres Output from HW 5 Example 3");

//declare studentList array
const studentList = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    }
];

//pure functions for min, max, avg
const calcMin = arr => arr.reduce((acc, val) => val < acc ? val : acc);
const calcMax = arr => arr.reduce((acc, val) => val > acc ? val : acc);
const calcAvg = arr => arr.reduce((acc, val) => acc + val) / arr.length;

//filter students with last name starting with C
//map students to a new array as objects 
const cLastNameResults = studentList
  .filter(student => student.lastName.charAt(0) === "C")
  .map(student => {
    const { firstName, lastName, scores } = student;
    return {
      firstName,
      lastName,
      minScore: calcMin(scores),
      maxScore: calcMax(scores),
      avgScore: calcAvg(scores)
    };
  });

console.log(cLastNameResults);
