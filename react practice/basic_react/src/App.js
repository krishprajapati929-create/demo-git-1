import logo from './logo.svg';
import './App.css';

import NavContainer from './Navbar/NavContainer'
import Home from './page/Home'


function App() {
  const colors = {
    pink:"pink",
    blue:"blue",
    purple:"purple",
    grey:"grey",
    green:"green",
    brown:"brown",
    navcolor:"rgb(42, 1, 81)",
    navtextcolor:"antiquewhite"

  }
  return (
    <div className="App">

      <NavContainer color={colors}/>

      <Home/>
      
    </div>
  );
}

export default App;
