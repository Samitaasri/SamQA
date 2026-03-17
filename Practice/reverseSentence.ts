function reverseSentence(str: string){
    return str
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");
}
function reverseWord(str: string){
    return str.split('').reverse().join('');
}

console.log("Program started");
console.log(reverseSentence("hello world"));
console.log(reverseWord("hello"));
console.log("Program finished");