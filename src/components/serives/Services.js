import React from "react";
import { StyledServices } from "./Services.style";
import { StyledConatiner } from "../container/Container.style";
import { ReactComponent as SiteCreate } from "../../assets/img/create_site.svg";
import { ReactComponent as DesignInterface } from "../../assets/img/design_interface.svg";
import { ReactComponent as Projected } from "../../assets/img/projected.svg";
import { ReactComponent as Integration } from "../../assets/img/integration.svg";
import { ReactComponent as Media } from "../../assets/img/media.svg";
import { ReactComponent as UxUi } from "../../assets/img/ui_ux.svg";
import { ReactComponent as ChartPie } from "../../assets/img/chart_pie.svg";
import { ReactComponent as GraphicDesign } from "../../assets/img/graphic_design.svg";
import { ReactComponent as Branding } from "../../assets/img/branding.svg";

function Services() {
  return (
    <StyledServices>
      <StyledConatiner>
        <div className="section_title">
          <div>
            <p>
              Чтобы выполнить задачу надо его изучить и пройти очень огромную
              дорогу опыта. Вот те задачи, которые мы можем решать
              профессионально и быстро
            </p>
          </div>
        </div>
        <div className="section_columns">
          <div className="columns">
            <a href="#!">
              <div className="wrapper">
                <div className="top_img">
                  <SiteCreate className="icons" />
                </div>
                <div className="text_1">
                  <p>Создание сайтов</p>
                </div>
                <div className="text_2">
                  <p>
                    Комплекс работ от проектирования до программирования,
                    выполняемый поэтапно.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="columns">
            <a href="#!">
              <div className="wrapper">
                <div className="top_img">
                  <DesignInterface className="icons" />
                </div>
                <div className="text_1">
                  <p>Создание сайтов</p>
                </div>
                <div className="text_2">
                  <p>
                    Комплекс работ от проектирования до программирования,
                    выполняемый поэтапно.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="columns">
            <a href="#!">
              <div className="wrapper">
                <div className="top_img">
                  <Projected className="icons" />
                </div>
                <div className="text_1">
                  <p>Создание сайтов</p>
                </div>
                <div className="text_2">
                  <p>
                    Комплекс работ от проектирования до программирования,
                    выполняемый поэтапно.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="columns">
            <a href="#!">
              <div className="wrapper">
                <div className="top_img">
                  <Branding className="icons" />
                </div>
                <div className="text_1">
                  <p>Создание сайтов</p>
                </div>
                <div className="text_2">
                  <p>
                    Комплекс работ от проектирования до программирования,
                    выполняемый поэтапно.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="columns">
            <a href="#!">
              <div className="wrapper">
                <div className="top_img">
                  <Integration className="icons" />
                </div>
                <div className="text_1">
                  <p>Создание сайтов</p>
                </div>
                <div className="text_2">
                  <p>
                    Комплекс работ от проектирования до программирования,
                    выполняемый поэтапно.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="columns">
            <a href="#!">
              <div className="wrapper">
                <div className="top_img">
                  <Media className="icons" />
                </div>
                <div className="text_1">
                  <p>Создание сайтов</p>
                </div>
                <div className="text_2">
                  <p>
                    Комплекс работ от проектирования до программирования,
                    выполняемый поэтапно.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="columns">
            <a href="#!">
              <div className="wrapper">
                <div className="top_img">
                  <UxUi className="icons" />
                </div>
                <div className="text_1">
                  <p>Создание сайтов</p>
                </div>
                <div className="text_2">
                  <p>
                    Комплекс работ от проектирования до программирования,
                    выполняемый поэтапно.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="columns">
            <a href="#!">
              <div className="wrapper">
                <div className="top_img">
                  <ChartPie className="icons" />
                </div>
                <div className="text_1">
                  <p>Создание сайтов</p>
                </div>
                <div className="text_2">
                  <p>
                    Комплекс работ от проектирования до программирования,
                    выполняемый поэтапно.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="columns">
            <a href="#!">
              <div className="wrapper">
                <div className="top_img">
                  <GraphicDesign className="icons" />
                </div>
                <div className="text_1">
                  <p>Создание сайтов</p>
                </div>
                <div className="text_2">
                  <p>
                    Комплекс работ от проектирования до программирования,
                    выполняемый поэтапно.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </StyledConatiner>
    </StyledServices>
  );
}

export default Services;
