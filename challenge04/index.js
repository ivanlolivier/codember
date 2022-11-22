const MIN = 11098;
const MAX = 98123;

const possiblePasswords = [];
for (let i = MIN; i <= MAX; i++) {
  const [a, b, c, d, e] = `${i}`.split("").map(Number);

  if (a > b || b > c || c > d || d > e) {
    continue;
  }

  const cantOf5 = `${i}`.split("5").length - 1;
  if (cantOf5 >= 2) {
    possiblePasswords.push(i);
  }
}

console.log(`submit ${possiblePasswords.length}-${possiblePasswords[55]}`);
