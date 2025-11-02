import { useContext } from "react"
import { TemaContext } from "./TemaContext"

export function Pagina(){

    const {oscuro , alternarTema} = useContext(TemaContext)

    return(<>
        <div className={`pagina ${oscuro ? "oscuro" : "claro"}`} style={{"width" : "100%" , "height" : "100vh"}}>
            <h1 style={{  "font-family" : "Roboto, sans-serif"}} >{oscuro ? "👾 Modo Oscuro" : "🎄 Tema Claro"}</h1>

            <button className="btn" onClick={alternarTema}>Cambiar Tema</button>
        </div>
    </>)
}