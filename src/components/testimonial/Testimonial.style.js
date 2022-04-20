import styled from "styled-components";

export const StyledTestimonial = styled.section`
  background-color: #ffcf04;
  padding-bottom: 135px;
  position: relative;
  z-index: 10;
  .row {
    margin-right: -15px;
    margin-left: -15px;
    overflow: hidden;
    .title {
      padding-top: 99px;
      position: relative;
      z-index: 2;
      overflow: hidden;
      p{
        max-width: 1013px;
        color: #000;
        font-family: sans-serif;
        font-size: 32px;
        line-height: 38px;
        padding-left: 20px;
        word-break: break-word;
        margin: 0 0 10px;
      }
    }
    .subtitle {
      padding-top: 25px;
      position: relative;
      z-index: 2;
      overflow: hidden;
      p{
        max-width: 627px;
        color: #000;
        font-family: sans-serif;
        font-size: 38px;
        line-height: 38px;
        padding-left: 20px;
        word-break: break-word;
        margin: 0 0 10px;
      }
    }
  }
  @media (max-width: 400px) {
    display: none !important;
  }
`;
