import { useState } from 'react';

import Crud from './Component/Crud';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Crud></Crud>
    </>
  )
}

export default App
