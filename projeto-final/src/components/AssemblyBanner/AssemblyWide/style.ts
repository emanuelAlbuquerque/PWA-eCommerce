import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: scroll;

  padding: 1rem;

  div{
    flex-shrink: 0;
  }

  @media screen and (min-width: 1024px){
    display: none;
  }
  
`