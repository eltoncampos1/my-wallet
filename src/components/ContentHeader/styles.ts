import styled from 'styled-components';

interface ITitleContainerProps {
  lineColor: string;
}

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  margin-bottom: 25px;

`;
export const TitleContainer = styled.div<ITitleContainerProps>`
  
  h1 {
      color: ${props => props.theme.colors.white};

      &::after {
          content: '';
          display: block;
          width: 55px;
          -webkit-border-top-left-radius: 5px;
          -webkit-border-top-right-radius: 5px;
          -moz-border-radius-topleft: 5px;
          -moz-border-radius-topright: 5px;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          border-bottom: 8px solid ${props => props.lineColor};
      }
  }
`;
export const Controllers = styled.div`
  display: flex;

`;
