import { useEffect, useState } from 'react'
import type { JSX } from 'react'
interface Data {
  title: string
}

function Component(): JSX.Element {
  const [data, setData] = useState<Data | null>(null)
  
  // Si esegue solo al mount (componentDidMount)
  useEffect(() => {
    fetchData().then(setData)
  }, []) // Array vuoto = solo al mount
  
  return <div>{data ? data.title : 'Loading...'}</div>
}

export default Component

async function fetchData(): Promise<Data> {
    // Simulate an async fetch — replace with a real API call if needed
    return new Promise(resolve =>
        setTimeout(() => resolve({ title: 'Fetched title' }), 300)
    )
}
