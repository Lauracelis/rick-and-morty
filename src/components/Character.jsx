function Character(character){ //se recibe la información de la api como una prop y se aplica al componente
    return(
        <div>
            <h2>{character.character.name}</h2>
            <img src={character.character.image} alt={character.character.name}/>
        </div>
    )
}
export default Character