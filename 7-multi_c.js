const x = Number(process.argv[2]);

console.log(Number.isNaN(x) ? "Missing number of occurrences" : "C is fun\n".repeat(x).trim());