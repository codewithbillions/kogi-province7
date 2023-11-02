"use client"
import React, { Component } from 'react'
// import { Container} from 'react-bootstrap'
// import Button from 'react-bootstrap/Button';

import "./youtube.css"

const API = 'AIzaSyD9WF6G-Z6vT2-hBM3EL0kOxOnfIfoHXgE'
const channelID = 'UCHp4qCAPmz7-5BJ601FDFnA'
const result = 1;

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&result=${result}`;

export class Youtube extends Component {

constructor(props) {
  super(props);

    this.state = {
        resultyt: [],
    };
    this.clicked = this.clicked.bind(this);
};

clicked() {
  fetch(finalURL)
    .then((response) => response.json())
    .then((responsejson) => {
      const resultyt = responsejson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
      this.setState({resultyt})
    })
    .catch((error) => {
      console.error(error);
    });
};

  render() {

    return (
      <div >
        <div >
            <button variant="secondary" style={{justifyContent: "center", fontSize: "100%",margin: "-1%" }} onClick={this.clicked}>CLICK TO WATCH RCCG YOUTUBE VIDEOS</button>
            {
                this.state.resultyt.map((link, i) => {
            var frame = <div className="youtube ratio ratio-16x9"> <iframe  key={i} src={link} title="rccg" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
            return frame
                })
            }
            {this.frame}
            </div>
      </div>
    );
  }
}

export default Youtube