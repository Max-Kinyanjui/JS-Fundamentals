const args = process.argv.slice(2);

const number = Number(args[0]);

console.log(Number.isNaN(number) ? "Not a number" : `My number: ${number}`);