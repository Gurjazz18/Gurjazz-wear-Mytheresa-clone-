import React from 'react'
import Table from 'react-bootstrap/Table';
export default function CartItem({state}) {
    console.log(state)
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Image</th>
        <th> Name</th>
        <th>price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>*</td>
        <td><img src="" width="100px" /></td>
        <td></td>
        <td></td>
      </tr>
     
    </tbody>
  </Table>
  )
}
