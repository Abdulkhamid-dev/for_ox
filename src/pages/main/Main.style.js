import styled from "styled-components";

export const StyledMain = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .style_container{
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    position: absolute;
    height: 100%;
    left: 0;
    right: 0;
    z-index: 1;
    top: 130px;
    bottom: 0;
    padding: 0;
  }
    .line_frame2 {
      width: 100%;
      height: 100%;
      overflow: hidden;
      div{
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -moz-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: 0 15px;
        height: 100%;
        div{
          border-left: 1px solid hsla(0,0%,64%,.2);
          width: 0.1px;
          height: 100%;
          position: relative;
          &::before {
            position: absolute;
            width: 3px;
            height: 33px;
            background-color: rgba(126,135,158,.9);
            content: "";
            top: -40px;
            left: -2px;
        }
      }
        }
      }
    }
    @media (min-width: 1200px){
      .container{
        width: 1170px;
      }
    }

`;
