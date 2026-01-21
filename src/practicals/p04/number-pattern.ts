const N = Number(process.argv[2]);

if (isNaN(n) || n <= 0) {
    console.log("");
    process.exit(1);
    }
for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N - i; j++) {
        let row = "";
    }
      
    for (let j = 1; j <= 2 * i - 1; j++)  {
        let row += j;
            }
    
   
    console.log(row);
}

