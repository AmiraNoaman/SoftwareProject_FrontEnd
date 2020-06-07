import React from 'react';
import './SearchSectionCard.css'
const SectionCard = ({id,title,source,p}) => {
    return (
       <div id="Section" className="  br3 pa3 ma2  bw2 shadow-5">
          <div draggable="true">
              <div id="two" className="react-contextmenu-wrapper">
                <div  className="pa1">
                    <img className="tc db ba b--black-10 "src={source}/>
                </div>
                <div>
                    <h1 className=" fw7  f7  white">{title}</h1>
                    <p className="light-gray f7  ">{p}</p>
                </div>
                <div className="box ">
                    <button className="Button "  aria-lable="Play">
                        <svg height="50" role="img" width="50" viewBox="0 0 80 80">
                            <polygon points="32,25 32,58 60,42" fill="currentColor"></polygon>
                        </svg>
                    </button>
                </div>
            </div>
          </div>
       </div>
        );
    }
    // 21.57 12.98 3 5.98 21 21.57 12
    export default SectionCard;