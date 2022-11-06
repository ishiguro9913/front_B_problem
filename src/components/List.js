import React from "react";
import { render } from "react-dom";

class List extends React.Component {
  render() {
    const list = this.props.memos.map(memo => {
      return (
        <li>
          <button onClick={() => this.props.deleteMemo(memo.id)}>X</button>
          {memo.content}
        </li>
      );
    });
    return (
      <div>
        <ul>{list}</ul>
      </div>
    );
  }
}

export default List;