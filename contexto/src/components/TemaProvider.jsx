// En este archivo creamos el proveedor del contexto,
// el cual gestiona el estado del tema (claro u oscuro) y lo comparte con toda la aplicación.

import { useState } from "react";
import { TemaContext } from "./TemaContext"; // -> Importamos el contexto global creado en TemaContext.jsx 
                                            // de lo constrario, no podremos hacer el cambio de temas

export function TemaProvider({ children }){
    const [oscuro , setOscuro] = useState(false)
    
    const alternarTema = ()=>{
        setOscuro(!oscuro);
    }
    
    return(<>
        {/* Proveemos el estado 'oscuro' y la función 'alternarTema' a los componentes hijos */}
        <TemaContext.Provider value={{ oscuro , alternarTema }}>
            {children} {/* Todos los elementos dentro de "TemaContext.Provider" podrán acceder a "value={{ oscuro , alternarTema }" sin necesidad de usar props */}
        </TemaContext.Provider>
    </>);
}