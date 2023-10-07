import styled from 'styled-components';

export const Titile = styled.h1`
  text-align: center;
  padding: 20px;
`;

export const Layout = styled.div`
  width: 100%;
  text-decaration: none;
  display: flex;
  flex-direction: column;
`;
export const NavContainer = styled.header`
  background-color: #fdf0f7;

  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  box-shadow: 0px 0px 18px 9px rgba(0, 0, 0, 0.75);
`;
export const NavList = styled.nav`
  display: flex;
  gap: 30px;
  font-size: 22px;
  margin-left: 70px;
  font-weight: 700;
`;
export const NavItem = styled.div`
  color: #212121;

  &.active {
    color: #ff0068;
  }
`;
export const Container = styled.div`
  margin: 30px;
  box-shadow: 0px 0px 9px 5px rgba(0, 0, 0, 0.67);
  background-color: #fdf0f7;
  width: 100%;
`;
