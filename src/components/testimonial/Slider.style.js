import styled from "styled-components";

export const StyledSLider = styled.div`
  width: 1200px;
  min-height: 1px;
  float: left;
  position: relative;
  -webkit-backface-visibility: hidden;
  .slider_item {
    display: flex;
  }
  .item {
    height: 100%;
    .col-3,
    .col-9 {
      float: left;
      position: relative;
      min-height: 1px;
      padding-right: 15px;
      padding-left: 15px;
    }
  }
  .col-3 {
    width: calc(25% - 35px);
    .img_block {
      margin-top: 86px;
      img {
        height: 180px;
        width: 180px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        -o-object-fit: cover;
        object-fit: cover;
        -o-object-position: center;
        object-position: center;
        display: block;
        background-repeat: no-repeat;
        border: 7px solid #fff;
        -webkit-background-clip: border-box;
        -moz-background-clip: border-box;
        -o-background-clip: border-box;
        background-clip: border-box;
        margin: auto;
      }
      p {
        padding-top: 35px;
        max-width: 264px;
        color: #000;
        font-family: sans-serif;
        font-size: 17px;
        line-height: 20px;
        text-align: center;
        margin: auto;
        height: 99px;
        overflow: hidden;
        border-bottom: 4px solid #ffcf04;
        word-break: break-word;
      }
    }
  }
  .col-9 {
    width: calc(75% - 35px);
    .text {
      margin-top: 86px;
      border: 1px dashed #000;
      padding: 40px 75px;
      position: relative;
      z-index: 1;
      margin-right: 16px;
      p {
        color: #000;
        font-family: sans-serif;
        font-size: 18px;
        letter-spacing: 0.1px;
        line-height: 30px;
        text-align: center;
        word-break: break-word;
        margin: 0 0 10px;
      }
    }
  }

 @media (max-width: 992px){
   .slider_item{
     display: flex;
     flex-direction: column;
     .col-3, .col-9{
       width: 100%;
     }
   }
 }
`;
