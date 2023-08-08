import { Counter } from "./components/Counter";
import { CounterReducer } from "./components/CounterRed";
import { Form } from "./components/Form";
import { Form2 } from "./components/Form2";
import { TimerFather } from "./components/TimerFather";
import { Todo } from "./components/todoComponents/Todo";
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
      <CounterReducer/>
      <hr/><br/>


      <h2>CustomHooks</h2>
      <Form/>
      <Form2/>
      <hr/><br/>

      <h2>Todo</h2>
      <h3>useContext - createContext</h3>
      <Todo/>
      <hr/><br/>



      <br/><br/><br/><br/><br/><br/>

    </>
  );
}

export default App;
