import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FeedbackButton from './FeedbackButton.jsx'
import SearchBar from './Search.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <FeedbackButton/>
     <SearchBar/>
    </>
  )
}

export default App
