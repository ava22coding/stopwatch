import './App.css';
import Stopwatch from './Stopwatch';
// from뒤에 .js는 생략하고 파일명만 쓰면 됨
// ctrl누르고 import뒤 Stopwatch 누르면 해당 파일에 들어갈 수 있음

function App() {
  return (
    <div className="App">
      <Stopwatch />
    </div>
  );
}

export default App;
