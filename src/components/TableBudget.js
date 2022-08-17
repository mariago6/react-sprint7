import React from "react";
import {TableText} from '../styled'

function TableBudget(props) {
  return(
    <tr key={props.key}>
        <TableText>{props.budget}</TableText>
        <TableText>{props.client}</TableText>
        <TableText>{props.price}€</TableText>
        <TableText>{props.time}</TableText>    
    </tr>
  )

}

export default TableBudget; 