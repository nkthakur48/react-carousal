import React, { Component } from "react";
import CenterImage from "./components/CenterImage/CenterImage";
import NavButtons from "./components/NavButtons/NavButtons";
import ThumbnailStrip from "./components/ThumbnailStrip/ThumbnailStrip";
import "./App.css";

const images = [
  "https://stimg.cardekho.com/images/car-images/large/Skoda/Skoda-Rapid/1464/1549455048226/Candy-White.jpg",
  "https://www.ericsson.com/4ade1c/assets/content/74caa85fd1c140b6bd150639a23c495a/en/volvo-interior-view.jpg?w=1212",
  "https://www.mgmotor.co.in/content/dam/mgmotor/mghector/overviewOption-mobilePortrait.jpg",
  "https://imgd.aeplcdn.com/642x361/cw/ec/40842/Vision-M-Next-Concept-161133.jpg?wm=1&q=85",
  "https://shift.com/images/car_diagram/car_inspection@2x.2L3fzwdF.png",
  "https://image.cnbcfm.com/api/v1/image/106010244-1562708838619bencon-1.jpg",
  "http://silodrome.com/wp-content/uploads/2013/09/iPhone-4-4S.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV4-Rwo5Agz9jjlIepyZhO9DPVivJOlvVsHdiqpk9ZWO-_fvvv",
  "https://i.pinimg.com/736x/57/01/4b/57014bd04a3726198d343be1e8b2c193--aston-martin-db-classic-aston-martin.jpg",
  "https://d2eohwa6gpdg50.cloudfront.net/wp-content/uploads/2019/05/30163913/Ferrari_SF90_Stradale_3.jpg",
  "https://d2eohwa6gpdg50.cloudfront.net/wp-content/uploads/2019/05/30163930/Ferrari_SF90_Stradale_7.jpg",
  "https://d2eohwa6gpdg50.cloudfront.net/wp-content/uploads/2019/05/30163707/Ferrari_SF90_Stradale_5.jpg",
  "https://miro.medium.com/max/5040/1*aJfK7a2mbXb6uT8yMKS1uw.jpeg"
];
class App extends Component {
  state = { selectedIndex: 0 };

  clickNavButtonsHandler = direction => {
    if (direction === "left") {
      this.setState(prevState => {
        if (prevState.selectedIndex === 0) {
          return { selectedIndex: images.length - 1 };
        } else {
          return { selectedIndex: prevState.selectedIndex - 1 };
        }
      });
    } else if (direction === "right") {
      this.setState(prevState => {
        if (prevState.selectedIndex === images.length - 1) {
          return { selectedIndex: 0 };
        } else {
          return { selectedIndex: prevState.selectedIndex + 1 };
        }
      });
    }
  };
  clickThumbnailHandler = imageIndex => {
    this.setState({ selectedIndex: imageIndex });
  };
  render() {
    return (
      <div className="app-container">
        <CenterImage imageURL={images[this.state.selectedIndex]} />
        <NavButtons click={this.clickNavButtonsHandler} />
        <ThumbnailStrip
          images={images}
          click={this.clickThumbnailHandler}
          selectedIndex={this.state.selectedIndex}
        />
      </div>
    );
  }
}

export default App;
