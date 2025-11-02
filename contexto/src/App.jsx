import {TemaProvider} from './components/TemaProvider.jsx'
import {Pagina} from './components/Pagina.jsx'
import './css/styles.css'
import './css/reset.css'

function App() {

  return (
    <>
      <TemaProvider>
        <Pagina/>
      </TemaProvider>
    </>
  )
}

export default App
