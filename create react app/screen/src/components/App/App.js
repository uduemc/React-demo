import React from "react";
import Screen from "../Screen/Screen";
import PubSub from "pubsub-js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isScreen: false
    };
  }
  componentWillMount() {
    PubSub.subscribe("SCREEN", (msg, data) => {
      let _state = this.state;
      _state.isScreen = true;
      this.setState(_state);
    });
  }
  upload = () => {
    PubSub.publish("UPLOAD", null);
    let _state = this.state;
    _state.isScreen = false;
    this.setState(_state);
  };
  render() {
    let { isScreen } = this.state;
    let upload = this.upload;
    return (
      <div>
        <div
          style={{
            background: "#ffffff",
            height: "100vh",
            width: "100%",
            display: isScreen ? "block" : "none"
          }}
        >
          <div style={{ padding: "20px" }}>
            <p
              style={{
                textAlign: "center",
                background: "#AEEBFF",
                height: "88vh"
              }}
            >
              手机桌面
            </p>
            <div className="screen-button">
              <span
                onClick={() => {
                  let _state = this.state;
                  _state.isScreen = false;
                  this.setState(_state);
                }}
              >
                取消
              </span>
              <span
                onClick={() => {
                  upload();
                }}
              >
                上传
              </span>
            </div>
          </div>
        </div>
        <div style={{ display: isScreen ? "none" : "block" }}>
          <p style={{ textAlign: "center" }}>手机桌面</p>
          <Screen />
        </div>
      </div>
    );
  }
}

export default App;
