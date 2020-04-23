import React from 'react';

const Filters = (props) => {
  const { inputValue, updateInputValue, updateOrderByName, orderByName } = props

  const getValue = (evt) => {
    const event = evt.currentTarget.value;
    updateInputValue(event);
  }

  const getCheck = () => updateOrderByName();

  return (
    <form>
      <label htmlFor="inputSearch"></label>
      <input id="inputSearch" type="text" value={inputValue} placeholder="Busca a tu personaje favorito" onChange={getValue} />
      <label htmlFor="checkboxName">Ordenar por nombre</label>
      <input id="checkboxName" type="checkbox" name="orderByName" value="orderByName" checked={orderByName} onChange={getCheck} />
    </form>
  )
}

export default Filters;