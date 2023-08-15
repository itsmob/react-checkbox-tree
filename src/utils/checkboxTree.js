export function pathHasChildren(currentPath, nextPath) {
  return head(currentPath) == head(nextPath) ? true : false;
}

export function descendantsAmount(array, parentIndex) {
  let count = 1;
  while (pathHasChildren(array[parentIndex], array[parentIndex + count + 1])) {
    count++;
  }
  return count;
}

export function parseDecendants(array, parentIndex) {
  return eraseHeads(getDecendants(array, parentIndex));
}

function getDecendants(array, parentIndex) {
  return array.slice(parentIndex + 1, parentIndex + descendantsAmount(array, parentIndex) + 1);
}

function eraseHeads(array) {
  return array.map((path) => path.split('.').slice(1).join('.'));
}

function head(path) {
  if (!path) return null;
  // path = 'a.b.c' -head-> 'a'
  return path.split('.').shift();
}
