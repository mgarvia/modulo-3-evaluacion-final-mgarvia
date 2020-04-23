import React from 'react';

const CharacterDetail = (props) => {
  const { image, name, species, origin, episode, status } = props.CharacterData;
  const {iconStatus, iconSpecies} = props;
  return (
    <div className="characterDetail__container">
      <a href="/" title="volver a la página de inicio" >
        <i className="fas fa-angle-left"></i> Volver
      </a>
      <div className="characterDetail__info">
        <img className="character__image" src={image} alt={name} />
        <p className="character__name">Name: {name}</p>
        <p className="character__status">Status: 
          <i className={`character__status--icon ${iconStatus}`}></i> 
          {status}
        </p>
        <p className="character__species">Species: 
        <i className={`character__status--icon ${iconSpecies}`}></i>
           {species}
          </p>
        <p>Origin: {origin.name}</p>
        <p>Episodes: {episode.length}</p>
      </div>
    </div>
  )
}

export default CharacterDetail;