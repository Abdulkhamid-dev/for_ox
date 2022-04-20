import React from "react";
import { StyledConatiner } from "../container/Container.style";
import Sliders from "./Slider";
import { StyledTestimonial } from "./Testimonial.style";

function Testimonial() {
  return (
    <StyledTestimonial>
      <StyledConatiner>
        <div className="row">
          <div className="title">
            <p>
              Мы не можем себя похвалить из за того что нам всегда хочется
              создать или разработать лучше чем предыдущего проекта
            </p>
          </div>
          <div className="subtitle">
          <p>Но нашим клиентам всегда нравятся наши труды</p>
          </div>
        </div>
        <div className="row">
            <Sliders/>
        </div>
      </StyledConatiner>
    </StyledTestimonial>
  );
}

export default Testimonial;
