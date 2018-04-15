import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;  
  height: 5em;
  position: absolute;
  top: 0;
  left: 0;
  background: #F87256 ; 
  padding: 0 2em;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const NavListItem = styled.li`
  margin-left: 1em;
`;

export const CartItems = styled.span`
  color: white;
  margin-left: 0.2em;
  font-size: 1.2em;
`