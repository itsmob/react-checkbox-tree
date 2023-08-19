import CheckboxTree from './components/CheckboxTree';
import { paths } from './data/paths';
import { createObjectsFromPaths } from './utils/checkboxTree';

function App() {
  return (
    <>
      <CheckboxTree paths={createObjectsFromPaths(paths)} />
    </>
  );
}

export default App;
