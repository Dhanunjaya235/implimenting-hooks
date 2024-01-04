import React, { FC, useMemo, useState } from 'react';
import './useMemoHook.css';

interface UseMemoHookProps { }

const UseMemoHook: FC<UseMemoHookProps> = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>([]);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const addTodo = () => {
    let todo: string = inputRef.current?.value!;
    setTodos((t) => [...t, todo])
  }

  const generateRandomNumber = () => {
    let num = Math.round(Math.random() * 10);
    console.log(num);
    return num
  }
  const ramdomnumber = useMemo(() => generateRandomNumber(), [todos.length])
  const ramdomnumber2 = generateRandomNumber()
  const addRandomNumber = () => {
    let num = Math.round(Math.random() * 10);
    console.log(num);
    setCount(prevValue => {
      return prevValue + num;
    })
  }
  return (
    <div className="memo" data-testid="UseMemoHook">
      <div id="newtask">
      <input type="text" placeholder='Enter your ToDo Work' ref={inputRef}></input>
      <button onClick={addTodo}>Click Here add Todo</button>
      </div>
      <div id="tasks">
        <h1>My Todos</h1>

        {
          todos.map(todo => {
            return <h4>{todo}</h4>
          })
        }

      </div>
      <button id='random' onClick={addRandomNumber}>Click Here to add random number</button>
      <p>The Random Count after adding random number is {count}</p>
      <p>Random Number Generated using use Memo Hook is {ramdomnumber}</p>
      <p>Random Number Generated with out using use Memo Hook is {ramdomnumber2}</p>
    </div>
  );
}

export default UseMemoHook;
