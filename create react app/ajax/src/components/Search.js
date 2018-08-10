import React from "react";
class Search extends React.Component {
  search = () => {
    let value = this.refs.keyword.value.trim();
    if (!value) {
      return;
    }
    this.props.search(value);
  };
  render() {
    const search = this.search;
    return (
      <div>
        <input
          type="text"
          ref="keyword"
          placeholder="enter the name you search"
        />
        <button onClick={search}>Search</button>
      </div>
    );
  }
}

export default Search;
