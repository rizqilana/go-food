import React, { Component } from 'react';
import { Card, CardImg, CardBody, Button } from 'reactstrap';

export default class CardFood extends Component {
  render() {
    const { id, nama, harga, gambar } = this.props;
    return (
      <div style={{ padding: '10px' }}>
        <Card>
          <CardImg
            top
            width="100%"
            height="200"
            src={gambar}
            alt="Card image cap"
          />
          <CardBody>
            <center>
              <h3>{nama}</h3>
              <p> Harga : {harga}</p>
              <p>jumlah :</p>
              <h4>{this.props.qty}</h4>
              <h1 />
              <Button
                outline
                color="primary"
                style={{ width: 50 }}
                onClick={this.props.tambah}>
                +
              </Button>{' '}
              <Button
                outline
                color="warning"
                style={{
                  width: 50
                }}
                onClick={this.props.kurang}>
                -
              </Button>
            </center>
          </CardBody>
        </Card>
      </div>
    );
  }
}
