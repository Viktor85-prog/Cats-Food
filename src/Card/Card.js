import React, { Component } from "react";
import "./Card.css";
import CardHeader from "./CardHeader/CardHeader";
import CardFooter from "./CardFooter/CardFooter";
import Background from "../assets/img/Photo.png";

class Card extends Component {
  state = {
    active: this.props.item.active,
    selected: this.props.item.selected,
    hover: true,
    enter: false,
  };

  declOfNum(number, words) {
    return words[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? number % 10 : 5]
    ];
  }
  selectItem = () => {
    if (this.state.active) {
      this.setState({
        selected: !this.state.selected,
        hover: false,
      });
    }
  };

  onMouseLeave = () => {
    this.setState({
      hover: true,
      enter: false,
    });
  };

  onMouseEnter = () => {
    this.setState({
      enter: true,
    });
  };

  render() {
    const { hover, enter, selected } = this.state;
    const {
      supplements,
      portions,
      mouses,
      customer,
      weight,
      selectedText,
      active,
    } = this.props.item;
    const hiddenCustomer = customer ? "card_thanks" : "hidden";
    const activeClassNames = !active ? "card card_disable" : "card card_blue";
    const active_cat = !active ? "active_cat" : {};
    const selectedClassNames = selected
      ? `${activeClassNames} card_selected`
      : `${activeClassNames}`;
    const hoverClasses = hover
      ? `${selectedClassNames} hover`
      : `${selectedClassNames}`;
    return (
      <div className="card-item">
        <div
          className={hoverClasses}
          onClick={this.selectItem}
          onMouseLeave={this.onMouseLeave}
          onMouseEnter={this.onMouseEnter}
        >
          <CardHeader selected={selected} hover={hover} enter={enter} />
          <div className="card_title">Нямушка</div>
          <div className="card_variant">{supplements}</div>
          <div className="card_info">
            <div className="card_portions">
              <span>{portions}</span>
              {this.declOfNum([portions], [" порция", " порции", " порций"])}
            </div>

            <div className="card_gift">
              <span>{mouses}</span>
              {this.declOfNum([mouses], [" мышь", " мыши", " мышей"])} в подарок
            </div>
            <div className={hiddenCustomer}>заказчик доволен</div>
          </div>
          <div className="card_cat">
            <img src={Background} className={active_cat} />
          </div>

          <div className="card_weight">
            <div className="card_weight-inn">{weight}</div>
            <div className="cart_weight_measurement">кг</div>
          </div>
        </div>
        <CardFooter
          selected={selected}
          active={active}
          selectedText={selectedText}
          supplements={supplements}
          selectItem={this.selectItem}
        />
      </div>
    );
  }
}

export default Card;
