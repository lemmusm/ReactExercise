import React, { Component } from 'react';
import './styles/Card.css';
import circlesImg from '../assets/images/circles.png';

export default class Card extends Component {
  render() {
    const { title, description, img, leftColor, rightColor } = this.props;
    return (
      <div
        className="card mx-auto Fitness-Card"
        style={{
          backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor}, ${rightColor})`
        }}
      >
        <div className="card-body">
          <div className="row center">
            <div className="col-6">
              <img src={img} className="float-right" alt="exercise-type"/>
            </div>
            <div className="col-6 Fitness-Card-Info">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
