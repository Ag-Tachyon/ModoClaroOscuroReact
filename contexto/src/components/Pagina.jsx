// Este será uno de los componentes que usará el contexto creado

import { useContext } from "react"
import { TemaContext } from "./TemaContext" // -> Importamos el contexto global creado en TemaContext.jsx 
                                            // de lo constrario, no podremos hacer el cambio de temas

export function Pagina(){

    const {oscuro , alternarTema} = useContext(TemaContext) // Este componente consume el contexto global del tema usando useContext.
                                                            // Obtiene el estado 'oscuro' y la función 'alternarTema' desde TemaContext
                                                            // para cambiar entre modo claro y modo oscuro.

    return(<>
        <div className={`pagina ${oscuro ? "oscuro" : "claro"}`} style={{"width" : "100%" , "height" : "100vh"}}>
            <h1 style={{"font-family" : "Roboto, sans-serif"}} >{oscuro ? "👾 Modo Oscuro" : "🎄 Tema Claro"}</h1>

            <button className="btn" onClick={alternarTema}>Cambiar Tema</button>
        </div>
    </>)
}