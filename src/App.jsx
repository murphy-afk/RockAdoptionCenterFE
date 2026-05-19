
import './App.css'
import axios from 'axios'

function App() {

  axios.get('http://127.0.0.1:8000/api/rocks')
  .then(response => {
    console.log(response.data);
  })


  return (
    <>
      <h1>Rock Adoption Center</h1>
      
    </>
  )
}

export default App
