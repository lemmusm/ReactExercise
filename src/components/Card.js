import React, { Component } from 'react';
import './styles/Card.css';
import exerciseImg from '../assets/images/exercise.png';

export default class Card extends Component {
  render() {
    return (
      <div className="card mx-auto Fitness-Card">
        <div className="card-body">
          <div className="row center">
            <div className="col-6">
              <img src={exerciseImg} className="float-right" />
            </div>
            <div className="col-6 Fitness-Card-Info">
              <h1>Technique Guides</h1>
              <p>Learn amazing street workout and calisthenics</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
