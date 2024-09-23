import React from "react";
import { Title } from "./Title";

export const Contacts = () => {
  return (
    <div>
      <section className="contact" id="contact">
        <div>
          <Title title="Contact" />
        </div>
        <div className="socialContainer">
          <div className="socialIcon">
            <div>
              <i className="fa-brands fa-linkedin" style={{ color: "#0077B5" }}></i>
              <br />
              LinkedIn
            </div>
            <div>
              <i className="fa-brands fa-github"></i>
              <br />
              Github
            </div>
            <div>
              <i class="fa-brands fa-facebook" style={{ color: " #0077B5" }}></i>
              <br />
              Facebook
            </div>
            <div>
              <i className="fa-brands fa-youtube" style={{ color: "#FF0000" }}></i>
              <br />
              Youtube
            </div>
          </div>
          <div>OR</div>
          <div className="search">
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZdBdTPGNcJfqxrDVtMnMszcLJgmlzqHKVmRWZMznLhZqfbVzZwGwxqljKkCSgTsxTtVMg"
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              <p className="email">
                chaudharymilan86@gmail.com{" "}
                <button style={{ borderRadius: "50%" }} className="button1">
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
