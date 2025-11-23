const arg = process.argv[2];
const size = parseInt(arg, 10);
if (isNaN(size)) {
  console.log("Missing size");
} else {
  const line = "X".repeat(size);
  let i = 0;
  while (i < size) {
    console.log(line);
    i++;
  }
}
