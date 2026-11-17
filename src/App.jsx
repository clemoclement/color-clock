import { format } from 'date-fns'
import './App.css'

function App() {
  return (
    <main className="app">
    <div className="clock">
    <p>{format(new Date(), 'PPpp')}</p>
    </div>
    </main>

  )
}

export default App
