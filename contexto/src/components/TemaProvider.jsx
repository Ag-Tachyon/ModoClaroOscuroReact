import { useState } from "react";
import { TemaContext } from "./TemaContext";

export function TemaProvider({ children }){
    const [oscuro , setOscuro] = useState(false)
    
    const alternarTema = ()=>{
        setOscuro(!oscuro);
    }
    
    return(<>
        <TemaContext.Provider value={{ oscuro , alternarTema }}>
            {children}
        </TemaContext.Provider>
    </>);
}