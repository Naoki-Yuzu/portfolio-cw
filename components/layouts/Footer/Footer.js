import Image from 'next/image';
import styled from 'styled-components';

const CopyrightText = styled.p`
  color: white;
  font-family: sans-serif;
  font-size: 11px;
  text-align: center;
`;

const FooterDiv = styled.div`
  background-color: forestgreen;
  height: 300px;
  padding: 50px;
`;

const NavInfo = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px 30px;
  justify-content: center;
  margin: 44px 0px 36px;
`;

const NavItem = styled.li`
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const NavItemLink = styled.a`
  @media (max-width: 1000px) {
    font-size: 12px;    
  }
  color: white;
  font-family:  "ヒラギノ明朝 ProN W3", 游ゴシック ,sans-serif ;
  font-size: 13px;
`;

const ImageContainer = styled.div`
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

export default function Footer() {
  return (
    <FooterDiv>
      <ImagesContainer>
        <ImageContainer>
          <Image src="/images/logo_twitter.svg" width="40" height="40"/>
        </ImageContainer>
        <ImageContainer>
          <Image src="/images/logo_facebook.svg" width="40" height="40"/>
        </ImageContainer>
      </ImagesContainer>
      <NavInfo>
        <NavItem><NavItemLink>会社概要</NavItemLink></NavItem>
        <NavItem><NavItemLink>事業内容</NavItemLink></NavItem>
        <NavItem><NavItemLink>取り扱いサービス</NavItemLink></NavItem>
        <NavItem><NavItemLink>成功事例</NavItemLink></NavItem>
        <NavItem><NavItemLink>採用情報</NavItemLink></NavItem>
        <NavItem><NavItemLink>お知らせ</NavItemLink></NavItem>
        <NavItem><NavItemLink>お問い合わせ</NavItemLink></NavItem>
        <NavItem><NavItemLink>プライバシーポリシー</NavItemLink></NavItem>
      </NavInfo>
      <CopyrightText>
        ©︎ Takachiho Company All rights reserved.
      </CopyrightText>
    </FooterDiv>
  );
}