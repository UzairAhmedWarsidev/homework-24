// int [] [] multiArry = new int [0] [1];


// let score = [1, 2, 3]

// int[][] multiArray = new int[3][4];

for (var i = 1; i <= 10; i++){
    document.write(i + "<br>")
}



// Table



const number = parseInt(prompt('Enter an integer: '));
const range = parseInt(prompt('Enter a range: '));

// Creating a multiplication table
let j = 1;
while (j <= range) {
    const result = j * number;
    document.write(`${number} * ${j} = ${result}`+"<br>");
    j++;
}
