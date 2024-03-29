import styled from 'styled-components';

export const Box = styled.div`
  padding: 10px;
  background: #181818; 
  position: relative; 
  bottom: 0;
  width: 100%;
  top: 40vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // max-width: 1000px;
  margin: 0 auto;
  /* background: red; */

`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: flex;
  padding: 0 40px 0 0;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: yellow;
    text-decoration: none;
  }

  &:active {
    color: cyan;
    text-decoration: none;
  }

`;
