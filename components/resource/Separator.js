import React from "react";

export default function Separator(props) {
  const { heading, subheading } = props;
  return (
    <div className="separator">
      <h1>{heading}</h1>
      <hr />
      <p>{subheading}</p>
    </div>
  );
}
