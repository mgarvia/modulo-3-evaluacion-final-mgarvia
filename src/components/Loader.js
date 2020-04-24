import React from 'react';
import '../stylesheets/Loader.scss';
import '../stylesheets/LoaderPage.scss';
import rickySanchez from '../images/ricky-sanchez.png';

const Loader = () => {
  return (
    <div className="loaderPage">
      <div className="loader">
        <img className="loader__background" src={rickySanchez} alt="Ricky Sánchez"/>
        <div className="loader__spinner--left">
          <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
        <div className="loader__spinner--right">
          <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>

      </div>
    </div>
  )
}

export default Loader;