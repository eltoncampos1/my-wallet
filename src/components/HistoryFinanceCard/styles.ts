import styled from 'styled-components';


interface ItagProps {
    color: string;
}

export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  background-color: ${props => props.theme.colors.tertiary};

  list-style:none;
  border-radius: 5px;

  margin: 10px 0;
  padding: 12px 10px;

  cursor: pointer;
  transition: all .3s;

  position: relative;


  &:hover{
      opacity: .7;
      transform:translateX(10px);
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        padding-left: 10px;

        span {
          font-weight: bold;
        }

        small {
          color: #bfbbbb;
        }
    }
`;

export const Tag = styled.div<ItagProps>`
  position: absolute;
  left: 0;

  width: 8px;
  height: 60%;


  -webkit-border-top-right-radius: 5px;
  -webkit-border-bottom-right-radius: 5px;
  -moz-border-radius-topright: 5px;
  -moz-border-radius-bottomright: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  background-color: ${props => props.color};

   
`;
