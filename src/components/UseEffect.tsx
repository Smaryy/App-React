import { useState, useEffect } from 'react'
import type { JSX } from 'react'

function Example(): JSX.Element {
  const [count, setCount] = useState<number>(0)
  
  // Side effect: aggiorna il titolo del documento
  useEffect(() => {
    document.title = `Hai cliccato ${count} volte`
  })
  
  return (
    <div>
      <p>Hai cliccato {count} volte</p>
      <button onClick={() => setCount(count + 1)}>
        Clicca qui
      </button>
    </div>
  )
}

export default Example