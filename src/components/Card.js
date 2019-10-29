import React, { Component } from 'react';
import './styles/Card.css';
import exerciseImg from '../assets/images/exercise.png';
import circlesImg from '../assets/images/circles.png';

export default class Card extends Component {
  render() {
    return (
      <div
        className="card mx-auto Fitness-Card"
        style={{
          backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${this.props.leftColor}, ${this.props.rightColor})`
        }}
      >
        <div className="card-body">
          <div className="row center">
            <div className="col-6">
              <img src={this.props.img} className="float-right" />
            </div>
            <div className="col-6 Fitness-Card-Info">
              <h1>{this.props.title}</h1>
              <p>{this.props.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
