import styled from "styled-components";

export const StyledPortfolio = styled.section`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  .row {
    margin-right: -15px;
    margin-left: -15px;
    .portfolioTitle {
      color: #414d6a;
      font-family: sans-serif;
      font-size: 47px;
      font-weight: 700;
      line-height: 56px;
      text-align: center;
      padding-top: 67px;
      padding-bottom: 26px;
      position: relative;
      text-transform: capitalize;
      z-index: 2;
    }
  }
  .portfolioItem {
    float: left;
    height: 460px;
    padding: 0px 15px;
    margin: 0px;
    border: none;
    .wrapper {
      margin-top: 35px;
      width: 100%;
      height: 430px;
      position: relative;
      z-index: 15;
      -webkit-box-shadow: 2px 4px 26px 0 rgb(0 0 0 / 14%);
      -moz-box-shadow: 2px 4px 26px 0 rgba(0, 0, 0, 0.14);
      box-shadow: 2px 4px 26px 0 rgb(0 0 0 / 10%);
      -webkit-transition: 0.4s ease-out;
      -o-transition: ease-out 0.4s;
      -moz-transition: ease-out 0.4s;
      transition: 0.4s ease-out;
      a {
        &:hover {
          .hoverableBlock {
            opacity: 1;
          }
        }
        div {
          position: relative;
          z-index: 50;
          .hoverableBlock {
            transition: all 0.4s ease-in-out;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            padding: 20px;
            position: absolute;
            width: 85%;
            height: 85%;
            top: 5px;
            bottom: 5px;
            left: 5px;
            right: 5px;
            margin: auto;
            z-index: 100;
            background: #fff;
            opacity: 0;
            .head_hoverable {
              text-align: right;
              img {
                height: 33px;
                width: 36px;
                -o-object-fit: cover;
                object-fit: cover;
                -o-object-position: center;
                object-position: center;
                background-repeat: no-repeat;
                display: inline-block;
              }
            }
            .text_hoverable {
              .text_1 {
                color: #304fff;
                display: block;
                font-family: sans-serif;
                font-size: 14px;
                font-weight: 500;
                letter-spacing: 0.07px;
                line-height: 16px;
                bottom: 0;
              }
              .text_2 {
                color: #000;
                font-family: sans-serif;
                font-size: 18px;
                letter-spacing: 0.1px;
                line-height: 21px;
                bottom: 0;
                word-break: break-word;
              }
            }
          }
          img {
            display: block;
            -o-object-fit: cover;
            object-fit: cover;
            -o-object-position: center;
            object-position: center;
            background-repeat: no-repeat;
            height: 430px;
            width: 100%;
          }
          span {
            position: absolute;
            bottom: 25px;
            left: 37px;
            display: inline-block;
            font-family: sans-serif;
            font-size: 14px;
            line-height: 16px;
            text-align: center;
            padding: 10px 15px;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
            background-color: #fff;
            color: #000;
            -webkit-box-shadow: 1px 3px 4px 0 rgb(0 0 0 / 10%);
            -moz-box-shadow: 1px 3px 4px 0 rgba(0, 0, 0, 0.1);
            box-shadow: 1px 3px 4px 0 rgb(0 0 0 / 10%);
          }
        }
      }
      &:after {
        right: 190px;
        bottom: -50px;
        width: 43px;
        height: 43px;
        position: absolute;
        content: "";
        background-color: #e7edfb;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        -webkit-transition: 0.4s ease-out;
        -o-transition: ease-out 0.4s;
        -moz-transition: ease-out 0.4s;
        transition: 0.4s ease-out;
        z-index: -50;
      }
    }
  }
  .portfolio_link {
    text-align: center;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding-top: 65px;
    padding-bottom: 65px;

    a {
      content: "";
      height: 80px;
      font-family: sans-serif;
      position: relative;
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
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -moz-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      cursor: pointer;
      width: 200px;
      text-decoration: none !important;
      z-index: 20;
      &:hover {
        .btnBgcircle {
          width: 200px;
          left: -30px;
          top: -5px;
          background-color: #2e5cdd;
        }
        .btnText {
          clip-path: circle(130px at 16px calc(50% + 0px));
        }
      }
      &:before {
        color: #000;
        font-weight: 700;
        font-size: 20px;
        font-family: sans-serif;
        position: absolute;
        z-index: 1px;
        display: block;
        content: "Показать все";
        -webkit-transition: opacity 0.1s;
        -o-transition: opacity 0.1s;
        -moz-transition: opacity 0.1s;
        transition: opacity 0.1s;
        width: 100%;
        top: 28px;
        left: 2px;
        opacity: 0.4;
        text-align: left;
      }
      .btnText {
        clip-path: circle(60px at 16px calc(50% + 0px));
        color: #fff;
        font-weight: 700;
        font-size: 20px;
        font-family: sans-serif;
        transition: all 0.6s ease-in-out;
      }
      .btnBgcircle {
        width: 80px;
        height: 80px;
        background-color: #4961ff;
        -webkit-border-radius: 40px;
        -moz-border-radius: 40px;
        border-radius: 40px;
        -webkit-box-shadow: 0 2px 30px rgb(62 174 255 / 30%);
        -moz-box-shadow: 0 2px 30px rgba(62, 174, 255, 0.3);
        box-shadow: 0 2px 30px rgb(62 174 255 / 30%);
        pointer-events: none;
        -webkit-transition: width 0.6s, left 0.3s, top 0.3s,
          background-color 0.4s;
        -o-transition: width 0.6s, left 0.3s, top 0.3s, background-color 0.4s;
        -moz-transition: width 0.6s, left 0.3s, top 0.3s, background-color 0.4s;
        transition: width 0.6s, left 0.3s, top 0.3s, background-color 0.4s;
        position: absolute;
        left: 0;
        top: 0;
        transform: matrix(1, 0, 0, 1, 0, 0);
      }
    }
  }
  @media (min-width: 992px) {
    .portfolioItem {
      width: calc(100% / 3 - 30px);
    }
  }
  @media (max-width: 992px) {
    .portfolioItem {
      width: calc(100% / 2 - 30px);
    }
  }
  @media (max-width: 768px) {
    .portfolioItem {
      width: calc(100% - 30px);
    }
  }
`;
