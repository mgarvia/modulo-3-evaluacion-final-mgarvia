import React from 'react';
import '../stylesheets/CharacterCard.scss'

const CharacterCard = (props) => {
  const {image, name, species} = props
  return (
    <div className="CharacterCard">
      <img className="CharacterCard__image" src={image} alt={name} />
      <p className="CharacterCard__name">{name}</p>
      <p>{species}</p>
    </div>
  )
}

export default CharacterCard;