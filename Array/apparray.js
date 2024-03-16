// // var student = [];

// // var names = ["Uzair"];

// // var numberArray = [10, 20, 30, 40];


// // console.log(numberArray[0]);

// // console.log(numberArray[2])



// // var booleanArray = [true, false]


// // // Declare and initialize a mixed array
var mixedArray = [10, "apple", true, { name: "John" }, null];

// Access individual elements
console.log(mixedArray[1]); // Prints "apple"
console.log(mixedArray[3].name); // Prints "John"


// // var educationQualification = ["Qualifications: <br><br>SSC <br> BCS<br> BS<br> BCOM<br> MS<br> M.Phil<br> PhD"]

// // document.write(educationQualification)


// Point 8

var studentsName = ["Michcael" , "Jhon" , "Tony"];

var totalScore = (500)

var scoreGetting = [320, 230, 480]

document.write("Score of " + studentsName[0] + " is " + scoreGetting[0] + "." + "Percentage: " + (scoreGetting [0]*100/totalScore + "% <br>"))


document.write("Score of " + studentsName[1] + " is " + scoreGetting[1] + "." + "Percentage: " + (scoreGetting [1]*100/totalScore + "% <br>"))

// // document.write("Score of " + studentsName[2] + " is " + scoreGetting[2] + "." + "Percentage: " + (scoreGetting [2]*100/totalScore + "% <br>"))

// // Point 9

// Initialize an array with color names
var colorArray = ["red", "blue", "green", "yellow", "purple"];

// Display the array elements in your browser
console.log("Original array of colors:", colorArray);

// Ask the user for a color to add to the beginning
var userColor = prompt("Enter a color to add to the beginning of the array:");

// Add the user-specified color to the beginning of the array
colorArray.unshift(userColor);

// Display the updated array
console.log("Updated array of colors:", colorArray);

// Ask the user what color he/she wants to add to the end

var userColor = prompt("Enter color wnats to add at the end")

// add the specific color at the end of array

colorArray.push(userColor)


//Add two more color to the begning of the array

colorArray.push("baby pink" , "chocolate")

colorArray.slice(2,4)

console.log(colorArray)




// Create an initial array of colors
const colors = ["red", "green", "blue", "yellow"];

// Function to add a color at a specific index
function addColorAtIndex() {
    const index = parseInt(prompt("Enter the index where you want to add the color:"));
    const color = prompt("Enter the color you'd like to add:");

    // Check if the index is within bounds
    if (index >= 0 && index <= colors.length) {
        // Use the `splice` method to insert the color at the specified index
        colors.splice(index, 0, color);
        console.log(`Color '{color}' added at index {index}.`);
    } else {
        console.error("Invalid index. Please choose a valid position.");
    }

    // Display the updated array
    console.log("Updated colors array:", colors);
}

// Example usage
addColorAtIndex(); // Prompts the user for index and color


// Number 10



let scoreStudent = [320,230,480,120];


document.write("Score of Student " + scoreStudent + "<br>")

scoreStudent.sort();

document.write("Order Score of Student " + scoreStudent + "<br><br>")


var citiesList = ["Karachi", "Lahore", "Islamabad", "Quetta", "Pesahwar"]

// Program 12

var arr = ["This",  "is ", " my ", " cat <br><br>"];


document.write(arr)

arr = ("This is my cat")

document.write(arr)

const fifo = []

fifo.push("<br>keyboard")
fifo.push("mouse")

document.write(fifo)

