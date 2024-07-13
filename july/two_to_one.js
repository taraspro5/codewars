function longest(s1, s2) {
  const union = s1 + s2;
  const result = [...new Set(union)].sort().join("");
  return result;
}

a = "xyaabbbccccdefww";
b = "xxxxyyyyabklmopq";

console.log(longest(a, b));
