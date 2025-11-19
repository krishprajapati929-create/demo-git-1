// import logo from './logo.svg';
// import './App.css';

// import NavContainer from './Navbar/NavContainer'
// import Home from './page/Home'
// import { useEffect, useState } from 'react';

// function App() {

//   const colors = {
//     pink:"pink",
//     blue:"blue",
//     purple:"purple",
//     grey:"grey",
//     green:"green",
//     brown:"brown",
//     navcolor:"rgb(42, 1, 81)",
//     navtextcolor:"antiquewhite"
//   }

//   const [name, setName] = useState("");

//   useEffect(() => {
//     const submitbtn = document.querySelector(".submit")
//     const fullname = document.querySelector(".aa");   // element exists now
//     fullname.addEventListener("click",()=>{
//         if (fullname) {
//       localStorage.setItem("AllDetails", JSON.stringify({
//         name: fullname.value   // get input value, not whole DOM node
//       }));
//     }
//     })
    
    
//   }, []);  // runs one time after render

//   return (
//     <div className="App">
//       <NavContainer color={colors}/>
//       <Home />
//     </div>
//   );
// }

// export default App;


import './App.css';
import NavContainer from './Navbar/NavContainer';
import Home from './page/Home';

function App() {

  const colors = {
    pink: "pink",
    blue: "blue",
    purple: "purple",
    grey: "grey",
    green: "green",
    brown: "brown",
    navcolor: "rgb(42, 1, 81)",
    navtextcolor: "antiquewhite"
  };

  return (
    <div className="App">
      <NavContainer color={colors} />
      <Home />
    </div>
  );
}

export default App;