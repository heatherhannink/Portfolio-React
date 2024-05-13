import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box bg='tomato' w='100%' p={4} color='white'>
  This is the Box
</Box>
 )
}

export default App
