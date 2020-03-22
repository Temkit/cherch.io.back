const Algorithms = require("./../algorithms");

const ALPHABET = {
  a: { id: 12 },
  b: { id: 64 },
  c: { id: 44 },
  d: { id: 33 },
  e: { id: 32 },
  f: { id: 43 },
  g: { id: 53 },
  h: { id: 63 },
  i: { id: 82 },
  j: { id: 73 },
  k: { id: 83 },
  l: { id: 93 },
  m: { id: 103 },
  n: { id: 64 },
  o: { id: 92 },
  p: { id: 102 },
  q: { id: 13 },
  r: { id: 42 },
  s: { id: 23 },
  t: { id: 52 },
  u: { id: 72 },
  v: { id: 44 },
  w: { id: 24 },
  x: { id: 34 },
  y: { id: 62 },
  z: { id: 22 },
  space: { id: 5 }
};

let index = "je suis sidali";

let phrases = ["ge soui sideli", "jsui sid", "jesuis sidaly"];

const checkNeighbor = (a, b) => {
  if (
    a === b - 11 ||
    a === b - 10 ||
    a === b - 9 ||
    a === b - 1 ||
    a === b + 1 ||
    a === b + 9 ||
    a === b + 10 ||
    a === b + 11
  ) {
    return true;
  }

  return false;
};

const getWeight = phrase => {
  let weight = 0;
  let schema = [];
  phrase.split("").forEach((letter, i) => {
    weight =
      (weight + ALPHABET[letter === " " ? "space" : letter.toLowerCase()].id) *
      (phrase.length - i);

    schema.push({
      letter,
      order: phrase.length - i,
      weight: ALPHABET[letter === " " ? "space" : letter.toLowerCase()].id
    });
  });

  console.log(schema);

  return weight;
};

phrases.map(phrase => {
  getWeight(phrase);
});

//console.log(checkNeighbor(53, 54));
