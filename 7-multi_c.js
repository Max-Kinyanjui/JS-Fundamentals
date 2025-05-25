const args = process.argv.slice(2);
const x = parseInt(args[0]);

if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else {
  console.log("C is fun\n".repeat(x).trim());
}