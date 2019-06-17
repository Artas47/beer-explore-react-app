import React, { Component } from "react";
import "../scss/Modal.scss";
import history from "../history";
import Spinner from "./spinner";
import crossSvg from "../svg/cross.svg";
import { Link } from "react-router-dom";

class Modal extends Component {
  renderModalContent = () => {
    if (!this.props.name && !this.props.image_url) {
      return <Spinner />;
    }
    return (
      <div onClick={e => e.stopPropagation()} className="modal__content">
        <img
          src={crossSvg}
          onClick={() => history.push("/")}
          className="modal__cancel"
          alt={this.props.name}
        />
        <img
          className="modal__img"
          src={this.props.img}
          alt={this.props.name}
        />
        <div className="modal__tagline">
          <i>{this.props.tagline}</i>
        </div>
        <div className="modal__name">{this.props.name}</div>
        <div className="modal__desc">{this.props.description}</div>
        <div className="modal__youmayalsolike">
          <h3 className="modal__youmayalsolike__text">You may also like</h3>

          {this.props.renderSuggestedBeers()}
        </div>
      </div>
    );
  };
  render() {
    return (
      <div onClick={() => history.push("/")} className="modal">
        {this.renderModalContent()}
      </div>
    );
  }
}

export default Modal;
