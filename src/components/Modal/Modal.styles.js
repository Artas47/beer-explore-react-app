import styled from "styled-components";
import { ReactComponent as CancelSvg } from "../../assets/cross.svg";

export const Cancel = styled(CancelSvg)`
  position: absolute;
  right: 2rem;
  cursor: pointer;
  top: 2rem;
  @media only screen and (max-width: 800px) {
    top: 0.5rem;
    right: 0.5rem;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(24, 2, 2, 0.623);
  z-index: 998;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-out;
  line-height: 2;
  overflow-y: scroll;

  @media only screen and (max-width: 1300px) {
    font-size: 1.9rem;
    line-height: 1.5;
  }
  @media only screen and (max-width: 900px) {
    line-height: 1.3;
    font-size: 1.7rem;
  }
  @media only screen and (max-width: 700px) {
    line-height: 1.2;
  }
  @media only screen and (max-height: 700px) {
    line-height: 1.1;
  }
`;

export const ModalContent = styled.div`
  position: absolute;
  display: grid;
  grid-template-rows: min-content repeat(5, 1fr);
  grid-template-columns: repeat(8, 1fr);
  padding: 3vw 0;
  top: 50%;
  left: 50%;
  border-radius: 2rem;
  width: 85%;
  height: 80%;
  transform: translate(-50%, -50%);
  background-color: rgb(255, 247, 247);
  box-shadow: 0 3rem 5rem rgba(black, 0.3);
`;
export const ModalBeerName = styled.div`
  grid-row: 1/1;
  grid-column: 3/9;
  justify-self: center;
  font-weight: 600;
`;
export const ModalCancel = styled.img`
  cursor: pointer;
  position: absolute;
  height: 3rem;
  right: 2rem;
  top: 2rem;
  @media only screen and (max-width: 800px) {
    right: 0.7rem;
    top: 0.7rem;
  }
`;
export const ModalBeerBox = styled.div`
  grid-row: 2/5;
  grid-column: 1/3;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  @media only screen and (max-width: 1300px) {
    grid-row: 1/-1;
  }
`;
export const ModalBeerImg = styled.img`
  width: 8rem;
  height: 22rem;
  @media only screen and (max-width: 1100px) {
    width: 5rem;
    height: 20rem;
  }

  @media only screen and (max-height: 700px) {
    width: 4rem;
    height: 17rem;
  }
  @media only screen and (max-height: 600px) {
    width: 3rem;
    height: 12rem;
  }
`;
export const ModalBeerTagline = styled.div`
  @media only screen and (max-width: 1100px) {
    font-size: 1.5rem;
  }
`;
export const ModalBeerDesc = styled.div`
  color: black;
  grid-column: 3/-1;
  grid-row: 2/5;
  margin: 0 4rem;
  @media only screen and (max-width: 1000px) {
    margin: 0 2rem;
  }

  @media only screen and (max-width: 700px) {
    margin: 0;
  }
`;
export const ModalText = styled.h3`
  grid-column: 3/9;
  grid-row: 5/6;
  justify-self: center;
  align-self: center;
  @media only screen and (max-width: 700px) {
    grid-column: 1/-1;
  }
  @media only screen and (max-width: 400px) {
    display: none;
  }

  @media only screen and (max-height: 500px) {
    display: none;
  }
`;
export const ModalSuggestedBeers = styled.div`
  grid-column: 3/9;
  grid-row: 6/7;
  width: 100%;
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @media only screen and (max-width: 1000px) {
    grid-row: 6/7;
  }
  @media only screen and (max-height: 400px) {
    display: none;
  }
`;
