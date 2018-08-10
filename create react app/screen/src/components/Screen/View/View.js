import React from "react";

import Context from "./Context/Context";
import Opteration from "./Opteration/Opteration";

class View extends React.Component {

  render() {
    return (
      <div className="view">
        <Context />
        <Opteration />
      </div>
    );
  }
}

export default View;
