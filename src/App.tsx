
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
        <h1>About Me!</h1>
        <p>1:04:16 PM [vite] hmr update /src/components/FilmCanister.tsx, /src/index.css, /src/App.css (x9)
1:04:33 PM [vite] hmr update /src/components/Background.tsx, /src/index.css, /src/App.css
1:04:40 PM [vite] hmr update /src/components/FilmCanister.tsx, /src/index.css, /src/App.css
1:05:59 PM [vite] hmr update /src/components/Background.tsx, /src/index.css, /src/App.css
1:06:12 PM [vite] hmr update /src/components/Background.tsx, /src/index.css, /src/App.css (x2)
1:06:44 PM [vite] hmr update /src/components/Navbar.tsx, /src/index.css, /src/App.css
1:08:04 PM [vite] hmr update /src/components/Speaker.tsx, /src/index.css, /src/App.css
1:08:08 PM [vite] hmr update /src/components/Speaker.tsx, /src/index.css, /src/App.css (x2)
1:08:12 PM [vite] hmr update /src/components/Speaker.tsx, /src/index.css, /src/App.css (x3)
1:08:17 PM [vite] hmr update /src/components/Speaker.tsx, /src/index.css, /src/App.css (x4)
1:08:20 PM [vite] hmr update /src/components/Speaker.tsx, /src/index.css, /src/App.css (x5)
1:08:26 PM [vite] hmr update /src/components/Speaker.tsx, /src/index.css, /src/App.css (x6)
1:08:26 PM [vite] hmr update /src/components/Speaker.tsx, /src/index.css, /src/App.css (x7)</p>
      </div>
    </div>
  )
}

export default App
