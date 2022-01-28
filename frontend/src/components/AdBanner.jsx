import { Component } from "react";

import banner0 from "./img/banner0.jpg";

class AdBanner extends Component {
  constructor() {
    super();

    this.state = {
      img: 1,
      display: "none",
    };
  }

  imgChangeLeft = () => {
    if (this.state.img > 3) {
      this.setState({
        img: 1,
      });
    } else {
      this.setState({
        img: this.state.img + 1,
      });
    }
  };

  imgChangeRight = () => {
    this.setState({
      img: 4,
    });
    if (this.state.img <= 1) {
      this.setState({
        img: 4,
      });
    } else {
      this.setState({
        img: this.state.img - 1,
      });
    }
  };

  buttonDisplayOn = () => {
    this.setState({
      display: "block",
    });
  };

  buttonDisplayOff = () => {
    this.setState({
      display: "none",
    });
  };

  componentDidMount() {
    setInterval(this.imgChangeLeft, 5000);
  }

  render() {
    return (
      <>
        <div className="banner">
          <div className="imgBx">
            <img className="img" src={banner0} alt="bannerImg" />
          </div>
        </div>
      </>
    );
  }
}

export default AdBanner;
