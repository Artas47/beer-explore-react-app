import styled from "styled-components";

export const Searchbar = styled.div`
  margin: 3rem 0;
  ::placeholder {
    @media only screen and (max-width: 1300px) {
      font-size: 2.5rem;
    }
  }
  @media only screen and (max-width: 500px) {
    margin: 1rem 0;
  }
  @media only screen and (max-width: 1000px) {
    margin-top: 1rem;
  }
`;

export const SearchbarInput = styled.input`
  padding: 1rem 4rem;
  font-size: 3rem;
  border: 0;
  border-radius: 100px;
  outline: none;
  max-width: 100%;
  transition: all 0.3s;
  box-shadow: 0 1rem 2rem rgba(#000, 0.1);
  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;
