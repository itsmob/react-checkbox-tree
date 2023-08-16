import { pathHasChildren, parseDecendants, descendantsAmount } from '../utils/checkboxTree';
import { useState } from 'react';

export default function CheckboxTree({ paths, parentCheck = true }) {
  const [boxState, setBoxState] = useState(false);

  const jsx = [];
  let i = 0;

  while (i < paths.length) {
    if (!pathHasChildren(paths[i], paths[i + 1])) {
      jsx.push(
        <li key={paths[i]}>
          <input type='checkbox' name={paths[i]} id={paths[i]} disabled={!parentCheck} />
          <label htmlFor={paths[i]}>{paths[i]}</label>
        </li>,
      );
    } else {
      jsx.push(
        <li key={paths[i]}>
          <input
            type='checkbox'
            name={paths[i]}
            id={paths[i]}
            onChange={() => {
              setBoxState(!boxState);
            }}
            disabled={!parentCheck}
          />
          <label htmlFor={paths[i]}>{paths[i]}</label>
          <CheckboxTree paths={parseDecendants(paths, i)} parentCheck={boxState} />
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
