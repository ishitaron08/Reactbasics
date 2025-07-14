import React from 'react';
import { useState } from 'react';

function App() {
  const [color, setcolor] = useState('pink');

  return (
    <div
      className="w-screen h-screen duration-200"

      style={{ backgroundColor: color }}
    >
      <div className='fixed flex items-center justify-center duration-300 bottom-20 w-full'>

        <div className='flex items-center justify-center
        bg-white p-3 rounded-l-3xl shadow-md'>
          <button onClick={() => setcolor("red")}
            style={{ backgroundColor: "red" }}>Red</button>
        </div>
        <div className='flex items-center justify-center
        bg-white p-3 '>
          <button onClick={() => setcolor("blue")}
            style={{ backgroundColor: "blue" }}>blue</button>
        </div>
        <div className='flex items-center justify-center
        bg-white p-3 '>
          <button onClick={() => setcolor("orange")}
            style={{ backgroundColor: "orange" }}>Orange</button>
        </div>
        <div className='flex items-center justify-center
        bg-white p-3 rounded-r-3xl'>
          <button onClick={() => setcolor("green")}
            style={{ backgroundColor: "green" }}>green</button>
        </div>
      </div>
    </div>
  )
}

export default App
