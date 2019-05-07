import React, { Component } from 'react';
import { Table } from 'reactstrap';

class Tabel extends Component {
  componentDidMount() {
    var x = sessionStorage['try1'];
    document.getElementById('total').innerHTML = x;
  }
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Nama Makanan</th>
            <th>Harga</th>
            <th>jumlah</th>
            <th>harga total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>bistik ayam</th>
            <td>20000</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th>nasi kusing</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th>ugwe</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th />
            <th />
            <th>total harga</th>
            <th id="total" />
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default Tabel;
