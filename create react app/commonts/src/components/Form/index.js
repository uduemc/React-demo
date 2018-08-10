import React from "react";

class From extends React.Component {
  add = () => {
    let username = this.refs.username.value;
    let context = this.refs.context.value;

    if (!username || !context) {
      alert("表单内容不能为空！");
      return;
    }

    const commont = {
      username,
      context
    };
    this.props.add(commont);

    this.refs.username.value = "";
    this.refs.context.value = "";
  };

  render() {
    let add = this.add;
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input
              type="text"
              className="form-control"
              placeholder="用户名"
              ref="username"
            />
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea
              className="form-control"
              rows="6"
              placeholder="评论内容"
              ref="context"
            />
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button
                onClick={add}
                type="button"
                className="btn btn-default pull-right"
              >
                提交
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default From;
