import fs from "node:fs";

const data = JSON.parse(fs.readFileSync("challenge05/mecenas.json", "utf8"));
const qty = data.length;

const killedIndexes = new Set();

function nextLiveIndex(from) {
  for (let i = from + 1; i < qty; i++) {
    if (!killedIndexes.has(i)) {
      return i;
    }
  }

  for (let i = 0; i < from; i++) {
    if (!killedIndexes.has(i)) {
      return i;
    }
  }

  throw new Error("No more live indexes");
}

let liveItems = qty;
while (liveItems > 1) {
  for (let i = 0; i < qty; i++) {
    if (killedIndexes.has(i)) {
      continue;
    }

    killedIndexes.add(nextLiveIndex(i));
    liveItems -= 1;
  }
}

data.forEach((item, i) => {
  if (!killedIndexes.has(i)) {
    console.log(`submit ${item}-${i}`);
  }
});
