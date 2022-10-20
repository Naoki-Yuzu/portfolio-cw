import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import styled from 'styled-components';

const ImageAndTitleContainer = styled.div`
  align-items: center;
  display: flex;
  margin-left: 8px;
  &:hover {
    cursor: pointer;
  }
`;

const HeaderDiv = styled.div`
  align-items: center;
  display: flex;
  height: 90px;
`;

const HeaderTitle = styled.h2`
  color: forestgreen;
  font-family: Times;
  font-size: large;
  font-weight: bold;
  margin-left: 8px;
`;

const Navbar = styled.ul`
  display: flex;
  margin-left: auto;
  margin-right: 50px;
  gap: 40px;
`;

const NavItem = styled.li`
  color: seagreen;
  font-family: Times;
  font-weight: bold;
`;

const NavItemLink = styled.a`
  position: relative;
  &::after {
    content: '';
    background: darkslategray;
    bottom: -4px;
    height: 1px;
    left: 0px;
    position: absolute;
    transform: scale(0, 1);
    transform-origin: left top;
    transition: transform .3s;
    width: 100%;
  }
  &:hover {
    color: darkslategray;
    cursor: pointer;
  }
  &:hover::after {
    transform: scale(1, 1);
  }
`;

const SideMenuButton = styled.button`
  align-items: center;
  background-color: forestgreen;
  border-radius: 50%;
  border-width: 0px;
  display: flex;
  flex-direction: column;
  height: 55px;
  justify-content: center;
  min-width: 55px;
  padding: 0px;
  position: fixed;
  right: 20px;
`;

const SideMenuButtonDesign = styled.div`
  border-radius: 50%;
  background-color: white;
  height: 5px;
  margin-bottom: 2px;
  margin-top: 2px;
  width: 5px;
`;

export default function Header() {
  const isMobileDesign = useMediaQuery({query: '(max-width: 1050px)'})

  return (
    <HeaderDiv>
      <ImageAndTitleContainer>
        <Image src="/images/logo_forest.svg" width="40" height="40"/>
        <HeaderTitle>Takachiho Company</HeaderTitle>
      </ImageAndTitleContainer>
      {isMobileDesign ? (
        <SideMenuButton>
          <SideMenuButtonDesign />
          <SideMenuButtonDesign />
          <SideMenuButtonDesign />
        </SideMenuButton> ) 
        : (
        <Navbar>
            <NavItem><NavItemLink>COMPANY</NavItemLink></NavItem>
            <NavItem><NavItemLink>BUSINESS</NavItemLink></NavItem>
            <NavItem><NavItemLink>SERVICE</NavItemLink></NavItem>
            <NavItem><NavItemLink>CASE</NavItemLink></NavItem>
            <NavItem><NavItemLink>RECRUIT</NavItemLink></NavItem>
            <NavItem><NavItemLink>NEWS</NavItemLink></NavItem>
            <NavItem><NavItemLink>CONTACT</NavItemLink></NavItem>
        </Navbar>
      )}
    </HeaderDiv>
  );
}