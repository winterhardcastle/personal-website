
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Background } from './components/Background'

function App() {
  return (
    <div>
      <Background />
      <Navbar/>
      <div className='pt-60'>
        <h1 className="text-5xl text-bold">Hi, I'm Winter Hardcastle  </h1>
        <h2 className='text-2xl'>Software Engineer, Maker, Designer</h2>
      </div>
      <div className='pt-96'>
        <h1 className="p-12 text-bold text-2xl">About Me</h1>
        <p></p>
      </div>
    </div>
  )
}

export default App
