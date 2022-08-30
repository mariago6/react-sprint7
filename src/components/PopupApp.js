import React from 'react';
import {useState} from 'react'
import {PopupContainer, PopupBox, InfoButton} from '../styled'

function PopupApp(props) {
  const [isOpen, setIsOpen] = useState(false); 

  const changePopup = () => {
    setIsOpen(prevIsOpen => !prevIsOpen); 
  }

  return(
    <div>
      <InfoButton
        type="button"
        value="i"
        onClick={changePopup}
      />
      {isOpen && 
        <PopupContainer onClick={changePopup}>
          <PopupBox>
            {props.content}{props.num}
          </PopupBox>
      </PopupContainer>
      }
    </div>
  );
}

export default PopupApp; 