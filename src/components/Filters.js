import React from 'react';

const Filters = (props) => {
  const { inputValue, updateInputValue, updateOrderValue, orderValue } = props

  const getValue = (evt) => updateInputValue(evt.currentTarget.value);
  const preventSend = (evt) => evt.preventDefault();
  const getOrderOption = (evt) => updateOrderValue(evt.currentTarget.value);

  return (
    <form>
      <label htmlFor="inputSearch"></label>
      <input id="inputSearch" type="text" value={inputValue} placeholder="Busca a tu personaje favorito" onChange={getValue} onSubmit={preventSend} />
      <select id="order" onChange={getOrderOption} value={orderValue} >
        <option name="order" value="" checked={orderValue === "" ? true : false} >Ordenar</option>
        <option name="order" value="Por nombre" checked={orderValue === "Por nombre" ? true : false} >Por nombre</option>
      </select>
    </form>
  )
}

export default Filters;