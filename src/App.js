import React, { Component } from "react";
import "./App.css";
import Progress from "./actions/Progress";
import Home from './components/Home/home'
import TimeLine from "./components/Timeline/timeline";
import Footer from "./components/Footer/footer";
import SkillC from "./components/Skills/skillCarousels";
import Introduction from "./components/Introduction/introduction";
import "bootstrap/dist/css/bootstrap.min.css";
export default class App extends Component {
  state = {
    scrollPostion: 0
  };

  listenToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        this.calculateScrollDistance();
      });
    });
  };

  calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset; // how much the user has scrolled by
    const winHeight = window.innerHeight;
    const docHeight = this.getDocHeight();

    const totalDocScrollLength = docHeight - winHeight;
    const scrollPostion = Math.floor((scrollTop / totalDocScrollLength) * 100);

    this.setState({
      scrollPostion
    });
  };

  getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  };

  componentDidMount() {
    this.listenToScrollEvent();
  }

  render() {
    return (
      <div className="App">
        <Progress scroll={this.state.scrollPostion + "%"} />
        <Home />
        <Introduction />
        <SkillC />
        <TimeLine />
        <Footer />
      </div>
    );
  }
}
