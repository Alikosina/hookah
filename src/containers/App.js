import * as React from "react";
import HookahLoader from "../components/HookahLoader";
import "babel-polyfill";
import "./App.scss";
import Form from "./Form";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      title: "Eliava's Hookah"
    };
  }

  //   getTitle() {
  //     return fetch("http://localhost:8081/getInfo")
  //       .then(res => res.json())
  //       .then(s => s.title);
  //   }

  async componentDidMount() {
    // const title = await this.getTitle();
    // this.setState({ title, loading: false });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  render() {
    if (this.state.loading) {
      return <HookahLoader />;
    }
    return (
      <React.Fragment>
        <h1>{this.state.title}</h1>
        <Form />
      </React.Fragment>
    );
  }
}
