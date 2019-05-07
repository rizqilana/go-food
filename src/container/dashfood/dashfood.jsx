import React, { Component } from 'react';
import CardFood from '../../components/cardfood/cardfood';
import resto from '../../util/resto';
import { Row, Col, Table } from 'reactstrap';
import { Button } from '@material-ui/core';

class DashFood extends Component {
  componentWillMount() {
    const data = resto.find(item => item.id === this.props.match.params.id);
    const datafood = data.food;
    this.setState({
      fillfood: datafood
    });
    console.log(datafood);
    const addQty = data.food.forEach(o => {
      o.qty = 0;
    });
    console.log(addQty);

    console.log(this.state.fillfood);
  }
  componentDidMount() {
    console.log(this.state.fillfood);
  }

  tambah = id => {
    const { fillfood, orderan } = this.state;
    const fillOrder = orderan.find(item => item.id === id);
    const fillFoods = fillfood.find(item => item.id === id);
    this.addPrice(fillFoods.harga);
    fillfood.map(o => {
      if (o.id === fillFoods.id) {
        const updateIntern = (o.qty = fillFoods.qty + 1);
      }
    });
    if (fillOrder === undefined) {
      const update = {
        ...fillFoods,
        qty: 1,
        price: fillFoods.harga
      };
      this.setState({
        orderan: [...orderan, update]
      });

      return;
    }
    if (fillFoods.id === fillOrder.id) {
      const update = {
        ...fillOrder,
        qty: fillOrder.qty + 1,
        price: fillOrder.price + fillOrder.harga
      };
      this.setState({
        orderan: orderan.map(o => (o.id === fillOrder.id ? update : o))
      });
      return;
    }
  };
  kurang = id => {
    const { orderan, fillfood } = this.state;
    const fillOrder = orderan.find(item => item.id === id);
    const fillFods = fillfood.find(item => item.id === id);
    if (fillFods.qty === 0) {
      return;
    } else {
      if (fillOrder.qty === 1) {
        const updateFoods = { ...fillFods, qty: fillFods.qty - 1 };
        this.setState({
          fillfood: fillfood.map(o => (o.id === fillFods.id ? updateFoods : o))
        });
        const filterOrder = orderan.filter(item => item.id !== id);
        this.setState({
          orderan: filterOrder
        });
      } else {
        const updateOrders = {
          ...fillOrder,
          qty: fillOrder.qty - 1,
          price: fillOrder.price - fillOrder.harga
        };
        const updateFoods = { ...fillFods, qty: fillFods.qty - 1 };
        this.setState({
          fillfood: fillfood.map(o => (o.id === fillFods.id ? updateFoods : o)),
          orderan: orderan.map(o => (o.id === fillOrder.id ? updateOrders : o))
        });
      }
      this.kurangPrice(fillFods.harga);
    }
  };
  addPrice = harga => {
    this.setState({
      total: this.state.total + harga
    });
  };

  kurangPrice = harga => {
    this.setState({
      total: this.state.total - harga
    });
  };

  state = {
    fillfood: [],
    orderan: [],
    total: 0
  };

  render() {
    return (
      <div>
        <div style={{ padding: '50px' }}>
          <Row>
            {this.state.fillfood.map(foods => {
              return (
                <Col sm>
                  {' '}
                  <CardFood
                    nama={foods.nama}
                    gambar={foods.gambar}
                    harga={foods.harga}
                    qty={foods.qty}
                    kurang={() => this.kurang(foods.id)}
                    tambah={() => this.tambah(foods.id)}
                  />{' '}
                </Col>
              );
            })}
          </Row>
        </div>
        <center>
          <div style={{ padding: '50px' }}>
            <Table dark>
              <thead style={{ backgroundColor: 'blue' }}>
                <tr>
                  <th style={{ color: 'white' }}>Nama Pesan</th>
                  <th style={{ color: 'white' }}>Jumlah</th>
                  <th style={{ color: 'white' }}>Harga</th>
                </tr>
              </thead>

              <tbody>
                {this.state.orderan.map(orders => (
                  <tr>
                    <td style={{ color: 'white' }}>{orders.nama}</td>
                    <td style={{ color: 'white' }}>{orders.qty}</td>
                    <td style={{ color: 'white' }}>{orders.harga}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <h3 style={{ color: 'blue' }}>Total : {this.state.total}</h3>
            <Button variant="contained" color="primary">
              Bayar
            </Button>
          </div>
        </center>
      </div>
    );
  }
}

export default DashFood;
