import React from "react";

export const Title = ({ title }) => {
  return (
    <div>
      <h2 style={{ textDecoration: "underline", textDecorationColor: "darkred" }}>{title}</h2>
    </div>
  );
};
