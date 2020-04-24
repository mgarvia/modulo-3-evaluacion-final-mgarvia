import React from 'react';
import '../stylesheets/SearchError.scss'

const SearchError = (props) => {
  const {fontAlien} = props;
  return (
    <div className="SearchError">
      <h2 className="SearchError__msg">
        <p className={fontAlien}>¡Catástrofe! </p>
        <p className={fontAlien}>El personaje <span className={`SearchError__msg--value ${fontAlien}`}>{props.inputValue.toUpperCase()}</span> no existe.</p>
        <p className={fontAlien}>Si lo has escrito en alienígena, ¡prueba en humano a ver si lo encontramos!</p>
      </h2>
    </div>
  )
}

export default SearchError;