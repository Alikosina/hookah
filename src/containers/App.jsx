import * as React from "react";
import HookahLoader from "../components/HookahLoader";
import "babel-polyfill";
import "./App.scss";
import HeaderMenu from "./HeaderMenu";
import ProcessingContainer from "./ProcessingContainer";
import Form from "./Form";
import HookahCalculatorContainer from "./HookahCalculatorContainer";
import Footer from "./Footer";

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
        <HeaderMenu />
        <div className="main-bg">
          <div className="main-bg__text">
            <h1 className="main-bg__text__title">ДЫМGO</h1>
            <div className="main-bg__text__content">
              Доставка кальянов по Москве и Московской Области
            </div>
          </div>
        </div>
        <ProcessingContainer />
        <HookahCalculatorContainer />
        <Form />
        <Footer />
      </React.Fragment>
    );
  }
}
