import * as React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  onCountChange = v => {
    const count = v.target.value;
    this.setState({ count });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("value = ", this.state);
    fetch("http://185.178.47.62:8081/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          id="count"
          type="text"
          value={this.state.count}
          onChange={this.onCountChange}
          placeholder="количество"
        />
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}
