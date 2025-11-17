
import './App.css';
import ChildComponents from './components/ChildComponents'
import Parent from './components/Parent'
import GrandChild from'./components/GrandChild'
import Home from './Pages/Home';

function App() {
  var value = 20
  var data = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div className="App">
      <h2>App components</h2>
      {/* <h1>prop dealing</h1>
      <h>{value}</h>
      <ChildComponents firsname="krish" lastname="prajapati" data={data}/> */}
      {/* <GrandChild value={450}/>
      <Parent/> */}
      
      <Home/>
    </div>
  );
}

export default App;
