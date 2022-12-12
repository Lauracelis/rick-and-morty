import CharacterList from "./components/CharacterList" //traer componente
import './App.css'
function App(){ //creación del componente inicial
  return(
    //se llama al componente characterLis el cual tiene todo el consumo de la api
    <div>
      <h1>rick and morty</h1> 
      <CharacterList/>  
    </div>
  )
}

//exportar el componente a pantalla
export default App
