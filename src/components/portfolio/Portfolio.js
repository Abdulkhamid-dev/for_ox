import React from "react";
import { StyledPortfolio } from "./Portfolio.style";
import { StyledConatiner } from "../container/Container.style";
import webProject from "../../assets/img/web_project.jpg";
import webProjectSecond from "../../assets/img/web_project.2.jpg";
import webProjectThird from "../../assets/img/web_project.3.jpg";
import MobileProject from "../../assets/img/mobile.jpg";
import MobileProjectSecond from "../../assets/img/mobile.2.jpg";
import MobileProjectThird from "../../assets/img/mobile.3.jpg";
import MobileProjectFour from "../../assets/img/mobile.4.jpg";
import Logotip from "../../assets/img/logotip.jpg";
import LogotipSecond from "../../assets/img/logotip.2.jpg";
import HoverImg from "../../assets/img/hover_img.svg";

function Portfolio() {
  return (
    <StyledPortfolio>
      <StyledConatiner>
        <div className="row">
          <h2 className="portfolioTitle">ПОСЛЕДНИЕ И ЛУЧШИЕ РАБОТЫ</h2>
        </div>
        <div className="portfolioItem">
          <div className="wrapper">
            <a href="#!">
              <div>
                <img src={webProject} alt="project-img" />
                <span>Веб-проекты</span>
                <div className="hoverableBlock">
                  <div className="head_hoverable">
                    <img src={HoverImg} alt="icon" />
                  </div>
                  <div className="text_hoverable">
                    <p className="text_1">Skatch, Adobe Photoshop</p>
                    <p className="text_2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="portfolioItem">
          <div className="wrapper">
            <a href="#!">
              <div>
                <img src={webProjectSecond} alt="project-img" />
                <span>Веб-проекты</span>
                <div className="hoverableBlock">
                  <div className="head_hoverable">
                    <img src={HoverImg} alt="icon" />
                  </div>
                  <div className="text_hoverable">
                    <p className="text_1">Skatch, Adobe Photoshop</p>
                    <p className="text_2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="portfolioItem">
          <div className="wrapper">
            <a href="#!">
              <div>
                <img src={webProjectThird} alt="project-img" />
                <span>Логотипы</span>
                <div className="hoverableBlock">
                  <div className="head_hoverable">
                    <img src={HoverImg} alt="icon" />
                  </div>
                  <div className="text_hoverable">
                    <p className="text_1">Skatch, Adobe Photoshop</p>
                    <p className="text_2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="portfolioItem">
          <div className="wrapper">
            <a href="#!">
              <div>
                <img src={MobileProject} alt="project-img" />
                <span> Мобильные приложения </span>
                <div className="hoverableBlock">
                  <div className="head_hoverable">
                    <img src={HoverImg} alt="icon" />
                  </div>
                  <div className="text_hoverable">
                    <p className="text_1">Skatch, Adobe Photoshop</p>
                    <p className="text_2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="portfolioItem">
          <div className="wrapper">
            <a href="#!">
              <div>
                <img src={MobileProjectSecond} alt="project-img" />
                <span>Веб-проекты</span>
                <div className="hoverableBlock">
                  <div className="head_hoverable">
                    <img src={HoverImg} alt="icon" />
                  </div>
                  <div className="text_hoverable">
                    <p className="text_1">Skatch, Adobe Photoshop</p>
                    <p className="text_2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="portfolioItem">
          <div className="wrapper">
            <a href="#!">
              <div>
                <img src={MobileProjectThird} alt="project-img" />
                <span> Мобильные приложения </span>
                <div className="hoverableBlock">
                  <div className="head_hoverable">
                    <img src={HoverImg} alt="icon" />
                  </div>
                  <div className="text_hoverable">
                    <p className="text_1">Skatch, Adobe Photoshop</p>
                    <p className="text_2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="portfolioItem">
          <div className="wrapper">
            <a href="#!">
              <div>
                <img src={Logotip} alt="project-img" />
                <span>Логотипы</span>
                <div className="hoverableBlock">
                  <div className="head_hoverable">
                    <img src={HoverImg} alt="icon" />
                  </div>
                  <div className="text_hoverable">
                    <p className="text_1">Skatch, Adobe Photoshop</p>
                    <p className="text_2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="portfolioItem">
          <div className="wrapper">
            <a href="#!">
              <div>
                <img src={LogotipSecond} alt="project-img" />
                <span>Логотипы</span>
                <div className="hoverableBlock">
                  <div className="head_hoverable">
                    <img src={HoverImg} alt="icon" />
                  </div>
                  <div className="text_hoverable">
                    <p className="text_1">Skatch, Adobe Photoshop</p>
                    <p className="text_2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="portfolioItem">
          <div className="wrapper">
            <a href="#!">
              <div>
                <img src={MobileProjectFour} alt="project-img" />
                <span> Мобильные приложения </span>
                <div className="hoverableBlock">
                  <div className="head_hoverable">
                    <img src={HoverImg} alt="icon" />
                  </div>
                  <div className="text_hoverable">
                    <p className="text_1">Skatch, Adobe Photoshop</p>
                    <p className="text_2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </StyledConatiner>
        <div className="portfolio_link">
          <a>
            <div className="btnBgcircle"> </div>
            <span className="btnText">Показать все</span>
          </a>
        </div>
    </StyledPortfolio>
  );
}

export default Portfolio;
