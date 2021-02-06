const fs = require('fs');
//read the file from local environment
let fileContent = fs.readFileSync('C:/Users/Ankit/Downloads/triangle.txt', 'utf-8');
// console.log(fileContent);

//converting triangle file into array
let line = fileContent.split(/ \r?\n/);
let triangle = [];

for(let ln of line){
    triangle.push(ln.split(' '));
}

//converting array of string into array of integer
for(let i = 0; i < triangle.length; i++){
    for(j = 0; j < triangle[i].length; j++){
        triangle[i][j] = parseInt(triangle[i][j]);
    }
}

//function to get maximum sum
function maxTotal(num){
    if(num.length === 1){
        return num[0][0];
    };

    let res = 0;
    for(let i = 1; i < triangle.length; i++){
        for(let j = 0; j <= i; j++){
            if(j === 0) {
                num[i][j] += num[i-1][j];
            } else if(j === i) {
                num[i][j] += num[i-1][j-1];
            } else {
                num[i][j] += Math.max(num[i-1][j], num[i-1][j-1]);
            }
            if(i === num.length-1){
                res= Math.max(res, num[i][j]);
            } 
        }
    }
    return res;
}

console.log(maxTotal(triangle));
