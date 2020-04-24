import React from 'react';
import '../stylesheets/spinner.scss';
import '../stylesheets/Loader.scss';

const Loader = () => {
  return (
    <div className="loaderPage">
      <div className="loader">
        <div className="lds-roller"></div>
      </div>
    </div>
  )
}

export default Loader;