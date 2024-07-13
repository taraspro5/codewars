function getCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        console.log(`${str[i]} === ${vowels[j]}`);
        count++;
      }
    }
  }
  return count;
}
