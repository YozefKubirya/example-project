import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginForm from './assets/components/LoginForm/LoginForm'
import SearchBar from './assets/components/SearchBar/SearchBar'
import LangSwitcher from './assets/components/LangSwitcher/LangSwitcher'

function App() {
  const [count, setCount] = useState(0);
  const [selectValue,setSelectedValue]=useState('uk');
  const handleLogin=({login,password})=>{
console.log(`userData :${login}, ${password}`)
  }

  return (
    <>
    <MyComponent></MyComponent>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React helooooo</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <LoginForm onLogin={handleLogin}/>
      <SearchBar/>
      <p> Language:{selectValue} </p>
      <LangSwitcher value={selectValue} onSelect={setSelectedValue}/>
    </>
  )
}
export const MyComponent= ()=>{
  return <>
  heloo my component,</>
}
export default App
