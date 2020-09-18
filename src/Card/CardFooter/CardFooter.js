import React from "react";
import "./CardFooter.css";

const CardFooter = ({
  selected,
  active,
  selectedText,
  supplements,
  selectItem,
}) => {
  if (!active) {
    return (
      <div className="card_footer_none">
        Печалька, {supplements} закончился.
      </div>
    );
  } else if (selected) {
    return <div className="card_footer_selected">{selectedText}</div>;
  } else {
    return (
      <div className="card_footer">
        Чего сидишь? Порадуй котэ,
        <a className="card_footer_link" onClick={() => selectItem()}>
          купи
        </a>
      </div>
    );
  }
};

export default CardFooter;
