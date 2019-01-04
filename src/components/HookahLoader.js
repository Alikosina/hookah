import * as React from "react";
import Loader from "react-loader-spinner";
import "./HookahLoader.scss";

export default class HookahLoader extends React.Component {
  render() {
    return (
      <div className="hookah-loader">
        <Loader type="Triangle" color="#00BFFF" height="100" width="100" />
      </div>
    );
  }
}
