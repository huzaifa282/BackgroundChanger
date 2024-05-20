import { useState } from 'react'

function App() {
  const [color, setColor] = useState("violet")

  return (
    <>
    <div className='w-full h-screen flex justify-center' style={{backgroundColor: color}}>
      <div className='flex h-14 absolute bottom-8'>
        <div className='bg-white shadow-xl flex items-center px-10 justify-center gap-5 w-full rounded-full mx-14'>
          <button onClick={()=>{setColor("red")}} className='w-24 h-10 rounded-full hover:' style={{backgroundColor:"red"}}>RED</button>
          <button onClick={()=>{setColor("green")}} className='w-24 h-10 rounded-full' style={{backgroundColor:"green"}}>GREEN</button>
          <button onClick={()=>{setColor("blue")}} className='w-24 h-10 rounded-full' style={{backgroundColor:"blue"}}>BLUE</button>
          <button onClick={()=>{setColor("purple")}} className='w-24 h-10 rounded-full' style={{backgroundColor:"purple"}}>PURPLE</button>
          <button onClick={()=>{setColor("pink")}} className='w-24 h-10 rounded-full' style={{backgroundColor:"pink"}}>PINK</button>
          <button onClick={()=>{setColor("gray")}} className='w-24 h-10 rounded-full' style={{backgroundColor:"gray"}}>GRAY</button>
          <button onClick={()=>{setColor("orange")}} className='w-24 h-10 rounded-full' style={{backgroundColor:"orange"}}>ORANGE</button>
          <button onClick={()=>{setColor("lime")}} className='w-24 h-10 rounded-full' style={{backgroundColor:"lime"}}>LIME</button>
          <button onClick={()=>{setColor("aqua")}} className='w-24 h-10 rounded-full' style={{backgroundColor:"aqua"}}>AQUA</button>
          <button onClick={()=>{setColor("navy")}} className='w-24 h-10 rounded-full' style={{backgroundColor:"navy"}}>NAVY</button>
          <button onClick={()=>{setColor("lavender")}} className='w-24 h-10 rounded-full' style={{backgroundColor:"lavender"}}>LAVENDER</button>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default App
