import './App.css'
import Counter from './component/counter'
import Form from './component/Form/Form'
import { useTheme } from "./contextapi/ThemeContext";


function App() {
const {theme,toggleTheme}=useTheme()
console.log(theme)
  return (
    <div style={{color:theme=="light"?"black":"white",backgroundColor:theme=="light"?"white":"black"}}>
    <button onClick={toggleTheme}>toggle</button>
      <Counter/>
      {/* <Form/> */}
    </div>
  )
}

export default App
