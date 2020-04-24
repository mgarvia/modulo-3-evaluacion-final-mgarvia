import React from 'react';
import '../stylesheets/SearchError.scss'

const SearchError = (props) => {
  return (
    <div className="SearchError">
      <h2 className="SearchError__msg">
        <p>¡Catástrofe! </p>
        <p>El personaje <span className="SearchError__msg--value">{props.inputValue.toUpperCase()}</span> no existe.</p>
        <p>Si lo has escrito en alienígena, ¡prueba en humano a ver si lo encontramos!</p>
      </h2>
    </div>
  )
}

export default SearchError;