import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;

  div{
    &:not(:first-child){
      display: flex;
      gap: 1rem;
    }
  }
`