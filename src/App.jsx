import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const { devicePixelRatio } = window;
  // handle windows display scaling
  const computed = +1 / window.devicePixelRatio;
  const [scale, setScale] = useState(computed < 1 && window.innerWidth > 768 ? computed : 1);

  useEffect(() => {
    document
      .querySelector('meta[name=viewport]')
      .setAttribute('content', `width=device-width, initial-scale=${scale}`)
  }, [scale]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p>DevicePixelRatio: {devicePixelRatio}</p>
        <p>Computed: {computed}</p>
        <p>Scale: {scale}</p>
        <button onClick={() => setScale(+1 /devicePixelRatio)}>Device</button>
        <button onClick={() => setScale(1)}>Force 1</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
