import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const Container = styled.div`
  width: 100%;
  max-width: 80px;
  height: 30px;
  background-color: ${Theme.Colors.bright};

  display: flex;
  justify-content: space-between;
  align-items: center;

  
  border-radius: 4px;
  border: 1px solid ${Theme.Colors.primary};
  
  button{
    width: calc(100% / 3);
    height: 100%;
    cursor: pointer;
    border: none;
    background-color: ${Theme.Colors.bright};
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
  
  .active{
    background-color: ${Theme.Colors.primary};

    .stepper_icon path{
      stroke: ${Theme.Colors.bright};
    }
  }
`