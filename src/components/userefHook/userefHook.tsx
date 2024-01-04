import React, { FC } from 'react';
import './userefHook.css';

interface UserefHookProps {}

const UserefHook: FC<UserefHookProps> = () => {

  const paraRef=[
    React.useRef<HTMLParagraphElement>(null),
    React.useRef<HTMLParagraphElement>(null)
  ]

  const changeColor=()=>{
    if(paraRef[0].current){
      paraRef[0].current.style.color="red"
    }
    if(paraRef[1].current){
      paraRef[1].current.style.color="blue"
    }
  }

  return(
    <div className="refhook" data-testid="UserefHook">
    <p ref={paraRef[0]}>Use Ref Paragraph1</p>
    <p ref={paraRef[1]}>Use Ref Paragraph2</p>
    <button onClick={changeColor}>Click Me</button>
  </div>
  )
}
export function MyFunction(){
  console.log("My function")
}

export function MyFunction2(){
  console.log("My function")
}
export default UserefHook;
