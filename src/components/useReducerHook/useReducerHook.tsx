import React, { FC } from 'react';
import './useReducerHook.css';
import { useReducer } from 'react';


export function reducer(state:any,action:any){
    switch(action.value){
      case 'Increment':
        return state+1;
      case 'Decrement':
        return state-1;
      default:
        throw new Error("Invalid Action")
    }
}


interface UseReducerHookProps {}

export const UseReducerHook: FC<UseReducerHookProps> = () => {

  const[count,dispatch]=useReducer(reducer,0);

  function increment(){
    dispatch({value:'Increment'});
  }

  function decrement(){
    dispatch({value:'Decrement'});
  }
  return(
    <div className="reducer" data-testid="UseReducerHook">
    <button onClick={increment}>Increment</button><button onClick={decrement}>Decrement</button>
    <p>The Value right now is at {count}</p>
  </div>
  )
}


