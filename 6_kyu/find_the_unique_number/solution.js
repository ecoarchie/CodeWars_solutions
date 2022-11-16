function findUniq(arr) {
  const uniqueVals = new Set(arr);
  const [a, b] = [...uniqueVals];
  return arr.filter((num) => num === a).length > 1 ? b : a;
}
