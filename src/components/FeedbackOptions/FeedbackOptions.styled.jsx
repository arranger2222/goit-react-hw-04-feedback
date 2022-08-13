import styled from 'styled-components';

export const Button = styled.button`
  
  padding: 15px 35px;
  background: linear-gradient(to right, #02aabd, 10%, #01cdac);
  border: none;
  border-radius: 4px;  
  font-size: large;
  color: #fff;
  text-transform: capitalize;
  cursor: pointer;
  

  &:not(:last-child) {
    margin-right: 10px;
  }
  
  :hover
   {
    box-shadow: 4px 4px 4px rgb(0 0 0 / 15%);
    transition: 250ms;
    }
`;
