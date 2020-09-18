import React from "react";
import "./CardHeader.css";

const CardHeader = ({ selected, hover, enter }) => {
  if (selected && enter && hover) {
    return (
      <div className="card_header card_header_pink">Котэ не одобряет?</div>
    );
  } else {
    return <div className="card_header">Сказочное заморское яство</div>;
  }
};

export default CardHeader;
