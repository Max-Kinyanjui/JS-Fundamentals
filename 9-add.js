const args = process.argv.slice(2);
const a = parseInt(args[0]);
const b = parseInt(args[1]);

function add(a, b) {
  return a + b;
}

if (isNaN(a) || isNaN(b)) {
  console.log("NaN");
} else {
  console.log(add(a, b));
}