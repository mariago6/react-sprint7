import React from "react";
import {TableText} from '../styled'

function TableBudget(props) {
  return(
    <tr>
        <TableText>{props.budget}</TableText>
        <TableText>{props.client}</TableText>
        <TableText>{props.price}€</TableText>
        <TableText>{props.time}</TableText>    
    </tr>
  )

}

export default TableBudget; 