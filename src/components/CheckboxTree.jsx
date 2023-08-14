import { hasChildren, getFamily } from '../utils/checkboxTree';
import { useState, useRef } from 'react';

export default function CheckboxTree({ options, cascading, parentState }) {
  if (!options) return;
  if (!cascading) {
    if (!hasChildren(options)) {
      return (
        <>
          {options.map((option) => {
            return (
              <ul>
                <li key={option}>
                  <input type='checkbox' name={option} value='present' id={option} />
                  <label htmlFor={option}>{option}</label>
                </li>
              </ul>
            );
          })}
        </>
      );
    }

    /* [
        'uk', -> parent
        'uk.north', -> children
        'ak', -> uncle
      ]; */
    const [parent, children, uncle] = getFamily(options);
    const [childrenState, setChildrenState] = useState('uncheck');
    const parentBox = useRef(null);
    /* parentBox.current. */

    return (
      <>
        <ul>
          <li>
            <input ref={parentBox} type='checkbox' name={parent[0]} value='present' id={parent[0]} />
            <label htmlFor={parent[0]}>{parent[0]}</label>

            <CheckboxTree options={children} cascading={cascading} />
          </li>
        </ul>
        <CheckboxTree options={uncle} cascading={cascading} />
      </>
    );
  }
}
