import React from "react";
import { ShimmerSimpleGallery } from "react-shimmer-effects";


class Shimmer extends React.Component{
  render() {
    return (
      <div>
        <ShimmerSimpleGallery card imageHeight={300} caption />
      </div>
    );
  }
}

export default Shimmer;