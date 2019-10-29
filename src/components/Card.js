import React, { Component } from 'react';
import './styles/Card.css';
import exerciseImg from '../assets/images/exercise.png';
import circlesImg from '../assets/images/circles.png';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image:
        'https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c52f.png'
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        image:
          'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06'
      });
    }, 5000);
  }

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
              <img src={this.state.image} className="float-right" />
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
