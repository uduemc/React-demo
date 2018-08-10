import React from "react";
import "./Screen.css";

import View from "./View/View";
import Loading from "./Loading/Loading";
import PubSub from "pubsub-js";

class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: "50%",
      right: "0px",
      isLoading: true,
      isShow: true
    };
    setTimeout(() => {
      let _state = this.state;
      _state.isLoading = false;
      this.setState(_state);
    }, 1000);
  }
  componentWillMount() {
    PubSub.subscribe("UPLOAD", (msg, data) => {
      let _state = this.state;
      _state.isLoading = true;
      this.setState(_state);

      setTimeout(() => {
        _state = this.state;
        _state.isLoading = false;
        this.setState(_state);

        PubSub.publish("CONTEXT", null);
      }, 1000);
    });
  }
  render() {
    let { top, right, isLoading, isShow } = this.state;
    isShow = isShow ? "block" : "none";
    return (
      <div id="screen" style={{ top, right }}>
        <div className="container" style={{ display: isShow }}>
          <div className="main" style={{ left: "-200px" }}>
            {isLoading ? <Loading /> : <View />}
          </div>
        </div>
        <i
          className="icon"
          onClick={() => {
            let _state = this.state;
            _state.isShow = !_state.isShow;
            this.setState(_state);
          }}
        >
          <span>截</span>
        </i>
      </div>
    );
  }
}

export default Screen;
