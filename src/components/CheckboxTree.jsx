import { pathHasChildren, parseDecendants, descendantsAmount } from '../utils/checkboxTree';

export default function CheckboxTree({ paths }) {
  debugger;
  const jsx = [];
  let i = 0;
  while (i < paths.length) {
    if (!pathHasChildren(paths[i], paths[i + 1])) {
      jsx.push(
        <li key={paths[i]}>
          <input type='checkbox' name={paths[i]} id={paths[i]} />
          <label htmlFor={paths[i]}>{paths[i]}</label>
        </li>,
      );
    } else {
      const decendants = parseDecendants(paths, i);
      jsx.push(
        <li key={paths[i]}>
          <input type='checkbox' name={paths[i]} id={paths[i]} />
          <label htmlFor={paths[i]}>{paths[i]}</label>
          <CheckboxTree paths={decendants} />
        </li>,
      );
      i = i + descendantsAmount(paths, i);
    }
    i++;
  }

  return (
    <>
      <ul>{jsx}</ul>
    </>
  );
}
