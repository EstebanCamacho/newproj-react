import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import FotoCafe from './components/FotoCafe/FotoCafe'

function App(){
  
  return(
    <>
        <NavBar />
        <ItemListContainer greeting='Bienvenidos a Tiendas C&C' />
        <FotoCafe />
    </>  
  )
}

export default App
