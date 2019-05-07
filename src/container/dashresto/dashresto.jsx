import React, { Component } from 'react';
import resto from '../../util/resto';
import Cardresto from '../../components/cardresto/cardresto';

class Dashresto extends Component {
  state = {
    base: []
  };

  componentDidMount() {
    this.setState({
      base: resto
    });
  }

  render() {
    return (
      <div>
        <div class="row">
          {this.state.base.map(item => {
            return (
              <div class="col-sm-4">
                <Cardresto item={item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Dashresto;
