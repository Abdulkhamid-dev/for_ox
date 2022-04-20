import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: relative;
  z-index: 2;
  padding: 33px 25px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border-top: 1px solid hsla(0, 0%, 59%, 0.6);
  overflow: hidden;
  .row {
    margin-right: -15px;
    margin-left: -15px;
    p:first-child,
    p:last-child {
      color: #000;
      font-family: sans-serif;
      line-height: 19px;
      text-align: center;
      margin: auto;
    }
    .p:first-child {
      max-width: 402px;
      font-size: 16px;
      font-weight: 500;
      padding-bottom: 6px;
    }
    p:last-child {
        max-width: 561px;
        font-size: 14px;
    }
  }
`;
