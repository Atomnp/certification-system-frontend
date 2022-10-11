import React from 'react'
import Table from 'react-bootstrap/Table';


export const Items = ({todo}) => {
  return (
   
    <div>

<Table striped bordered hover>

      <tbody>
        <tr>
          <td>{todo.sn}</td>
          <td>{todo.title}</td>
          <td>{todo.desc}</td>
          <td>2075</td>
          <td>2077</td>
        </tr>
        
      </tbody>
    </Table>






    </div>
  )
}

