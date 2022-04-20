import styled from "styled-components";

export const StyledContact = styled.section`
  padding-top: 85px;
  position: relative;
  z-index: 2;
  overflow: hidden !important;
  padding-bottom: 57px;

  .col-12 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    width: 100%;
    float: left;
    margin-right: -15px;
    margin-left: -15px;
    margin-bottom: 35px;
    h2 {
      max-width: 791px;
      color: #000;
      font-family: sans-serif;
      font-size: 38px;
      line-height: 39px;
    }
  }

  .form_row {
    margin-right: -15px;
    margin-left: -15px;
  }
  .col-6 {
    width: calc(100% / 2 - 30px);
    float: left;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    div {
      h2 {
        color: #000;
        font-family: Gilroy;
        font-size: 24px;
        font-weight: 600;
        line-height: 29px;
        padding-bottom: 40px;
      }
    }
    .form_group {
      margin-top: 80px;
      padding-bottom: 50px;
      border: none;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      .input_group {
        position: relative;
        margin-bottom: 45px;
        input {
          border: none;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          border-bottom: 1px solid #9b9b9b;
          outline: none;
          height: 35px;
          width: 459px;
          z-index: 1;
          position: relative;
          background-color: transparent;
          color: #4961ff;
          font-family: Gilroy;
          font-size: 27px;
          font-weight: 700;
          line-height: 33px;
          -webkit-transition: all 0.5s ease;
          -o-transition: all 0.5s ease;
          -moz-transition: all 0.5s ease;
          transition: all 0.5s ease;
          -webkit-box-shadow: none;
          -moz-box-shadow: none;
          box-shadow: none;
          &:focus {
            border-bottom: 1px solid #4961ff !important;
            -webkit-box-shadow: none;
            -moz-box-shadow: none;
            box-shadow: none;
          }
          &:focus + span {
            transform: translateY(-33px);
            font-size: 14px;
          }
        }
        span {
          transition: all 0.5s ease;
          position: absolute;
          left: 0;
          bottom: 10px;
          color: #414d6a;
          font-family: sans-serif;
          font-size: 21px;
          line-height: 24px;
          -webkit-transition: all 0.5s ease;
          -o-transition: all 0.5s ease;
          -moz-transition: all 0.5s ease;
          transition: all 0.5s ease;
        }
      }
    }
  }

  .checkbox_group {
    margin-right: -15px;
    margin-left: -15px;
    .col-md-6 {
      width: calc(100% / 2 - 30px);
      position: relative;
      min-height: 1px;
      padding-right: 15px;
      padding-left: 15px;
      float: left;
      div {
        label {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          color: #000;
          font-family: sans-serif;
          font-size: 18px;
          letter-spacing: 0.7px;
          line-height: 21px;
          display: -webkit-box;
          display: -webkit-flex;
          display: -moz-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: start;
          -webkit-align-items: flex-start;
          -moz-box-align: start;
          -ms-flex-align: start;
          align-items: flex-start;
          margin-bottom: 35px;
          min-height: 50px;
          cursor: pointer;
        }
        input {
          -webkit-appearance: none !important;
          -moz-appearance: none !important;
          appearance: none !important;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          -webkit-transition: all 0.15s ease-out 0s;
          -o-transition: all 0.15s ease-out 0s;
          -moz-transition: all 0.15s ease-out 0s;
          transition: all 0.15s ease-out 0s;
          color: #fff;
          cursor: pointer;
          margin-right: 20px;
          outline: none;
          position: relative;
          z-index: 1000;
          height: 27px;
          width: 27px;
          min-width: 27px;
          min-height: 27px;
          border: 1px solid #d2d2d2;
          background-color: #fff;
          display: block;
          -webkit-box-shadow: none;
          -moz-box-shadow: none;
          box-shadow: none;
          &:checked:before {
            height: 27px;
            width: 27px;
            position: absolute;
            content: "";
            background-image: url(https://oks.uz/styles/../media/img/tick.svg);
            -webkit-background-size: contain;
            -moz-background-size: contain;
            -o-background-size: contain;
            background-size: contain;
            background-position: 50%;
            background-repeat: no-repeat;
            display: inline-block;
            font-size: 26.66667px;
            text-align: center;
            line-height: 27px;
            color: #4961ff;
            -webkit-box-shadow: none;
            -moz-box-shadow: none;
            box-shadow: none;
          }
        }
      }
    }
  }
  .checkbox_title {
    color: #000;
    font-family: sans-serif !important;
    font-size: 24px;
    font-weight: 600;
    line-height: 29px;
    padding-bottom: 40px;
  }
  .radio_column {
    background-color: #fff;
    box-shadow: 30px 51px 104px 0 rgb(0 0 0 / 14%);
  }
  .tea_group {
    padding: 50px 0 100px 50px;
    margin-top: 75px;
    .tea_group_title {
      color: #000;
      font-family: sans-serif;
      font-size: 23px;
      font-weight: 600;
      letter-spacing: 1.9px;
      line-height: 28px;
      text-align: center;
      padding-bottom: 52px;
      text-transform: uppercase;
      padding: 0;
      margin: 0;
      max-width: 791px;
      margin-bottom: 25px;
    }
    .tea_form_group {
      .radio {
        position: absolute;
        opacity: 0;
      }

      img {
        cursor: pointer;
        width: 90%;
        height: 90%;
        object-fit: cover;
        border-radius: 50%;
        transform: translate(10px, 0px);
        transition: all 0.3s ease-in-out;
      }
      .radio + img {
        cursor: pointer;
        margin-right: 0.5rem;
      }
      .radio:checked + img {
        transform: scale(0.6);
      }
    }
  }
  .under_label {
    text-align: center;
    padding-top: 15px;
    color: #000;
    font-family: sans-serif;
    font-size: 20px;
    font-weight: 800;
    line-height: 24px;
    display: block;
    cursor: pointer;
  }
  .radio_col-6 {
    width: calc(100% / 2 - 30px);
    float: left;
    padding-right: 15px;
    padding-left: 15px;
    position: relative;
    min-height: 1px;
    .radio_wrapper {
      margin-bottom: 75px;
      div {
        background-image: url(https://oks.uz/styles/../media/img/chbgi.png);
        width: 170px;
        height: 170px;
        -webkit-background-size: contain;
        -moz-background-size: contain;
        -o-background-size: contain;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 50%;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }

  .carousel_link {
    text-align: center;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    margin: auto;
    padding-top: 50px;
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
        content: "Стать клиентом";
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
  @media (max-width: 992px) {
    .col-6 {
      width: 100% !important;
    }
  }
  @media (max-width: 500px) {
    .radio_column {
      display: none !important;
    }
    .checkbox_group {
      display: flex;
      flex-direction: column !important;
    }
  }
`;
