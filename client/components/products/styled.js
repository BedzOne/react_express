import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductsLi = styled.li`
  position: relative;
  width: calc((100% / 3) - 4em);
  height: 18em;
  margin-left: 2em;
  margin-right: 1em;
  margin-bottom: 3em;
  padding-bottom: 0;
  background: white;
  box-shadow: 0px 0px 11px 1px rgba(138,138,138,1);
`;

export const ProductImg = styled.img`
  width: calc(100% - 0.5em);
  height: 70%;
  margin-left: 0.25em;
  margin-right: 0.25em;
  margin-top: 0.25em;
`;

export const TileDesc = styled.div`
  display: flex;
  height: 30%;
  flex-wrap: wrap
` 

export const SpanPrice = styled.span`
  ${'' /* position: absolute; */}
  width: 50%;
  right: 0;
  bottom: 0;
  font-size: 2.5em;
  text-align: right;
`

export const SpanDesc = styled.span`
  display: inline-block;
  width: 50%;
`

export const DetailsDiv = styled.div`
  height: 2.2em;
  width: 100%;
  bottom: 0;
  text-transform: uppercase;
  text-align: center;
  background: #7587EA;
`

export const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const ProductsContainer = styled.ul`
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  padding-left: 0;
  list-style: none;
`;

export const Header = styled.h2`
  width: 100%;
  text-align: center;
`;

export const Nav = styled.nav`
  height: 100%;
  width: 20%;
`;
