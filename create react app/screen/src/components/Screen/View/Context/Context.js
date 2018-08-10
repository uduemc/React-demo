import React from "react";
class Context extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
      context:
        "这里显示文本内容我们精心挑选了一些文档，特别推荐给您，它们都是点击率非常高的文档。当然，还有一些您可能以前没有看到的新文档。有人认为上海这是明目张胆地和北京抢顶尖人才，毕竟北京没有清北落户政策，各地开启人才大战，这样下去人才资源分布越来越不均衡，最终会造成欠发达地区愈加的落后！"
    };
  }

  render() {
    let { isShow, context } = this.state;
    return (
      <div>
        {}
        <div
          className="context"
          onClick={() => {
            let _state = this.state;
            _state.isShow = false;
            this.setState(_state);
          }}
          style={{ display: isShow ? "block" : "none" }}
        >
          {context}
        </div>
        <div
          className="spar"
          onClick={() => {
            let _state = this.state;
            _state.isShow = true;
            this.setState(_state);
          }}
          style={{ display: isShow ? "none" : "flex" }}
        >
          ≡
        </div>
      </div>
    );
  }
}

export default Context;
