export function createObjectsFromPaths(array, i = 0, lvl = 0, until) {
  /* debugger; */
  const data = [];

  while (i < array.length) {
    if (!pathHasChildren(array, i, lvl)) {
      data.push({
        id: array[i],
        name: pathName(array[i]),
        children: null,
      });
    } else {
      //DA stands for decendant amout
      const DA = decendantAmount(array, i, lvl);
      data.push({
        id: array[i],
        name: pathName(array[i]),
        children: createObjectsFromPaths(array, i + 1, lvl + 1, i + DA),
      });
      i = i + DA;
    }
    if (i == until) return data;
    i++;
  }

  return data;
}

function decendantAmount(array, i, lvl) {
  let amount = 1;
  if (!array[i + amount + 1]) return amount;
  while (array[i].split('.')[lvl] == array[i + amount + 1].split('.')[lvl]) {
    amount++;
    if (!array[i + amount + 1]) return amount;
  }
  return amount;
}

function pathHasChildren(array, i, lvl) {
  if (!array[i + 1]) return false;
  const root1 = array[i].split('.')[lvl];
  const root2 = array[i + 1].split('.')[lvl];
  return root1 == root2;
}

function pathName(path) {
  //path = 'a.b.c' -> 'c'
  return path.split('.').pop();
}
