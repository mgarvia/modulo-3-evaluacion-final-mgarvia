import React from 'react';
import '../stylesheets/Filter.scss';

const Filters = (props) => {
  const { inputValue, updateInputValue, updateOrderByName, orderByName, resetInputValue } = props

  const getValue = (evt) => updateInputValue(evt.currentTarget.value);
  const preventSubmit = (e) => {
    if(e.which === 13){
      e.preventDefault();
    }
  } 
  const handleClick = () => resetInputValue();
  const getCheck = () => updateOrderByName();

  return (
    <form className="form" autoComplete="off">
      <div className="input">
        <label htmlFor="inputSearch"></label>
        <input className="input__search" id="inputSearch" type="text" name="inputValue" value={inputValue} placeholder="Encuentra tu personaje favorito" onChange={getValue} onKeyPress={preventSubmit} />
        <button className="removeBtn" type="button" onClick={handleClick}>X</button>
      </div>
      <div className="input">
        <input className="input__checkbox" id="checkboxName" type="checkbox" name="orderByName" value="orderByName" title="Ordenar por nombre" checked={orderByName} onChange={getCheck}/>
        <label className="input__checkbox--label" htmlFor="checkboxName" title="Ordenar por nombre">Ordenar por nombre</label>
      </div>
    </form>
  )
}

export default Filters;