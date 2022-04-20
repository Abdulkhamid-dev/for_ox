import React from "react";
import { StyledConatiner } from "../../components/container/Container.style";
import { StyledCallsection } from "../../components/callSection/Callsection.style";

function Callsection() {
  return (
    <StyledCallsection>
      <StyledConatiner>
        <div className="row">
         <div class="col-md-8">
            <div class="item">
              <p>
                Если не смогли найти информацию которую вы искали звоните или
                свзяжитесь с нами
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="link">
              <div>
                  <button>
                      Позвонить вам?
                  </button>
              </div>
            </div>
          </div>
         </div>
      </StyledConatiner>
    </StyledCallsection>
  );
}

export default Callsection;
