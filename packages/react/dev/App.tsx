import { useState } from 'react'
import { Button, Input } from '../'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <label htmlFor="input">Field :</label> <Input id="input" />{' '}
      <Button
        onClick={() => {
          setCount(old => old + 1)
        }}
      >
        Click me {count}
      </Button>
    </>
  )
}

export default App
