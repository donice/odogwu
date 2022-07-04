import React from "react";
import {
  faExternalLinkSquare,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import image from './S.jpeg'

const commonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const App = () => {
  return (
  <div className= 'gradient-bg-welcome'>
    <div className="inner-card blue-glassmorphism">
      <h1 className="header">Odogwu</h1>
      <div className="para">
        <p>Hello Goldin,</p> 
          <p>Atleast I won Somewhere. I let you win
        </p>
      </div>
      <img className='image' src={image}/>
    </div>
    <footer>
      <span>
        <FontAwesomeIcon icon={faExternalLinkSquare} /> 
        <a href='https://github.com/Donice'> Donice Ubaru</a>
      </span>

    </footer>
  </div>  
  
  );
};

export default App;
