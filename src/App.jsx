
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Players from './Players'
function App() {
  function handleClick(){
    alert('first button clicked')
  }
  const handleClick2 = () => {
    alert('2nd btn clicked')
  }
  const handleClick4 = (num) => {
    alert(5 + num)
  }

  return (
    <>
      <Players/>
      <h1>React</h1>
      <Users/>
      <Team/>
      <Counter/>
      <button onClick={handleClick}>First</button>
      <button onClick={handleClick2}>second</button>
      <button onClick={() => alert('third btn clicked')}>third</button>
      <button onClick={() => handleClick4(5)}>forth</button>
      
    </>
  )
}

export default App
