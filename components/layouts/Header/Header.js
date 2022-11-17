import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react'
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';

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

const SideMenuButton = styled.div`
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
  z-index: 99;
`;

const SideMenuButtonDesign = styled.span`
  border-radius: 50%;
  background-color: white;
  height: 5px;
  margin-bottom: 2px;
  margin-top: 2px;
  width: 5px;
`;

export const useClient = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined')
      setIsClient(true)
  }, [])

  return isClient
}

export default function Header() {
    const isMobileDesign = useMediaQuery({query: '(max-width: 1050px)'});
    const isClient = useClient();

  return (
    <HeaderDiv>
      <Link href="/">
        <ImageAndTitleContainer>
          <Image src="/images/logo_forest.svg" width="40" height="40"/>
          <HeaderTitle>Takachiho Company</HeaderTitle>
        </ImageAndTitleContainer>
      </Link>
      {isClient && isMobileDesign ? (
        <SideMenuButton>
        <SideMenuButtonDesign />
        <SideMenuButtonDesign />
        <SideMenuButtonDesign />
      </SideMenuButton> ) 
      : (
      <Navbar>
        <NavItem><NavItemLink href="/company">COMPANY</NavItemLink></NavItem>
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