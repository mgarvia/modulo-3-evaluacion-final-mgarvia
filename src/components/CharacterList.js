import React from 'react';
import CharacterCard from './CharacterCard';
import SearchError from './SearchError';
import { Link } from 'react-router-dom';

import '../stylesheets/CharacterList.scss'

const CharacterList = (props) => {
  const { data, inputValue, fontAlien, deadCharacters } = props;
  const searchResult = data.filter(obj => obj.name.toLowerCase().includes(inputValue.toLowerCase()))

  return !searchResult.length && inputValue !== ''
    ? <SearchError inputValue={inputValue} fontAlien={fontAlien}/>
    : (
      <ul className="dataList">
        {data
          .filter(obj => !inputValue.length || obj.name.toLowerCase().includes(inputValue.toLowerCase()))
          .filter(obj => deadCharacters ? obj.status === 'Dead' : obj.status !== '')
          .map(obj =>
            <li className="listItem" key={obj.id}>
              <Link to={`/character/${obj.id}`} >
                <CharacterCard
                  image={obj.image}
                  name={obj.name}
                  species={obj.species}
                  fontAlien={fontAlien}
                />
              </Link>
            </li>
          )
        }
      </ul >
    )
}

export default CharacterList