import React from "react";
import Item from "./Item";

class List extends React.Component {
  render() {
    let { commonts } = this.props;
    let display = commonts.length ? "none" : "block";
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{ display }}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {commonts.map((item, index) => {
            return <Item key={index} index={index} commont={item} />;
          })}
        </ul>
      </div>
    );
  }
}

export default List;
