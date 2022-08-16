import React from "react";
import {TableText, TableStructure} from '../styled'

function TableBudget(props) {
  return(
    <TableStructure key={props.key}>
      {/* <h4> Budget name: {props.budget}</h4>
      <p> Client name: {props.client}</p>
      <p>Total price: {props.price}</p>
      <p>Time: {props.time}</p>
      <hr /> */}
        <TableText>{props.budget}</TableText>
        <TableText>{props.client}</TableText>
        <TableText>{props.price}€</TableText>
        <TableText>{props.time}</TableText>    
    </TableStructure>
  )

}

export default TableBudget; 