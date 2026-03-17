function rotateString(str :string,num :number){
    return str.slice(num)+str.slice(0,num);
}
function rotateStringForLoop(str: string, n: number)
 { let result = ""; for (let i = n; i < str.length; i++)
     { result += str[i]; } for (let i = 0; i < n; i++) 
        { result += str[i]; } return result;
 } 
console.log(rotateString("sripriya", 2));
console.log('rotating the string '+rotateStringForLoop("Mytheesh",2));