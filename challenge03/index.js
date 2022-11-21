import fs from "node:fs";

const longestZebra = (colors) => {
  let zebra = [colors[0]];

  let maxLength = 0;
  let lastColor = null;

  const zebraHasEnded = () =>
    zebra.length >= maxLength
      ? [zebra.length, zebra.at(-1)]
      : [maxLength, lastColor];

  for (let color of colors) {
    if (zebra.length === 1 && zebra[0] === color) {
      continue;
    }

    if (zebra.length < 2 || zebra.at(-2) === color) {
      zebra.push(color);
      continue;
    }

    [maxLength, lastColor] = zebraHasEnded();
    zebra = [zebra.at(-1), color];
  }

  [maxLength, lastColor] = zebraHasEnded();

  return [maxLength, lastColor];
};

/*******************************************************
 * TESTS
 */
const tests = [
  { input: ["red", "blue", "red", "blue", "green"], output: [4, "blue"] },
  { input: ["green", "red", "blue", "gray"], output: [2, "gray"] },
  { input: ["blue", "blue", "blue", "blue"], output: [1, "blue"] },
  {
    input: ["red", "green", "red", "green", "red", "green"],
    output: [6, "green"],
  },
  { input: ["blue", "red", "blue", "red", "gray"], output: [4, "red"] },
  {
    input: ["red", "red", "blue", "red", "red", "red", "green"],
    output: [3, "red"],
  },
  {
    input: ["red", "blue", "red", "green", "red", "green", "red", "green"],
    output: [6, "green"],
  },
];
for (let test of tests) {
  const res = longestZebra(test.input);
  console.log("real: ", res);
  console.log("expected: ", test.output);
  console.log("---------------");
}

/*******************************************************
 * DATA
 */
const data = JSON.parse(fs.readFileSync("challenge03/colors.txt", "utf8"));
const res = longestZebra(data);
console.log(`submit ${res[0]}@${res[1]}`);
