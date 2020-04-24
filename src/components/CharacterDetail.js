import React from 'react';
import '../stylesheets/CharacterDetail.scss';

const CharacterDetail = (props) => {
  const { image, name, species, origin, episode, status } = props.CharacterData;
  const { iconStatus, iconSpecies } = props;
  return (
    <div className="CharacterDetail">
      <div className="CharacterDetail__return">
        <a href="/" title="volver a la página de inicio" >
          <i className="fas fa-angle-left"></i> Volver
        </a>
      </div>

      <div className="CharacterDetail__box">
        <img className="CharacterDetail__image" src={image} alt={name} />
        <div className="CharacterDetail__box--info">
          <p className="CharacterDetail__subtitle">Name:
          <span className="CharacterDetail__info CharacterDetail__name">{name}</span>
          </p>
          <p className="CharacterDetail__subtitle">Status:
          <span className="CharacterDetail__info"> {status}</span>
            <i className={`CharacterDetail__icon--status ${iconStatus}`}></i>
          </p>
          <p className="CharacterDetail__subtitle">Species:
          <span className="CharacterDetail__info"> {species}</span>
            <i className={`CharacterDetail__icon ${iconSpecies}`}></i>
          </p>
          <p className="CharacterDetail__subtitle">Origin:
          <span className="CharacterDetail__info"> {origin.name}</span>
          </p>
          <p className="CharacterDetail__subtitle">Episodes:
          <span className="CharacterDetail__info"> {episode.length}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CharacterDetail;