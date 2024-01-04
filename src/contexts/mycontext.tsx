import React from "react";

const myContext=React.createContext({
    name:"",
    id:0,
    isLogin:false,
    isLoggedIn:()=>{
    },
    logOut:()=>{
    }
});

export default myContext;



