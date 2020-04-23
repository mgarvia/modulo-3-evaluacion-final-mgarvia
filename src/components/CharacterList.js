import React from 'react';
import CharacterCard from './CharacterCard';
import {Link} from 'react-router-dom';

import '../stylesheets/CharacterList.scss'

const CharacterList = (props) => {
  const { data, inputValue, orderValue } = props;
  return (
    <ul className="dataList">
      {data
        .filter(obj => obj.name.toLowerCase().includes(inputValue.toLowerCase()))
        .map((obj) =>  
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
    </ul>
  )
}

export default CharacterList