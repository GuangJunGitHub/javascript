type Curry = (fn: (...args: any[]) => any) => (...args: any[]) => any

const curry: Curry = (fn) => {
/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
  return function curryInner(...args) {
    if (args.length >= fn.length) return fn(...args);
    return (...args2: any[]) => curryInner(...args, ...args2);
  };
}

const join = (a: any, b: any, c: any) => {
   return `${a}_${b}_${c}`
}
const curriedJoin = curry(join)
curriedJoin(1, 2, 3) // '1_2_3'
curriedJoin(1)(2, 3) // '1_2_3'
console.log(curriedJoin(1, 2)(3)) // '1_2_3'
console.log(curriedJoin(1)(2)(3))