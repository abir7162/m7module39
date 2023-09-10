import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './team'
import Users from './user'
import Friends from './Friends'
import Friend from './Friend'

function App() {

  function handleClick(){
    alert('button clicked');
  }
  const handleClick2 = () =>{
    alert('clicked 2')
  }
  const handleFour = (num) =>{
    alert(num + 5)
  }
 return(

<>

<h3>React Core concep 2</h3>

<Friends></Friends>
<Users></Users>
<Team></Team>
<Counter></Counter>
<button onClick={handleClick}>Click me</button>
<button onClick={handleClick2}>Button click 2</button>
<button onClick={()=>{alert('clicked 3')}}>button 3</button>
<button onClick={() =>{handleFour(5)}}>button4</button>
</>

 )
}

export default App
