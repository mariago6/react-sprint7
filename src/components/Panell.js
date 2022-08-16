import {TextBox, Box, Button} from '../styled'
import PopupApp from './PopupApp';

function Panell(props){
  return(
    <div className='panell'>
      <TextBox>{props.text}</TextBox>
      <Button type='button' onClick={props.onClickSub}>-</Button>
      
      <Box
        type='text'
        onChange={props.onChange}
        name={props.name}
        value={props.value}
        min={1}
      />
      <Button type='button' onClick={props.onClickAdd}>+</Button>
      <PopupApp 
        content={props.textInformation}
        num={props.value}
      />
    </div>
  )
}

export default Panell; 


