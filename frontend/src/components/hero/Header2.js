import React, { createRef, useEffect } from "react";
import { gsap, TweenMax, Linear, Bounce, Power4 } from "gsap";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Header.css";
function Header2() {
  const title = createRef(null);

  function parallaxIt(e, target, movement) {
    var continer = document.querySelector(".header");
    var relX = e.pageX - continer.getBoundingClientRect().left;
    var relY = e.pageY - continer.getBoundingClientRect().top;

    TweenMax.to(target, 1, {
      x: ((relX - continer.clientWidth / 2) / continer.clientWidth) * movement,
      y:
        ((relY - continer.clientHeight / 2) / continer.clientHeight) * movement,
    });
  }
  useEffect(() => {
    const elem = document.querySelector(".projectTitle");

    const width = title.current.clientWidth;
    const height = title.current.clientHeight;

    elem.onmousemove = function (e) {
      const oX = (e.clientX / width) * 100 - 30;
      const oY = (e.clientY / height) * 100 - 30;
      elem.style.setProperty("--maskX", oX);
      elem.style.setProperty("--maskY", oY);
    };
    elem.onmouseleave = function () {
      elem.style.setProperty("--maskX", 0);
      elem.style.setProperty("--maskY", 50);
    };

    const hero = document.querySelector(".header");

    hero.onmousemove = function (e) {
      parallaxIt(e, ".illustration img", 30);
    };
  });

  return (
    <header>
      <div className="header">
        <Container>
          <div className="left">
            <div ref={title} className="projectTitle">
              <div className="titleWrapper">
                <div className="part">
                  <div className="letterWrapper">
                    <span>A</span>
                  </div>
                  <div className="letterWrapper">
                    <span>l</span>
                  </div>
                  <div className="letterWrapper">
                    <span>l</span>
                  </div>
                </div>
                <div className="part">
                  <div className="letterWrapper lineWrapper">
                    <span className="line"></span>
                  </div>
                  <div className="letterWrapper">
                    <span>i</span>
                  </div>
                  <div className="letterWrapper">
                    <span>e</span>
                  </div>
                  <div className="letterWrapper">
                    <span>s</span>
                  </div>
                </div>
              </div>
              <div className="titleWrapper cloneWrapper">
                <div className="part">
                  <div className="letterWrapper">
                    <span>A</span>
                  </div>
                  <div className="letterWrapper">
                    <span>l</span>
                  </div>
                  <div className="letterWrapper">
                    <span>l</span>
                  </div>
                </div>
                <div className="part">
                  <div className="letterWrapper lineWrapper">
                    <span className="line"></span>
                  </div>
                  <div className="letterWrapper">
                    <span>i</span>
                  </div>
                  <div className="letterWrapper">
                    <span>e</span>
                  </div>
                  <div className="letterWrapper">
                    <span>s</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hook">
              <p className="line">
                Allies Investment Group
                <span style={{ display: "inline-block" }}>
                  Merging Different Technologies
                </span>
              </p>
            </div>
          </div>
          <div className="background"></div>
          <div className="illustration">
            <img src={`${process.env.PUBLIC_URL}/assets/33.png`} alt="" />
          </div>
        </Container>
      </div>
    </header>
  );
}

export default Header2;
