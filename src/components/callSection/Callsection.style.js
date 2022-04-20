import styled from "styled-components";

export const StyledCallsection = styled.section`
  padding-bottom: 61px;
  z-index: 20;
  .row {
    margin-right: -15px;
    margin-left: -15px;
    display: flex;
    align-items: center;
    border: 1px solid #e7e0e0;
    &:before {
      display: table;
      content: " ";
    }
    &:after {
      display: table;
      content: " ";
      clear: both;
    }
    .col-md-8,
    .col-md-4 {
      position: relative;
      min-height: 1px;
      padding-right: 15px;
      padding-left: 15px;
      float: left;
    }
    .item {
      padding: 57px 67px;
      p {
        max-width: 627px;
        color: #000;
        font-family: sans-serif;
        font-size: 26px;
        font-weight: 700;
        line-height: 32px;
        margin: auto;
        word-break: break-word;
      }
    }
    .link {
      padding: 57px 0 0;
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -moz-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -moz-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      div {
        padding: 20px 64px;
        margin-top: -45px;
        button {
          background: rgb(10 63 199);
          font-size: 18px;
          font-weight: 400;
          line-height: 22px;
          outline: none;
          font-family: sans-serif;
          color: #fff;
          padding: 25px;
          border: none;
          cursor: pointer;
          border-radius: 30px;
        }
      }
    }
  }

  @media (min-width: 992px) {
    .col-md-8 {
      width: calc(66% - 30px);
    }
    .col-md-4 {
      width: calc(33% - 30px);
    }
  }
  @media (max-width: 992px) {
    .row {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
`;
