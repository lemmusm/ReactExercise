import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Card from './components/Card';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Card
    title="Technique Guides"
    description="Learn amazing street workout and calisthenics"
    img="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06"
    leftColor="#a74cf2"
    rightColor="#617bfb"
  />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
