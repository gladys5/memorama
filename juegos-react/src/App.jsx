import "./App.css"

import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="board" onClick={() => setCount((count) => count + 1)}>
      <div className="card-area">
        <div className="card">
          <div className="card face-down">
            <div className="face face-up"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
