import { Counter } from "./components/Counter";
import { CounterRed } from "./components/CounterRed";
import { TimerFather } from "./components/TimerFather";
import { User } from './components/User'

function App() {
  return (
    <>
      <h1 className="mt-5">React + TypeScript</h1>
      <hr/><br/>


      <h2>useState</h2>
      <Counter/>
      <User/>
      <hr/><br/>

      <h2>useEffect y useRef</h2>
      <TimerFather/>
      <hr/><br/>

      <h2>useReducer</h2>
      <CounterRed/>



    </>
  );
}

export default App;
