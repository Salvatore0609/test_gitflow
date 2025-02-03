import { Component } from "react";

class ImageComponent extends Component {
  render() {
    console.log("THIS", this);

    return (
      <>
        <img src={this.props.imageUrl} alt={this.props.alt} width={this.props.width} />
      </>
    );
  }
}

export default ImageComponent;
