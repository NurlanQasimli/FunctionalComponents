import { useEffect, useState } from 'react'

import './App.css'
//import { Randomnum } from './Companents/Randomnum/Randomnum'

function App() {
  const [state, setState] = useState('none');
  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
        setState('none')
      }
    })
  }, [])
  return (
    <>

      {/* <Randomnum/> */}
      {/* <button onClick={() => setState('block')}>Open</button>
      <div style={{ display: state }}>
        <p>cdjchdsvchdbchdvsgh</p>
        <button onClick={() => setState('none')}>Close</button>
      </div> */}
      <button onClick={() => setState('block')}>Open</button>
      <div style={{ display: state }}>
        <p>Meqi ureydi</p>
      </div>

    </>
  )
}

export default App
