//importar datos apenas cargue la aplicación (para ello se usa un hook llamado useffect)
import { useEffect } from "react" //este hook permite ejecutar / hacer un pre render de un dato de la aplicación (tambien ejecutar codigo cuando el componente es creado, esto tambien va a permitir ejecutar logica al inicio)
import { useState } from "react" //este hook son las variables de react, sirve para almacenar datos que luego mostraremos en pantalla y cambiar su estado
import Character from "./Character"; //llamand un componente
function CharacterList(){
    
  const [characters, setCharacters] = useState([]) //creamos una variable de react llamada character y adentro almacenamos un array vacio con usestate (dentro de los () de usestate se aplica lo que se espera recibir, si se espera cadena de texto se pondra "" y no [])
 
  //El use efecct se ejecutara cada vez que cargue el componente, esto se usa para ejecutar logica desde el inicio
  //gracias a esto podremos hacer la petición y apenas se cargue la pagina ya se ejecutara esta petición a la api
  useEffect(() => {
    //se usa async al inicio de la función para declarar que estamos trabajando de forma asyncrona y asi poder usar await para esperar el retorno de la respuesta de la api y asi almacenarlo en algun lado
    async function apiresponse(){
       //fetch es una petición asyncrona por lo cual se espera que retorne algo (ese algo se capturara despues) por esto se usa AWAIT, que es para definir que la propusta es asyncrona (volviendo al algo que se capturara despues, ese algo lo almacenamos dentro de una const)
    const response = await fetch(`{https://rickandmortyapi.com/api/character}`) //petición fetch hacia la api
    
    //el objeto almacenado dentro de la const response es una promise (es dificil de leer, por lo que la transformaremos en un JSON para poder procesar los datos luego)
    const data = await response.json() //con esto convertirmos el objeto a json (tambien se coloca await ya que debe ser asyncrona)

    setCharacters(data.results) //llamamos la función setcharacters del hook userstate para almacenar data.results dentro de character
    }
    apiresponse() //por ultimo se llama la función que hace la petición a la api
  },[])

    return(
        <div id="Main-Container">
        {
          characters.map(character => { //se hace un recorrido sobre characters que es el retorno de lo que dio la api y luego se asigna su valor de posicion 0 a character y estos se pasan al otro componente character, luego hace el recorrido y vuelve a hacer la asignación y los pasa otra vez al otro componente, de esta manera modifica los datos por cada componente generado
            return(
                <Character key ={character.id}character={character}/> //Se llama el componente character el cual es el que hace el map y ejecuta el recorrido 1 a 1 sobre el objeto, de esta manera por cada recorrido se creara un componente (tener en cuenta que lo que se le pasa como character es pasarle la información extraida de la api como una prop)
            )
          })
        }
      </div>
    )
}
export default CharacterList;