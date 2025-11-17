import React from 'react'
import Card from '../components/Card'

const Home = () => {
    var data = {
        title:"krish",
        Age: 22,
        Number: 9876543219,
        imageurl:"https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
        desc:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum fuga dicta similique culpa! Facilis omnis aliquid dolore. Repellendus saepe quam molestias obcaecati aut odio, doloremque facilis velit molestiae nostrum repudiandae cupiditate sit debitis voluptatibus minima! Totam enim illo aperiam ipsam in non error deleniti reiciendis nemo laboriosam, quidem quas iste! Perspiciatis adipisci ",

    }
  return (
    <div>
        <h1>HOME</h1>
        <Card data={data} color="red"/>
        <Card data={data} color="blue"/>
    </div>
  )
}

export default Home