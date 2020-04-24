import React from 'react';
import '../stylesheets/Filter.scss';

const Filters = (props) => {
  const { inputValue, updateInputValue, updateOrderByName, orderByName, resetInputValue, translateToAlien, updateTranslateToAlien, iconAZ, iconAlien, iconSkull, deadCharacters, updateDeadCharacters } = props

  const getValue = (evt) => updateInputValue(evt.currentTarget.value);
  const preventSubmit = (e) => {
    if (e.which === 13) {
      e.preventDefault();
    }
  }
  const handleClick = () => resetInputValue();
  const getCheckName = () => updateOrderByName();
  const getCheckAlien = () => updateTranslateToAlien();
  const getCheckDead = () => updateDeadCharacters();

  return (
    <form className="form" autoComplete="off">
      <div className="input">
        <label htmlFor="inputSearch"></label>
        <input className="input__search" id="inputSearch" type="text" name="inputValue" value={inputValue} placeholder="Encuentra tu personaje favorito" onChange={getValue} onKeyPress={preventSubmit} />
        <button className="removeBtn" type="button" onClick={handleClick}>X</button>
      </div>
      <div className="input checkbox">
        <div>
          <i className="fas fa-sort-alpha-down icon" ref={iconAZ}></i>
          <label className="input__checkbox--label" htmlFor="checkboxName" title="Ordenar por nombre">Ordenar por nombre</label>
          <input className="input__checkbox" id="checkboxName" type="checkbox" name="orderByName" value="orderByName" title="Ordenar por nombre" checked={orderByName} onChange={getCheckName} />
        </div>
        <div>
          <i className="fab fa-reddit-alien icon" ref={iconAlien}></i>
          <label className="input__checkbox--label" htmlFor="checkboxAlien" title="Traducir a alienígena">Traducir a alienígena</label>
          <input className="input__checkbox" id="checkboxAlien" type="checkbox" name="translateToAlien" value="translateToAlien" title="Traducir a alienígena" checked={translateToAlien} onChange={getCheckAlien} />
        </div>
        <div>
          <i className="fas fa-skull-crossbones icon" ref={iconSkull}></i>
          <label className="input__checkbox--label" htmlFor="checkboxDead" title="¿Quién está muerto?">¿Quién está muerto?</label>
          <input className="input__checkbox" id="checkboxDead" type="checkbox" name="deadCharacters" value="deadCharacters" title="¿Quién está muerto?" checked={deadCharacters} onChange={getCheckDead} />
        </div>

      </div>
    </form>
  )
}

export default Filters;