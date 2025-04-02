import styled, { keyframes } from "styled-components";
import LoadingImgSrc from '../../../assets/images/eais_loading.png';
import LoadingImgVioletSrc from '../../../assets/images/eais_loading_violet.png';

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  } 
}`;

export const LoadingImage = styled.div`
    margin: 0;
    margin-top: -5rem;
    background: url(${LoadingImgSrc}) center no-repeat;
    width: 100%;
    height: 100%;
    max-height: 229px;
`;

export const LoadingFlash = styled.div`
    background: url(${LoadingImgVioletSrc}) center no-repeat;
    width: 100%;
    height: 100%;
    max-height: 229px;
    animation-name: ${fadeInOut};
    animation-duration: 4s;
    animation-iteration-count: infinite;
`;

export const LoadingFrameTitle = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    color: #fec8d8;
    max-width: 600px;
    font-size: 18px;
`;

export const LoadingFrameWrapper = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
`;