import styled from "styled-components";

export const StyledMain = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .style_container{
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    position: absolute;
    height: 100%;
    left: 0;
    right: 0;
    z-index: 1;
    top: 130px;
    bottom: 0;
    padding: 0;
  }
    .line_frame2 {
      width: 100%;
      height: 1000%;
      overflow: hidden;
      div{
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -moz-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: 0 15px;
        height: 100%;
        .line_1{
          &:before{
            -webkit-animation-name: lineAnimation;
            -moz-animation-name: lineAnimation;
            -o-animation-name: lineAnimation;
            animation-name: lineAnimation;
            -webkit-animation-duration: 40s;
            -moz-animation-duration: 40s;
            -o-animation-duration: 40s;
            animation-duration: 40s;
            -webkit-animation-iteration-count: infinite;
            -moz-animation-iteration-count: infinite;
            -o-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
            -webkit-animation-timing-function: linear;
            -moz-animation-timing-function: linear;
            -o-animation-timing-function: linear;
            animation-timing-function: linear;
            -webkit-animation-delay: 3s;
            -moz-animation-delay: 3s;
            -o-animation-delay: 3s;
            animation-delay: 3s;
          }
        }
        .line_2{
          &:before{
            -webkit-animation-name: lineAnimation;
            -moz-animation-name: lineAnimation;
            -o-animation-name: lineAnimation;
            animation-name: lineAnimation;
            -webkit-animation-duration: 40s;
            -moz-animation-duration: 40s;
            -o-animation-duration: 40s;
            animation-duration: 40s;
            -webkit-animation-iteration-count: infinite;
            -moz-animation-iteration-count: infinite;
            -o-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
            -webkit-animation-timing-function: linear;
            -moz-animation-timing-function: linear;
            -o-animation-timing-function: linear;
            animation-timing-function: linear;
            -webkit-animation-delay: 7s;
            -moz-animation-delay: 7s;
            -o-animation-delay: 7s;
            animation-delay: 7s;
          }
        }
        .line_3{
          &:before{
            -webkit-animation-name: lineAnimation;
            -moz-animation-name: lineAnimation;
            -o-animation-name: lineAnimation;
            animation-name: lineAnimation;
            -webkit-animation-duration: 40s;
            -moz-animation-duration: 40s;
            -o-animation-duration: 40s;
            animation-duration: 40s;
            -webkit-animation-iteration-count: infinite;
            -moz-animation-iteration-count: infinite;
            -o-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
            -webkit-animation-timing-function: linear;
            -moz-animation-timing-function: linear;
            -o-animation-timing-function: linear;
            animation-timing-function: linear;
            -webkit-animation-delay: 11s;
            -moz-animation-delay: 11s;
            -o-animation-delay: 11s;
            animation-delay: 11s;
          }
        }
        .line_4{
          &:before{
            -webkit-animation-name: lineAnimation;
            -moz-animation-name: lineAnimation;
            -o-animation-name: lineAnimation;
            animation-name: lineAnimation;
            -webkit-animation-duration: 40s;
            -moz-animation-duration: 40s;
            -o-animation-duration: 40s;
            animation-duration: 40s;
            -webkit-animation-iteration-count: infinite;
            -moz-animation-iteration-count: infinite;
            -o-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
            -webkit-animation-timing-function: linear;
            -moz-animation-timing-function: linear;
            -o-animation-timing-function: linear;
            animation-timing-function: linear;
            -webkit-animation-delay: 8s;
            -moz-animation-delay: 8s;
            -o-animation-delay: 8s;
            animation-delay: 8s;
          }
        }
        .line_5{
          &:before{
            -webkit-animation-name: lineAnimation;
            -moz-animation-name: lineAnimation;
            -o-animation-name: lineAnimation;
            animation-name: lineAnimation;
            -webkit-animation-duration: 40s;
            -moz-animation-duration: 40s;
            -o-animation-duration: 40s;
            animation-duration: 40s;
            -webkit-animation-iteration-count: infinite;
            -moz-animation-iteration-count: infinite;
            -o-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
            -webkit-animation-timing-function: linear;
            -moz-animation-timing-function: linear;
            -o-animation-timing-function: linear;
            animation-timing-function: linear;
            -webkit-animation-delay: 4s;
            -moz-animation-delay: 4s;
            -o-animation-delay: 4s;
            animation-delay: 4s;
          }
        }
        div{
          border-left: 1px solid hsla(0,0%,64%,.2);
          width: 0.1px;
          height: 100%;
          position: relative;
          &::before {
            position: absolute;
            width: 3px;
            height: 33px;
            background-color: rgba(126,135,158,.9);
            content: "";
            top: -40px;
            left: -2px;
        }
      }
        }
      }
    }
    @media (min-width: 1200px){
      .container{
        width: 1170px;
      }
    }

  @keyframes lineAnimation{0%{top:0}to{top:100%}}
`;
