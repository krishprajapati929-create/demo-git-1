
import './App.css';
import ChildComponents from './components/ChildComponents'
import Parent from './components/Parent'
import GrandChild from'./components/GrandChild'
import Home from './Pages/Home';
import Select from 'react-select'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from './components/Card'

function App() {
  // var value = 20
  // var data = [1,2,3,4,5,6,7,8,9,10]
  const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 8,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
    var data = {
        title:"krish",
        Age: 22,
        Number: 9876543219,
        imageurl:"https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
        desc:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum fuga dicta similique culpa! Facilis omnis aliquid dolore. Repellendus saepe quam molestias obcaecati aut odio, doloremque facilis velit molestiae nostrum repudiandae cupiditate sit debitis voluptatibus minima! Totam enim illo aperiam ipsam in non error deleniti reiciendis nemo laboriosam, quidem quas iste! Perspiciatis adipisci ",

    }
  return (
    <div className="App">
      <h2>App components</h2>
      {/* <h1>prop dealing</h1>
      <h>{value}</h>
      <ChildComponents firsname="krish" lastname="prajapati" data={data}/> */}
      {/* <GrandChild value={450}/>
      <Parent/> */}
      {/* <Home/> */}
      <Select options={options} />
      <Carousel responsive={responsive}>
  <div> <Card data={data}/> </div>
  <div><Card data={data}/></div>
  <div><Card data={data}/></div>
  <div><Card data={data}/></div>
  <div><Card data={data}/></div>
  <div><Card data={data} color="pink"/></div>
  <div><Card data={data} color="red"/></div>
  <div><Card data={data} color="white"/></div>
</Carousel>;
    </div>
  );
}

export default App;
