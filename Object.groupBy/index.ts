/**
 * @template T
 * @template { keyof any } K
 * @param { Array<T> } items
 * @param { (item: T) => K } callback
 * @returns { Record<K, Array<T>> }
 */
function ObjectGroupBy(items, callback) {
    let newObj = Object.create(null);
    for(let item of items) {
      let targetK = callback(item);
      if (!(targetK in newObj)) {
        newObj[targetK] = new Array();
      }
      newObj[targetK].push(item);
    }
    return newObj
  }
  const items = [
    {
      id: 1,
      kind: 'a',
    },
    {
      id: 2,
      kind: 'b',
    },
    {
      id: 3,
      kind: 'a',
    }
  ]
  const groups = ObjectGroupBy(items, ({kind}) => kind)
  console.log(
    ObjectGroupBy(
      [0, 1, 2, 3, 4, 5], (item) => item % 2 === 0 ? 'even' : 'odd'
    )
  )