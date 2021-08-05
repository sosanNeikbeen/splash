import React from "react";
import { Link } from "react-router-dom";
import "./ImageCard.css";
import { Button } from "semantic-ui-react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpan);
  }

  setSpan = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render() {
    return (
      <div
        className="image-card"
        style={{ gridRowEnd: `span ${this.state.spans}` }}
      >
        <img
          className="image-card-shadow"
          ref={this.imageRef}
          alt={this.props.image.description}
          src={this.props.image.urls.regular}
        ></img>
        <div className="image-card-overlay">
          <div className="content">
            <div className="center">
              <Button primary as={Link} to="/image/details">
                image details
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageCard;
