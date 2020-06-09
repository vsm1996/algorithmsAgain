function staircase(n) {
  let str = "#";
  let count = 1;
  while (count <= n) {
    console.log(str.repeat(count).padStart(n));
    count++;
  }
}

staircase(4);
