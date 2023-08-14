import CheckboxTree from './components/CheckboxTree';
import { treeOptions } from './data/treeOptions';

function App() {
  return (
    <>
      <CheckboxTree options={treeOptions} cascading={false} />
    </>
  );
}

export default App;
