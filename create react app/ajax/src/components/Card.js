import React from "react";
class Card extends React.Component {
  render() {
    const { avatar_url, login, html_url } = this.props.item;
    return (
      <div className="card">
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          <img src={avatar_url} alt="" style={{ width: "100px" }} />
        </a>
        <p className="card-text">{login}</p>
      </div>
    );
  }
}

export default Card;
