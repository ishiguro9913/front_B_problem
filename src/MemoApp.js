import React from "react";
import { render } from "react-dom";

import Form from "./components/Form";
import List from "./components/List";

class MemoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      memos: [
        { id: 1, content: "one" },
        { id: 2, content: "two" },
        { id: 3, content: "three" },
        { id: 4, content: "four" },
        { id: 5, content: "five" }
      ],
      nextId: 0
    };
  }

  render() {
    return (
      <div>
        <h2>MemoApp</h2>
        <Form />
        <List memos={this.state.memos} />
      </div>
    );
  }
}

export default MemoApp;