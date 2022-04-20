import styled from "styled-components";

export const StyledCarousel = styled.section`
  position: relative;
  padding-top: 90px;
  overflow: hidden;
  .row {
    margin-right: -15px;
    margin-left: -15px;
    h2 {
      text-align: center;
      color: #414d6a;
      font-family: sans-serif;
      font-size: 50px;
      line-height: 60px;
      position: relative;
      z-index: 2;
    }
  }
  .wrapper {
    background-color: #fff;
    width: 100%;
    height: 715px;
    position: relative;
    left: 0;
    top: 50%;
    padding-top: 20px;
    margin-top: 110px;
    z-index: 1;
    .oks_logo {
      padding-top: 50px;
      width: 100%;
      max-width: 600px;
      height: 740px;
      background-position: 50%;
      background-repeat: no-repeat;
      -webkit-background-size: cover;
      -moz-background-size: 100%;
      -o-background-size: 100%;
      background-size: 100%;
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      top: -50px;
      z-index: 10;
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
    }
  }
  .moving_logos_wrapper {
    float: none;
    position: relative;
    inset: 0px;
    width: 100%;
    height: 120px;
    margin: 0px;
    overflow: hidden;
    .moving_logos_inner {
      text-align: left;
      float: none;
      position: absolute;
      margin: 0px;
      width: 3636px;
      height: 120px;
      z-index: auto;
      -webkit-animation: moving_logos 40s linear infinite;
      animation: moving_logos 40s linear infinite;
      div {
        float: left;
        text-align: center;
        width: 200px;
        height: 120px;
        position: relative;
        display: inline-block;
        .tooltiptext {
          visibility: hidden;
          width: 120px;
          background-color: black;
          color: #fff;
          text-align: center;
          border-radius: 6px;
          padding: 5px 0;
          position: absolute;
          z-index: 1;
          transform: translate(-90px, 80px);
        }
        &:hover {
          .tooltiptext {
            visibility: visible;
          }
        }
      }
    }
  }
  .carousel_link {
    text-align: center;
    width: 190px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding-top: 120px;
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
          width: 250px;
          left: -30px;
          top: -5px;
          background-color: #2e5cdd;
        }
        .btnText {
          clip-path: circle(250px at 16px calc(50% + 0px));
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
        content: "Стать Партнером";
        -webkit-transition: opacity 0.1s;
        -o-transition: opacity 0.1s;
        -moz-transition: opacity 0.1s;
        transition: opacity 0.1s;
        width: 100%;
        top: 28px;
        left: 2px;
        opacity: 1;
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

  @keyframes moving_logos {
    0% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }
    100% {
      -webkit-transform: translate3d(-1500px, 0, 0);
      transform: translate3d(-1500px, 0, 0);
    }
  }
  @media (max-width: 400px) {
    display: none !important;
  }
`;
