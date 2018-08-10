import React from "react";
import Search from "./Search";
import axios from "axios";
import Card from "./Card";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      message: "请输入搜索的名字"
    };
  }
  search = keyword => {
    let url = "https://api.github.com/search/users?q=" + keyword;
    this.setState({
      data: null,
      message: "Loading......"
    });
    axios
      .get(url)
      .then(response => {
        let data = response.data;
        this.setState({
          data,
          message: "请输入搜索的名字"
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    const search = this.search;
    const { data, message } = this.state;
    return (
      <div className="container">
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <Search search={search} />
        </section>
        <div className="row">
          {!data && message}
          {data &&
            data.items.length &&
            data.items.map((item, index) => {
              return <Card key={index} item={item} />;
            })}
        </div>
      </div>
    );
  }
}

export default App;
