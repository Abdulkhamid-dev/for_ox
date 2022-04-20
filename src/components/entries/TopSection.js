import React from "react";
import { StyledTopSection } from "./TopSection.style";
import { StyledConatiner } from "../container/Container.style";

function TopSection() {
  return (
    <StyledTopSection>
      <StyledConatiner>
      <div className="wrapper">
      <div className="row">
          <div className="content">
            <p>
              Агентство
              <br />
              технологии & дизайна
            </p>
            <a>
              <div className="btnBgcircle"> </div>
              <span className="btnText">Подробнее</span>
            </a>
          </div>
        </div>
      </div>
      </StyledConatiner>
    </StyledTopSection>
  );
}

export default TopSection;
