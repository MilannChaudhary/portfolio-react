import React from "react";

export const Card = ({ image, github, url, title, description }) => {
  return (
    <div>
      <div className="card1">
        <div className="image1">
          {" "}
          <img src={image} alt="Project-photo" />{" "}
        </div>
        <div className="content1">
          <p style={{ textAlign: "center " }}>
            <a href={github} target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href={url} target="_blank">
              <i className="fa-brands fa-chrome"></i>
            </a>
          </p>
          <p>{title}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
