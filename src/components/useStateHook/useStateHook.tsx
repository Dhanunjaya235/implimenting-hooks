import { FC, useCallback, useEffect, useRef, useState } from 'react';
import './useStateHook.css';
import {useNavigate} from 'react-router-dom';

interface UseStateHookProps { }

class Employee {
  public name: string;
  public id: number
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id
  }
}

const UseStateHook: FC<UseStateHookProps> = () => {
    const[employee,setEmployee]=useState(new Employee("Dhanunjay",205));
    const nameRef=useRef<HTMLInputElement>(null);
    const idRef=useRef<HTMLInputElement>(null);
    const navigation = useNavigate();

    useEffect(()=>{
      nameRef.current?.focus();
      console.log("Use Effect Hook");
    },[nameRef.current?.value])
    const changeEmployee=useCallback(()=>{
      navigation('/useRef');
      setEmployee(prevEmployee=>{
        console.log(prevEmployee);
        console.log(nameRef.current?.value)
        let name:string=nameRef.current?.value!
        let id:number=+idRef.current?.value! 
        let newEmployee=new Employee(name,id)
        return newEmployee
      }
      )
    },[nameRef.current?.value,idRef.current?.value]);
  return (
    <div className='employee'>
          <p><input type="text" name='name' placeholder='Enter Employee Name' ref={nameRef}></input></p>
          <p><input type="number" name='id' placeholder='Enter Employee Id' ref={idRef}></input></p>
          <button type='submit' onClick={changeEmployee}>ChangeEmployee</button>
          <p className='info'>The EmployeeLogged in is {employee.name} with id {employee.id}</p>
    </div>
  )
}

export default UseStateHook;
