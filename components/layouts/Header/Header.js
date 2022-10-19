import { styled, Box } from '@mui/system';
import { useMediaQuery, Stack } from "@mui/material";
import Image from 'next/image';

const HeaderDiv = styled(Box)({
  alignItems: "center",
  display: "flex",
  height: 90,
  paddingLeft: 8
});

const HeaderTitle = styled(Box)({
  color: "rgb(34,139,34)",
  fontFamily: "Times",
  marginLeft: 8
});

const SideMenuButton = styled("button")({
  alignItems: "center",
  backgroundColor: "rgb(34,139,34)",
  borderRadius: "50%",
  borderWidth: 0,
  display: "flex",
  flexDirection: "column",
  height: 55,
  justifyContent: "center",
  // marginLeft: "auto",
  // marginRight: 20,
  minWidth: 55,
  padding: 0,
  position: "fixed",
  right: 20
});

const SideMenuButtonDesign = styled("div")({
  borderRadius: "50%",
  backgroundColor: "white",
  height: 5,
  marginBottom: 2,
  marginTop: 2,
  width: 5
});

const Navbar = styled(Stack)({
  marginLeft: "auto",
  marginRight: 50,
  gap: 40,
});

const NavItem = styled(Box)({
  color: "rgb(20,168,59)",
  fontFamily: "Times",
  fontWeight: "bold"
});


export default function Header() {

  const mobileDesign = useMediaQuery("(max-width:1050px)");

  return (
    <HeaderDiv component="div">
      <Image src="/images/logo_forest.svg" width="40" height="40"/>
      <HeaderTitle component="h3">Takachiho Company</HeaderTitle>
      {mobileDesign ? (
        <SideMenuButton>
          <SideMenuButtonDesign />
          <SideMenuButtonDesign />
          <SideMenuButtonDesign />
        </SideMenuButton> ) 
        : (
        <Navbar direction="row">
            <NavItem>COMPANY</NavItem>
            <NavItem>BUSINESS</NavItem>
            <NavItem>SERVICE</NavItem>
            <NavItem>CASE</NavItem>
            <NavItem>RECRUIT</NavItem>
            <NavItem>NEWS</NavItem>
            <NavItem>CONTACT</NavItem>
        </Navbar>

      )}
      
    </HeaderDiv>
  );
}