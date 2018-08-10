import React from "react";
import From from "../Form";
import List from "../List";
import PubSub from "pubsub-js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commonts: [
        {
          username: "Jeff",
          context: "React 很好用！"
        },
        {
          username: "Imppy",
          context: "React 好难学！"
        },
        {
          username: "Maikoo",
          context: "正在学 React！"
        }
      ]
    };
  }
  componentWillMount() {
    PubSub.subscribe("message", (msg, data) => {
      let { commonts } = this.state;
      commonts.splice(data, 1);
      this.setState({
        commonts
      });
    });
  }
  add = commont => {
    let { commonts } = this.state;
    commonts.unshift(commont);
    this.setState({
      commonts
    });
  };

  render() {
    let { commonts } = this.state;
    let add = this.add;
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <From add={add} />
          <List commonts={commonts} />
        </div>
      </div>
    );
  }
}

export default App;
