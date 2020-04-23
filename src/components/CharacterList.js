import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

import '../stylesheets/CharacterList.scss'

const CharacterList = (props) => {
  const { data, inputValue } = props;
  const searchResult = data.filter(obj => obj.name.toLowerCase().includes(inputValue.toLowerCase()))

  return !searchResult.length && inputValue !== '' ?
    (
      <h2>{`¡Lo sentimos mucho! Pero el personaje ${inputValue} no existe. Tal vez hayas escrito el nombre en alienígena, ¡prueba en humano a ver si lo encuentras!`}</h2>
    )
      : (
        <ul className = "dataList">
      { data
        .filter(obj => !inputValue.length || obj.name.toLowerCase().includes(inputValue.toLowerCase()))
  .map(obj =>
    <li className="listItem" key={obj.id}>
      <Link to={`/character/${obj.id}`} >
        <CharacterCard
          image={obj.image}
          name={obj.name}
          species={obj.species}
        />
      </Link>
    </li>
  )
      }
    </ul >
  )
}

export default CharacterList