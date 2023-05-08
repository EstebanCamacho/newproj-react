import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'


function App(){
  
  return(
    <>
        <NavBar />
        <ItemListContainer />
        <ItemCount stock={5}/>
        
    </>  
  )
}

export default App
