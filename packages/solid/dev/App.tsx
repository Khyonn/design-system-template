import { createSignal } from 'solid-js'
import { Button, Input } from '../'
function App() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <label for="input">Field :</label> <Input id="input" />{' '}
      <Button
        onClick={() => {
          setCount(count() + 1)
        }}
      >
        Click me {count()}
      </Button>
    </>
  )
}

export default App
