import styled from 'styled-components';
import { injectGlobal } from 'styled-components';

export const globalStyles = injectGlobal`
  body {
    background: #F5EFED;
  }

  a {
    color: black;
    text-decoration: none;
  }
`;

export const Container = styled.div`
  margin: 0 3em;
  margin-top: 5em;
` 

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`