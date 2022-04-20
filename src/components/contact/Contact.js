import React from "react";
import { StyledConatiner } from "../container/Container.style";
import { StyledContact } from "../contact/Contact.style";
import Tea_1 from "../../assets/img/tea_1.png";
import Tea_2 from "../../assets/img/tea_2.png";
import Tea_3 from "../../assets/img/tea_3.png";
import Tea_4 from "../../assets/img/tea_4.png";

function Contact() {
  return (
    <StyledContact>
      <StyledConatiner>
        <div className="col-12">
          <h2>
            Мы очень рады вас пригласить выпить кофе и обсуждать ваш проект
            подробнее
          </h2>
        </div>
        <div className="form_row">
          <form>
            <div className="col-6">
              <div>
                <div className="form_group">
                  <div className="input_group">
                    <input type="text" name="name" />
                    <span>Ваше имя</span>
                  </div>
                  <div className="input_group">
                    <input type="number" name="name" />
                    <span>Телефон</span>
                  </div>
                  <div className="input_group">
                    <input type="text" name="name" />
                    <span>О вашим проекте (Не обязательно)</span>
                  </div>
                </div>
                <h2 className="checkbox_title">Какими услугами будете воспользоваться?</h2>
                <div className="checkbox_group">
                  <div className="col-md-6">
                    <div>
                      <label>
                        <input type="checkbox" />
                        Backend
                      </label>
                      <label>
                        <input type="checkbox" />
                        FrontEnd
                      </label>
                      <label>
                        <input type="checkbox" />
                        Веб дизайн
                      </label>
                      <label>
                        <input type="checkbox" />
                        Графический дизайн
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div>
                      <label>
                        <input type="checkbox" />
                        Дизайн мобильного приложения
                      </label>
                      <label>
                        <input type="checkbox" />
                        Логотипы и брендбуки
                      </label>
                      <label>
                        <input type="checkbox" />
                        Разработка веб сайтов
                      </label>
                      <label>
                        <input type="checkbox" />
                        Разработка интернет магазина
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 radio_column">
              <div className="tea_group">
                <h2 className="tea_group_title">Что вы предпочитаете?</h2>
                <div className="row">
                  <div className="tea_form_group">
                    <form>
                      <div className="radio_col-6">
                      <div className="radio_wrapper">
                          <div>
                            <label>
                              <input
                                type="radio"
                                className="radio"
                                name="radio"
                                value="tea1"
                                id="tea1"
                              />
                              <img src={Tea_1} alt="tea" />
                            </label>
                          </div>
                        <label className="under_label" htmlFor="tea1">Каппучино</label>
                        </div>
                      </div>
                      <div className="radio_col-6">
                        <div className="radio_wrapper">
                          <div>
                            <label>
                              <input
                                type="radio"
                                className="radio"
                                name="radio"
                                value="tea2"
                                id="tea2"
                              />
                              <img src={Tea_2} alt="tea" />
                            </label>
                          </div>
                        <label className="under_label" htmlFor="tea2">Чай</label>
                        </div>
                      </div>
                      <div className="radio_col-6">
                      <div className="radio_wrapper">
                          <div>
                            <label>
                              <input
                                type="radio"
                                className="radio"
                                name="radio"
                                value="tea3"
                                id="tea3"
                              />
                              <img src={Tea_3} alt="tea" />
                            </label>
                          </div>
                        <label className="under_label" htmlFor="tea3">Черный</label>
                        </div>
                      </div>
                      <div className="radio_col-6">
                      <div className="radio_wrapper">
                          <div>
                            <label>
                              <input
                                type="radio"
                                className="radio"
                                name="radio"
                                value="tea4"
                                id="tea4"
                              />
                              <img src={Tea_4} alt="tea" />
                            </label>
                          </div>
                        <label className="under_label" htmlFor="tea4">Эспрессо</label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="carousel_link">
          <a>
            <div className="btnBgcircle"> </div>
            <span className="btnText">Стать клиентом</span>
          </a>
        </div>
      </StyledConatiner>
    </StyledContact>
  );
}

export default Contact;
