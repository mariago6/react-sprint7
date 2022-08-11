import {TextBox, Box} from '../styled'

function Panell(props){
  return(
    <div>
      <TextBox>{props.text}</TextBox>
      <Box
        type='number'
        onChange={props.onChange}
        name={props.name}
        value={props.value}
        min={1}
      />
    </div>
  )
}

export default Panell; 


