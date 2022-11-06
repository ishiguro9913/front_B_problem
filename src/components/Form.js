import React from "react";
import { render } from "react-dom";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = { content: "" };
  }

  render() {
    return (
      <div>
        <form onSubmit={this.hamdleSubmit}>
          <input type="text" value={this.state.content} onChange={this.handleChange} />
          <input type="submit" value="追加" />
        </form>
      </div>
    );
  }

  handleChange = event => {
    const content = event.target.value;
    this.setState({ content: content });
  };

  hamdleSubmit = event => {
    event.preventDefault();
    this.props.addMemo(this.state.content);
    this.setState({ content: "" });
  };
}

export default Form;