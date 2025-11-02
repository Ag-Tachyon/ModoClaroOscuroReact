import {TemaProvider} from './components/TemaProvider.jsx'
import {Pagina} from './components/Pagina.jsx'
import './css/styles.css'
import './css/reset.css'

function App() {

  return (
    <>
      <TemaProvider> {/* Creamos proveedor del contexto globla */}
        <Pagina/> {/* Como vemos en "TemaProvider", los child de este pordrán usar el contexto */}
      </TemaProvider>
    </>
  )
}

export default App
