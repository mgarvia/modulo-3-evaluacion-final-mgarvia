import React from 'react';

const CharacterCard = (props) => {
  const {image, name, species} = props
  return (
    <div>
      <img className="character__image" src={image} alt={name} />
      <p className="character__name">{name}</p>
      <p className="character__species">{species}</p>
    </div>
  )
}

export default CharacterCard;