import styled from "styled-components";

export const StyledServices = styled.section`
  position: relative;
  .section_title {
    margin-right: -15px;
    margin-left: -15px;
    div {
      position: relative;
      min-height: 1px;
      padding-right: 15px;
      padding-left: 15px;
      padding-top: 110px;
      text-align: center;
      padding-bottom: 50px;
      p {
        max-width: 912px;
        color: #414d6a;
        font-family: sans-serif;
        font-size: 30px;
        line-height: 36px;
        text-align: center;
        margin: auto;
        word-break: break-word;
      }
    }
  }
  .section_columns {
    .columns {
      float: left;
      a {
        .wrapper {
          border: 1px solid hsla(0, 0%, 59%, 0.36);
          background-color: #fff;
          padding: 33px;
          position: relative;
          -webkit-transition: all 0.3s ease-out;
          -o-transition: all 0.3s ease-out;
          -moz-transition: all 0.3s ease-out;
          transition: all 0.3s ease-out;
          z-index: 1;
          height: 100%;
          &:hover {
            .icons {
              fill: white !important;
              stroke: white !important;
              g {
                fill: white !important;
                stroke: white !important;
                rect {
                  fill: white !important;
                }
              }
              path {
                fill: white !important;
              }
            }
            p{
                color: white !important;
            }
            background-color: #4961ff;
            -webkit-box-shadow: -20px -20px 0 0 #000283;
            -moz-box-shadow: -20px -20px 0 0 #000283;
            box-shadow: -20px -20px 0 0 #000283;
          }
          .top_img {
            position: relative;
            height: 52px;
            width: 45px;
            -webkit-background-size: contain;
            -moz-background-size: contain;
            -o-background-size: contain;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            background-repeat: no-repeat;
            .icons {
              position: absolute;
              height: 52px;
              width: 45px;
            }
          }
          .text_1 {
            p {
              color: #414d6a;
              font-family: sans-serif;
              font-size: 22px;
              line-height: 27px;
              padding-top: 20px;
              word-break: break-word;
            }
          }
          .text_2 {
            p {
              color: #414d6a;
              font-family: sans-serif;
              font-size: 16px;
              line-height: 19px;
              padding-top: 25px;
              padding-bottom: 30px;
              -o-text-overflow: ellipsis;
              text-overflow: ellipsis;
              word-break: break-word;
            }
          }
        }
      }
    }
  }

  @media (min-width: 992px) {
    .columns {
      width: calc(100% / 3 - 10px);
    }
  }
  @media (max-width: 992px) {
    .columns {
      width: calc(100% / 2 - 10px);
    }
  }
  @media (max-width: 768px) {
    .columns {
      width: 100%;
    }
  }
`;
