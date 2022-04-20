import styled from "styled-components";

export const StyledTopSection = styled.section`
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#030407),
    color-stop(49.99%, #091832),
    to(#030407)
  );
  background: -webkit-linear-gradient(top, #030407, #091832 49.99%, #030407);
  background: -moz-linear-gradient(
    top,
    #030407 0,
    #091832 49.99%,
    #030407 100%
  );
  background: -o-linear-gradient(top, #030407 0, #091832 49.99%, #030407 100%);
  background: linear-gradient(180deg, #030407, #091832 49.99%, #030407);
  overflow: hidden;
  min-height: -webkit-calc(100vh - 130px);
  height: -moz-calc(100vh - 130px);
  min-height: calc(100vh - 130px);
  position: relative;
  .wrapper{
    height: 100%;
    position: absolute;
  }
  .row {
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
    justify-content: start;
    height: 100%;
    margin-right: -15px;
    margin-left: -15px;
    .content {
      padding-left: 20px;
      padding-top: 90px;
      position: relative;
      z-index: 2;
      p {
        position: relative;
        z-index: 2;
        height: 198px;
        max-width: 924px;
        color: #fff;
        font-family: sans-serif;
        font-size: 65px;
        line-height: 66px;
        text-shadow: 20px 62px 4px 0 rgba(0, 0, 0, 0.1);
        display: inline-block;
      }
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
            clip-path: circle(100px at 16px calc(50% + 0px));
          }
        }
        &:before {
          color: #fff;
          font-weight: 700;
          font-size: 20px;
          font-family: sans-serif;
          position: absolute;
          z-index: 1px;
          display: block;
          content: "Подробнее";
          -webkit-transition: opacity 0.1s;
          -o-transition: opacity 0.1s;
          -moz-transition: opacity 0.1s;
          transition: opacity 0.1s;
          width: 100%;
          top: 26px;
          left: 4px;
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
          -moz-transition: width 0.6s, left 0.3s, top 0.3s,
            background-color 0.4s;
          transition: width 0.6s, left 0.3s, top 0.3s, background-color 0.4s;
          position: absolute;
          left: 0;
          top: 0;
          transform: matrix(1, 0, 0, 1, 0, 0);
        }
      }
    }
  }

  @media (max-width: 400px) {
    .content {
      p {
        font-size: 40px !important;
        line-height: 40px !important;
        padding-bottom: 0px !important;
      }
    }
  }
`;
