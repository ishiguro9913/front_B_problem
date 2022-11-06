import React from "react";
import { render } from "react-dom";

class List extends React.Component {
  render() {
    const { memos, deleteMemo } = this.props;
    const list = memos.map(memo => {
      return (
        <li key={memo.id}>
          <button onClick={() => deleteMemo(memo.id)}>X</button>
          <p>{memo.content}</p>
        </li>
      );
    });
    return (
      <div class="list">
        {list}
      </div>
    );
  }
}

export default List;