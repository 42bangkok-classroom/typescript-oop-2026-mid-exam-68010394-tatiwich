const n = Number(process.argv[2]);

if (n <= 100 && n >= 80){
    console.log("Grade is A");
}
else if (n <= 79 && n >= 70){
    console.log("Grade is B");
}
else if ( n <= 69 && n >= 60){
    console.log("Grade is C");
}
else if ( n <= 59 && n >= 50){
    console.log("Grade is D");
}
else if ( n <= 49 && n >= 0){
    console.log("Grade is F");
}
else [
    console.log("Invalid input");
]
