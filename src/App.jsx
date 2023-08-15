import CheckboxTree from './components/CheckboxTree';
import { treeOptions } from './data/treeOptions';

function App() {
  return (
    <>
      <CheckboxTree paths={treeOptions} />
    </>
  );
}

export default App;
