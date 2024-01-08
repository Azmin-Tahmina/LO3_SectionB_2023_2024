"use strict";

/* 
 Filename:    gradesinfo-rounded.js
 Student:     Sample Student (student1234)
 Course:      CWEB 190 (Internet Programming/Web Applications 1) 
 Instructor:  Michael Grzesina 
 Date:        Winter 2024
 Purpose:     Extended practice for loops and decision structures
*/

// Constants
const PASSING_GRADE = 49.5;
const gradeArray = [];

// Global variables
let total = 0; // total of all grades entered
let numGrades = 0; // number of grades entered
let numPasses = 0; // number of passing grades entered

// Global code
let textGrade = window.prompt("Enter a grade from 0 to 100 (hit Cancel to stop)", "");

while (textGrade !== null) { // null will be returned if the user chooses Cancel from the dialog box
    let grade = parseFloat(textGrade);

    // check for a valid grade
    if (grade < 0 || grade > 100 || Number.isNaN(grade) || isNaN(textGrade)) {
        window.alert("Invalid grade - must be between 0 and 100");
    } else {
        let result;

        numGrades++;
        total += grade;

        // check for passing grade
        if (grade >= PASSING_GRADE) {
            result = "Pass";
            numPasses++;
        } else {
            result = "Fail";
        }

        // display results so far
        window.alert( "Status: " + result
                + "\nAverage so far: " + (Math.round((total / numGrades) * 10) / 10)
                + "\nNumber passed so far: " + numPasses + " out of " + numGrades );
        gradeArray.push(grade);
    }
    textGrade = window.prompt("Enter a grade from 0 to 100 (hit Cancel to stop)", "");
}

// display final results
gradeArray.sort().reverse();
const percentPassing = (numPasses / numGrades * 100).toFixed(1) + "%";
document.getElementById("output").innerHTML = "Out of " + numGrades + " total grades, "
        + "there were " + numPasses + " passing grades. "
        + "The percentage of passing grades was " + percentPassing + ". "
        + "The average grade was " + (Math.round((total / numGrades) * 10) / 10) + ". "
        + "The grades sorted in reverse order are " + gradeArray.join(", ") + ".";
