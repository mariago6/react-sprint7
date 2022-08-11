import {TextBox, Box, Button} from '../styled'

function Panell(props){
  return(
    <div>
      <TextBox>{props.text}</TextBox>
      <Button type='button' onClick={props.onClickAdd}>+</Button>
      <Box
        type='number'
        onChange={props.onChange}
        name={props.name}
        value={props.value}
        min={1}
      />
      <Button type='button' onClick={props.onClickSub}>-</Button>
    </div>
  )
}

export default Panell; 


