import React, { Component } from 'react';
import Cards from '../card/cards';
import { Row, Col } from 'reactstrap';

class Makanan extends Component {
  state = {
    food: [
      {
        id: 1,
        nama: 'Bistik Ayam.',
        harga: 10000,
        gambar:
          'https://burpple.imgix.net/foods/1e934473a116ab9a0a1063900_original.?w=645&dpr=1&fit=crop&q=80'
      },
      {
        id: 1,
        nama: 'Bistik Ayam.',
        harga: 12000,
        gambar:
          'https://burpple.imgix.net/foods/1e934473a116ab9a0a1063900_original.?w=645&dpr=1&fit=crop&q=80'
      },
      {
        id: 1,
        nama: 'Bistik Ayam.',
        harga: 10000,
        gambar:
          'https://burpple.imgix.net/foods/1e934473a116ab9a0a1063900_original.?w=645&dpr=1&fit=crop&q=80'
      },
      {
        id: 1,
        nama: 'Bistik Ayam.',
        harga: 10000,
        gambar:
          'https://burpple.imgix.net/foods/1e934473a116ab9a0a1063900_original.?w=645&dpr=1&fit=crop&q=80'
      },
      {
        id: 1,
        nama: 'Bistik Ayam.',
        harga: 10000,
        gambar:
          'https://burpple.imgix.net/foods/1e934473a116ab9a0a1063900_original.?w=645&dpr=1&fit=crop&q=80'
      },
      {
        id: 1,
        nama: 'Bistik Ayam.',
        harga: 10000,
        gambar:
          'https://burpple.imgix.net/foods/1e934473a116ab9a0a1063900_original.?w=645&dpr=1&fit=crop&q=80'
      }
    ],
    total: 0
  };

  tambahTotal = harga => {
    this.setState({
      harga: this.state.total + harga
    });
  };
  kurangTotal = harga => {
    this.setState({
      harga: this.state.total - harga
    });
  };

  render() {
    return (
      <div>
        <Row>
          {this.state.food.map(item => (
            <Col xs="3">
              <Cards
                nama={item.nama}
                gambar={item.gambar}
                harga={item.harga}
                tambahTotal={this.tambahTotal}
                kurangTotal={this.kurangTotal}
              />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Makanan;
