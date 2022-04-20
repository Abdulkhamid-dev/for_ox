import React, { useState } from "react";
import { StyledHeader } from "./Header.style";
import { StyledConatiner } from "../container/Container.style";
import LogoImg from "../../assets/img/oks_logotip_svg.svg";
import Operator from "../../assets/img/woman-with-headset.svg";
import Menu from "../../assets/img/menu.svg";
import Close from "../../assets/img/x.svg";
import CallSenter from "../../assets/img/operator.svg";

function Header() {
  const [showMenu, SetShowMenu] = useState(false);

  const toggleMenu = () => {
    SetShowMenu(!showMenu);
  };

  return (
    <StyledHeader>
      <StyledConatiner>
        <div className="row">
          <div className="logoBlock">
            <img src={LogoImg} alt="Logo" />
          </div>
          <div className="navigationBar">
            <div className="contactInfo">
              <div className="phoneInfo">
                <a href="tel:+998 71 262 87 77">
                  <img src={Operator} alt="operator" />
                  <p>(71)2628777</p>
                </a>
              </div>
              <div className="shareInfo">
                <a href="#!"></a>
              </div>
            </div>
            <div className="menuBlock" onClick={toggleMenu}>
              <p>Меню</p>
              <img src={showMenu ? Close : Menu} alt="Icon" />
            </div>
          </div>
        </div>
        <div className="full_navbar" style={{ top: showMenu ? "0" : "-200%" }}>
          <StyledConatiner>
            <div className="hide_menu">
              <div className="col-md-6">
                <div className="left_side_inner">
                  <ul className="menu_lists">
                    <li className="list_item">
                      <a href="#!">Работы</a>
                    </li>
                    <li className="list_item">
                      <a href="#!">О компании</a>
                    </li>
                    <li className="list_item">
                      <a href="#!">Контакты</a>
                    </li>
                    <li className="list_item">
                      <a href="#!">Чем мы занимаемся</a>
                    </li>
                    <li className="list_item">
                      <a href="#!">Вакансии</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="right_side_inner">
                  <ul>
                    <li className="operator_list">
                      <img src={CallSenter} alt="operator" />
                      <p>
                        <b>Скорая помощь</b>
                        <br />
                        Телеграм: <a href="https://t.me/okstech">okstech</a>
                      </p>
                    </li>
                    <li className="other_list">
                      <a href="#!">OKS LIVE</a>
                      <p>
                        Прямая трансляция из нашего Telegram канала. Жизнь
                        студии, backstage проектов и вести с полей.
                      </p>
                    </li>
                    <li className="other_list">
                      <a href="#!">Наши клиенты</a>
                      <p>
                        Прямая трансляция из нашего Telegram канала. Жизнь
                        студии, backstage проектов и вести с полей.
                      </p>
                    </li>
                    <li className="other_list">
                      <a href="#!">Что говорят наши клиенты</a>
                      <p>
                        Прямая трансляция из нашего Telegram канала. Жизнь
                        студии, backstage проектов и вести с полей.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </StyledConatiner>
        </div>
      </StyledConatiner>
    </StyledHeader>
  );
}

export default Header;
