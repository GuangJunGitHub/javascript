const arr = [1, [2], [3, [4]]];
// reduce
const flat = (arr, depth = 1) => {
  return arr.reduce((acc, next) => {
    if (Array.isArray(next) && depth > 0) {
      acc.push(...flat(next, depth - 1));
    } else {
      acc.push(next);
    }
    return acc;
  }, []);
};
// for
const flat1 = (arr, depth = 1) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) {
      result.push(...flat1(arr[i], depth - 1));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};

flat(arr)
flat(arr, 1)
console.log(flat1(arr, 2));
