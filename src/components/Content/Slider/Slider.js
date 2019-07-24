//libraries
import React, {Component} from 'react';
import classes from "./Slider.scss";

import data from '../../../assets/data/Slider/data';

import SliderItem from "./SliderItem/SliderItem";


class Slider extends Component {
  state = {
    'number': 1,
    'start':false,
  }
  
  componentDidMount() {
    this.startInterval()
  }

  componentWillUnmount() {
    clearInterval(this.interval)    
    this.setState({
      start: false
    })
  }
  
  startInterval = () => {
    if (this.state.start) {
      clearInterval(this.interval)    
      this.setState({
        start: false
      })
    }
    else {
      this.interval = setInterval(() => this.changeSlide(), 5000);
      this.setState({
        start: true
      })
    }
  }
  
   changeSlide = () => {
     let number = this.state.number
     number ++
    if (number > 4) {
      number = 1
    }
    this.setState({
      number: number
    })
  }

  changeSlideLeft = () => {
    let number = this.state.number
    number --
   if (number < 1) {
     number = 4
   }
   this.setState({
     number: number
   })
  }


  render() {
    let playSymbol = "fa-play";
    if (this.state.start) {
      playSymbol = "fa-pause"
    }
    else {
      playSymbol = "fa-play"
    }
    return (
      <section className={classes.Slider}>
        <i className={classes.Left + " fas fa-chevron-left fa-3x"} onClick= {this.changeSlideLeft}></i>
        <ul className={classes.SliderList} >
          {data.map((index) => { 
            let background
            if (this.state.number === index.id) {
                background = true
              }
              else {
                background = false
              }
            return (
              <SliderItem 
                imgUrl={index.imgUrl} 
                key = {index.id}  
                background = {background}
              />
              )
             }
            )
          }
        </ul>
        <i className={classes.Right + " fas fa-chevron-right fa-3x"} onClick={this.changeSlide}></i>
        <div className={classes.StopPlay}><i className={"fas " + playSymbol } onClick={this.startInterval}></i> <span>{this.state.number}/4 </span></div>
    </section>
    )
  }
}

export default Slider;