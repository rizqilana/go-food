import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';

export default class Cardresto extends Component {
  render() {
    const { id, nama, alamat, gambar } = this.props.item;
    return (
      <div style={{ padding: '30px' }}>
        <Card>
          <CardImg
            top
            width="100%"
            height="200"
            src={gambar}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{nama}</CardTitle>
            <CardSubtitle>{alamat}</CardSubtitle>
            <Link tag={Link} to={`/restoran/${id}`}>
              <Button color="primary">masuk</Button>
            </Link>
          </CardBody>
        </Card>
      </div>
    );
  }
}
