export function getFamily(array) {
  /* debugger; */
  /* [
    'uk', -> parent
    'uk.north', -> children
    'ak', -> uncle
  ]; */
  const parent = [array[0]];
  const children = [];
  const uncle = [];
  let i = 1;
  if (hasChildren(array)) {
    while (parent == firstWord(array[i])) {
      children.push(eraseParent(array[i]));
      i++;
    }
    if (i < array.length) {
      while (i < array.length) {
        uncle.push(array[i]);
        i++;
      }
    }
  }
  return [parent, children, uncle];
}

export function hasChildren(array) {
  /* [
    'uk', -> parent
    'uk.north', -> children
  ]; */
  if (array.length < 2) {
    return false;
  }
  const firstWordOfFirstPath = firstWord(array[0]);
  const firstWordOfSecondPath = firstWord(array[1]);
  if (firstWordOfFirstPath != firstWordOfSecondPath) {
    return false;
  }
  return true;
}

function firstWord(path) {
  if (!path) return null;
  // path = 'a.b.c' -split-> ['a','b','c']
  return path.split('.')[0];
}
function eraseParent(path) {
  //path = 'a.b.c' -eraseParent-> 'b.c'
  return path.split('.').slice(1).join('.');
}
