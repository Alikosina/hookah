import * as React from "react";
import HookahLoader from "../components/HookahLoader";
import "babel-polyfill";
import "./App.scss";
import HeaderMenu from "./HeaderMenu";
import ProcessingContainer from "./ProcessingContainer";
import Form from "./Form";
import HookahCalculatorContainer from "./HookahCalculatorContainer";
import Footer from "./Footer";
import Modal from "react-modal";

const customStyles = {
  content: {
    width: "50%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    fontFamily: "Roboto",
    textAlign: "center",
    color: "#000"
  }
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      title: "Eliava's Hookah",
      callbackPhone: ""
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

  onChangeCallbackPhone = e => {
    const callbackPhone = e.target.value;
    this.setState({ callbackPhone });
  };

  onSubmit = e => {
    e.preventDefault();
    const { callbackPhone } = this.state;
    fetch("http://185.178.47.62:8081/callback", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ callbackPhone })
    });
    // .then(r => {
    //   if (r.status !== 200) {
    //     this.setState({
    //       failed: true
    //     });
    //   } else {
    //     this.setState({
    //       succeed: true
    //     });
    //   }
    // })
    // .catch(() => {
    //   this.setState({
    //     failed: true
    //   });
    // });
  };

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
        <div className="callback">
          <i className="Phone is-animating" />
        </div>
        <Modal style={customStyles} isOpen={true}>
          <h2 className="callback-modal__title">
            Мы Вам обязательно перезвоним!
          </h2>
          <form onSubmit={this.onSubmit} action="">
            <label htmlFor="callback">Введите телефон </label>
            <input id="callback" type="text" />
            <button type="submit">Отправить телефон</button>
          </form>
        </Modal>
      </React.Fragment>
    );
  }
}
