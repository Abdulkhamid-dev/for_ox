import styled from "styled-components";
import Share from "../../assets/img/share.svg";

export const StyledHeader = styled.header`
  background: #030407;
  z-index: 100;
  overflow: hidden;
  width: 100%;
  padding-top: 62px;
  .logoBlock {
    width: 244px;
    height: 68px;
    cursor: pointer;
    margin-left: 10px;
    img {
      display: block;
      width: 100%;
      height: 100%;
      -o-object-fit: contain;
      object-fit: contain;
      -o-object-position: center;
      object-position: center;
      background-repeat: no-repeat;
    }
  }

  .row,
  .navigationBar,
  .contactInfo,
  .phoneInfo,
  .menuBlock {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .row {
    margin-right: -15px;
    margin-left: -15px;
    z-index: 80;
  }
  .phoneInfo {
    cursor: pointer;
    margin: 0px 15px;
    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        min-height: 33.82px !important;
        min-width: 33px !important;
        -o-object-fit: contain;
        object-fit: contain;
        -o-object-position: center;
        object-position: center;
        background-repeat: no-repeat;
        margin-bottom: 6px;
        margin-right: 10px;
      }
      p {
        font-size: 25px;
        font-weight: 500;
        margin-top: 14px;
        white-space: nowrap;
        color: #7e879e;
      }
    }
  }
  .shareInfo {
    margin: 0px 15px;
    a {
      display: block;
      background-image: url(${Share});
      background-position: 50%;
      background-repeat: no-repeat;
      -webkit-background-size: contain;
      -moz-background-size: contain;
      -o-background-size: contain;
      background-size: contain;
      position: relative;
      min-height: 33.82px !important;
      min-width: 33px !important;
      cursor: pointer;
      margin-top: 0px;
    }
  }
  .menuBlock {
    cursor: pointer;
    margin: 0px 15px;
    p {
      font-size: 25px;
      font-weight: 500;
      margin-top: 11px;
      white-space: nowrap;
      color: #7e879e;
    }
    img {
      min-height: 33.82px !important;
      min-width: 33px !important;
      -o-object-fit: contain;
      object-fit: contain;
      -o-object-position: center;
      object-position: center;
      background-repeat: no-repeat;
      margin-bottom: 6px;
      margin-left: 10px;
    }
  }
  .navigationBar {
    padding-right: 20px;
  }
  .full_navbar {
    top: -200%;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    margin-top: 130px;
    width: 100%;
    background-color: red !important;
    z-index: -1;
    transition: all 0.4s ease-in-out;
    background: linear-gradient(180deg, #030407, #091832 49.99%, #030407);
    height: calc(100vh - 130px);
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -moz-box-orient: horizontal;
    -moz-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
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
    .hide_menu {
      margin-right: -15px;
      margin-left: -15px;
      .col-md-6 {
        width: 100%;
        float: left;
        position: relative;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
        .left_side_inner {
          position: relative;
          padding-left: 40px;
          z-index: 2;
          .menu_lists {
            position: relative;
            padding: 0;
            margin-top: -45px;
            .list_item {
              z-index: 1;
              position: relative;
              a {
                color: #fff;
                font-family: sans-serif;
                font-size: 35px;
                font-weight: 800;
                line-height: 70px;
              }
            }
          }
        }
        .right_side_inner {
          position: relative;
          z-index: 2;
          ul {
            .other_list {
              a {
                color: #fff;
                font-family: sans-serif;
                font-size: 20px;
                font-weight: 800;
                line-height: 24px;
                display: block;
                position: relative;
                margin-bottom: 15px;
                &:hover {
                  &:before {
                    width: 120px;
                  }
                }
                &:before {
                  position: absolute;
                  content: "";
                  width: 100px;
                  bottom: -5px;
                  left: 0;
                  border-bottom: 2px solid #33579d;
                  -webkit-transition: 0.3s ease;
                  -o-transition: ease 0.3s;
                  -moz-transition: ease 0.3s;
                  transition: 0.3s ease;
                }
              }
              p {
                color: #7b8390;
                padding-bottom: 25px;
                font-family: sans-serif;
                font-size: 17px;
                font-weight: 300;
                line-height: 20px;
                word-break: break-word;
              }
            }
            .operator_list {
              display: flex;
              align-items: center;
              p {
                font-family: sans-serif;
                font-size: 20px;
                font-weight: 300;
                line-height: 23px;
                color: #fff;
                position: relative;
                a {
                  color: #33579d;
                }
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .contactInfo {
      display: none !important;
    }
    .col-md-6:last-child {
      display: none !important;
    }
  }
  @media (max-width: 400px) {
    .menuBlock {
      p {
        display: none !important;
      }
    }
  }
  @media (min-width: 992px) {
    .col-md-6 {
      width: calc(100% / 2 - 30px) !important;
    }
    .hide_menu {
      display: flex;
      align-items: center;
    }
  }
`;
