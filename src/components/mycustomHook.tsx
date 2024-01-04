import { useEffect, useState } from "react";

export function useWindowWidth(){

    const[width,setWidth]=useState(window.innerWidth);

    useEffect(()=>{
        function handleWidth(){
            setWidth(window.innerWidth);
        }

        window.addEventListener("resize",handleWidth);

        return ()=>window.removeEventListener("resize",handleWidth)
    },[])

    return width;
}