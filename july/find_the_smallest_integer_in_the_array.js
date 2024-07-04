function findSmallestInt(arr) {
  let small = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < small) {
      small = arr[i];
    }
  }
  return small;
}
