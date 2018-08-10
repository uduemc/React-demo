import React from "react";
import PubSub from 'pubsub-js'
class Opteration extends React.Component {
  screen = () => {
    PubSub.publish('SCREEN',null)
  }
  render() {
    let screen = this.screen
    return (
      <div className="opteration">
        <span>主页</span>
        <span onClick={() => {
          screen()
        }}>截屏</span>
      </div>
    );
  }
}

export default Opteration;
