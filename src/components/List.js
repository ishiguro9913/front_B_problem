import React from "react";
import { render } from "react-dom";

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const list = this.props.memos.map(memo => {
      return (
        <li>
          #{memo.id} - {memo.content}
        </li>
      );
    });
    return (
      <div>
        <h2>List</h2>
        {list}
      </div>
    );
  }
}

export default List;