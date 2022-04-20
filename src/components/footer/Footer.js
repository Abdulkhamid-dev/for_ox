import React from "react";
import { StyledConatiner } from "../container/Container.style";
import { StyledFooter } from "../footer/Footer.style";

function Footer() {
  return (
    <StyledFooter>
      <StyledConatiner>
        <div class="row">
          <p>© 2012-2018 ЧП “ОКS-TECHNOLOGIES” | im@oks.uz</p>
          <p>
            Все работы защищены авторскими правами. Копирование и использование
            материалов только с разрешения компании
          </p>
        </div>
      </StyledConatiner>
    </StyledFooter>
  );
}

export default Footer;
