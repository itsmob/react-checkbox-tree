export default function CheckboxTree({ paths }) {
  return (
    <>
      <ul>
        {paths.map((path) => {
          return (
            <li key={path.id}>
              <input type='checkbox' name={path.name} id={path.id} />
              <label htmlFor={path.id}>{path.name}</label>
              {path.children && <CheckboxTree paths={path.children} />}
            </li>
          );
        })}
      </ul>
    </>
  );
}
