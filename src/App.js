import './App.css';
import ClassCounter from './coxmponents/ClassCounter';
import ClassCounter2 from './coxmponents/ClassCounter2';
import HookCounter from './coxmponents/HookCounter';
import HookCounter2 from './coxmponents/HookCounter2';
import HookCounter3 from './coxmponents/HookCounter3';
import HookCounter4 from './coxmponents/HookCounter4';

const App = () => (
  <div className="App">
    <div className="App-header">
      <h4>React Hooks Tutor</h4>
    </div>
    <div className="App-main">
      <h2>Main</h2>
      <ClassCounter />
      <HookCounter />
      <HookCounter2 />
      <ClassCounter2 />
      <HookCounter3 />
      <HookCounter4 />
    </div>
    <div className="App-footer">
      <p>by Nabendu</p>
    </div>
  </div>
);

export default App;
