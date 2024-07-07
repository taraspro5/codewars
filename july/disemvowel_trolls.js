function disemvowel(str) {
  const vowels = /[aeiouAEIOU]/g;
  return str.replace(vowels, "");
}
