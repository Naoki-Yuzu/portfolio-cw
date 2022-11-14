import Image from 'next/image'
import Head from 'next/head'
import styled, { keyframes } from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { useRef, useState, useEffect } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import ImageTakachiho1 from '../public/images/image_takachiho_01.jpg';
import ImageTakachiho2 from '../public/images/image_takachiho_02.jpg';
import ImageRecruitment from '../public/images/image_recruitment.jpg';
import ImageCompany from '../public/images/image_company.jpg';
import ImageBusiness from '../public/images/image_business.jpg';
import ImageService from '../public/images/image_service.jpg';
import ImageFlower1 from '../public/images/image_flower_01.jpg';
import ImageFlower2 from '../public/images/image_flower_02.jpg';
import ImageFlower3 from '../public/images/image_flower_03.jpg';
import ImageFlower4 from '../public/images/image_flower_04.jpg';
import ImageFlower5 from '../public/images/image_flower_05.jpg';

// Animation Section

const animationAutoSlide = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const animationAutoSlideDelay = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-200%);
  }
`;

const AnimationSection = styled.section`
  width: 100%;
`;

const AnimationStaticText = styled.p`
  @media (max-width: 770px) {
      font-size: 14px;
      margin-bottom: 26px;
    }
  color: forestgreen;
  font-family: "ヒラギノ明朝 ProN W3", 游ゴシック ,sans-serif ;
  font-size: 16px;
  margin-bottom: 30px;
`; 

const AnimationSliderContainer = styled.div`
  @media (max-width: 770px) {
  }
  display: flex;
  overflow: hidden;
`;

const AnimationSliderFirstList = styled.ul`
  @media (max-width: 770px) {
    height: 200px;
  }
  align-items: center;
  animation: ${animationAutoSlide} 30s -15s linear infinite;
  display: flex;
  height: 400px;
`;

const AnimationSliderImage = styled.img`
  @media (max-width: 770px) {
    height: 150px;
    width: 150px;
  }
  height: 300px;
  width: 300px;
  object-fit: cover;
`;

const AnimationSliderItems = styled.li`
`;

const AnimationSliderSecondList = styled.ul`
  @media (max-width: 770px) {
    height: 200px;
  }
  align-items: center;
  animation: ${animationAutoSlideDelay} 30s linear infinite;
  display: flex;
  height: 400px;
`;

const AnimationTextContainer = styled.div`
  @media (max-width: 770px) {
    margin-top: 38px;
    padding: 0px 30px 72px;
  }
  margin-top: 50px;
  padding: 0px 20% 150px;
`;

const AnimationTypingText = styled.p`
  @media (max-width: 770px) {
    font-size: 40px;
    line-height: 1.75;
    min-height: 280px;
  }
  color: forestgreen;
  font-family: "ヒラギノ明朝 ProN W3", 游ゴシック ,sans-serif ;
  font-size: 50px;
  font-weight: 500;
  min-height: 116px;
`;


// Company Section

const CompanySection = styled.section`
  @media (max-width: 770px) {
    padding-bottom: 0px;
  }
  padding-bottom: 116px;
`;

const Container = styled.div`
  @media (max-width: 770px) {
    gap: 28px;    
  }
  @media (max-width: 1200px) {
    gap: 40px;
    padding: 20px 30px 20px;
  }
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
  justify-content: center;
  padding: 48px 170px 20px 114px;
`;

const Description = styled.div`
  @media (max-width: 770px) {
    padding-top: 0px;
    width: 100%;
  }
  padding-top: 70px;
  width: 40%;
`;

// Event Section

const EventExamplesContainer = styled.div`
  @media (max-width: 770px) {
    gap: 20px;
    padding: 0px;
  }
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  padding: 0px 20px;
  margin-bottom: 50px;
`;

const EventExampleContainer = styled.div`
  @media (max-width: 1040px) {
    width: 48%;
  }
  @media (max-width: 770px) {
    width: 100%;
  }
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  width: 480px;
`;

const EventExampleImage = styled.img`
  @media (max-width: 390px) {
    height: 158px;
  }
  border-radius: 10px;
  height: 275px;
  margin-bottom: 18px;
  object-fit: cover;
  width: 100%;
`;

const EventExampleTile = styled.h3`
  color: #888;
  font-size: 14px;
  font-family: sans-serif;
  margin-bottom: 14px;
`;

const EventExampleText = styled.p`
  color: #222e40;
  font-size: 14px;
  font-family: sans-serif;
  font-weight: bold;
  line-height: 1.8;
`;

const EventSection = styled.section`
@media (max-width: 770px) {
    padding: 56px 30px ;
  }
  background-color: #659165;
  padding: 85px 0px;
`;

const EventTitle = styled.h2`
  color: white;
  font-family: "ヒラギノ明朝 ProN W3", 游ゴシック ,sans-serif ;
  font-size: 30px;
  margin-bottom: 15px;
  text-align: center;
`;

const EventSubTitle = styled.p`
  color: white;
  font-family: "ヒラギノ明朝 ProN W3", 游ゴシック, sans-serif;
  font-size: 15px;
  padding-bottom: 50px;
  text-align: center;
`;

const ImageContainer = styled.div`
  min-height: 316px;
  min-width: 316px;
  width: 40%;
  text-align: center;
`;

const Main = styled.main`
  background-color: white;
  min-height: 100vh;
`;

// Nav Section

const NavItem = styled.li`
  @media (max-width: 770px) {
    height: 130px;
    padding: 10px;
    width: 100%;
  }
  /* background-image: url(${ImageTakachiho1.src}); */
  background-image: url(${props => props.backgroundImage});
  background-size: 105%;
  border-radius: 10px;
  height: 200px;
  object-fit: cover;
  padding: 20px;
  position: relative;
  width: 48%;
`;

const NavItemIcon = styled.div`
  background-color: white;
  border-radius: 50%;
  height: 20px;
  transition: all 0.3s ease-in-out 0s;
  position: relative;
  width: 20px;
  &::before { 
    border-right: 3px solid #659165;
    border-top: 3px solid #659165;
    bottom: 0;
    content: "";
    height: 8px;
    left: 5px;
    margin: auto;
    position: absolute;
    top: 0;
    transform: rotate(45deg);
    width: 8px;
  }
`;

const NavItemLink = styled.a`
  background-color: transparent;
  height: 100%;
  left: 0;
  width: 100%;
  position: absolute;
  top: 0;
  &:hover {
    background-color: white;
    cursor: pointer;
    opacity: 0.7;
  }
`;

const NavItemSubtitle = styled.p`
  @media (max-width: 770px) {
    font-size: 12px;  
  }
  color: white;
  font-family: sans-serif;
  font-size: 15px;
  font-weight: bold;
  `;

const NavItemTextContainer = styled.div`
  @media (max-width: 770px) {
    bottom: 10px;
    right: 10px;
  }
  align-items: center;
  bottom: 20px;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  position: absolute;
  right: 20px;
`;

const NavItemTitle = styled.h3`
  @media (max-width: 770px) {
    font-size: 26px;  
  }
  color: white;
  font-family: "ヒラギノ明朝 ProN W3", 游ゴシック ,sans-serif ;
  font-size: 30px;
  left: 50%;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const NavList = styled.ul`
  @media (max-width: 1040px) {
    padding: 0px;
  }
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 0px 30px;
`;

const NavSection = styled.section`
  padding: 86px 30px;
`;

// News Section

const NewsDay = styled.p`
@media (max-width: 1000px) {
    font-size: 14px;
  }
  color: forestgreen;
  font-family: "ヒラギノ明朝 ProN W3", 游ゴシック, sans-serif;
  font-size: 16px;
  margin-bottom: 14px;
`;

const NewsItem = styled.li`
  border-bottom: 1px solid rgb(229, 229, 229);
  padding: 20px 0px 25px 10px;
  `;

const NewsList = styled.ul`
  border-top: 1px solid rgb(229, 229, 229);
  margin: 0px auto 40px;
  max-width: 960px;
`;

const NewsText = styled.p`
  @media (max-width: 1000px) {
    font-size: 14px;
  }
  color: #222e40;
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.5;
`;

const NewsSection = styled.section`
  @media (max-width: 1000px) {
    padding: 0px 30px 80px 30px;
  }
  padding: 106px 0px 120px;
`;

const NewsTitle = styled.h2`
  color: forestgreen;
  font-family: "ヒラギノ明朝 ProN W3", 游ゴシック ,sans-serif ;
  font-size: 30px;
  margin-bottom: 15px;
  text-align: center;
`;

const NewsSubTitle = styled.p`
  color: forestgreen;
  font-family: "ヒラギノ明朝 ProN W3", 游ゴシック, sans-serif;
  font-size: 15px;
  padding-bottom: 50px;
  text-align: center;
`;

const MoreDetailContainer = styled.div`
  @media (max-width: 770px) {
    padding-right: 0px;
  }
  display: flex;
  padding-right: ${props => props.paddingRight};
`;

const MoreDetailLink = styled.a`
  align-items: center;
  display: flex;
  justify-content: flex-end; 
  margin-left: auto;
  &:hover {
    cursor: pointer;
    div {
      background-color: darkslategray;
      transform: scale(1.2, 1.2);
    }
    p {
      color: darkslategray;
      border-color: darkslategray;
    }
  }
`;

const MoreDetailIcon = styled.div`
  background-color: ${props => props.backgroundColor};
  border-radius: 50%;
  height: 40px;
  transition: all 0.3s ease-in-out 0s;
  position: relative;
  width: 40px;
  &::before { 
    border-right: 3px solid ${props => props.color};
    border-top: 3px solid ${props => props.color};
    bottom: 0;
    content: "";
    height: 14px;
    left: 10px;
    margin: auto;
    position: absolute;
    top: 0;
    transform: rotate(45deg);
    width: 14px;
  }
`;

const MoreDetailText = styled.p`
  border-bottom: 1px solid ${props => props.bodderColor};
  color: ${props => props.color};
  font-family: Times;
  font-size: 16px;
  font-weight: 500;
  line-height: 0.9;
  margin-left: auto;
  margin-right: 14px;
  transition: all 0.3s ease-in-out 0s;
`;

const TitleDescription = styled.h1`
  @media (max-width: 770px) {
    font-size: 24px;
    margin-bottom: 22px;
  }
  color: forestgreen;
  font-family:  "ヒラギノ明朝 ProN W3", 游ゴシック ,sans-serif ;
  font-size: 28px;
  line-height: 2;
  margin-bottom: 28px;
`;

const TextDescription = styled.p`
  color: #222e40;
  font-family: sans-serif;
  font-size: 13px;
  line-height: 2;
  margin-bottom: 30px;
`;

export const useClient = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined')
      setIsClient(true)
  }, [])

  return isClient
}

export default function Home() {
  const isMobileDesign = useMediaQuery({query: '(max-width: 1050px)'});
  const isClient = useClient();

  const [text] = useTypewriter({
    words: ["Communicate Fascination Of Takachiho From Miyazaki."],
    typeSpeed: 130,
  });

  const images = [
    ImageFlower1.src,
    ImageFlower2.src,
    ImageFlower3.src,
    ImageFlower4.src,
    ImageFlower5.src,
    ImageFlower1.src,
    ImageFlower2.src,
    ImageFlower3.src,
    ImageFlower4.src,
    ImageFlower5.src,
  ];

  return (
    <>
      <Head>
        <title>Takachiho Company</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <CompanySection>
          <Container>
            <ImageContainer>
              {/* styledcomponents img タグver */}
              {/* <IconImage  src={icon.src} /> */}
            {isClient && isMobileDesign ? (
              <Image src="/images/image_forest.jpg" height="316px" width="316px"  objectFit="cover" style={{ borderRadius: "60% 50% 70% 40%"}}/>
            ) 
            : (
              <Image src="/images/image_forest.jpg" height="500px" width="500px" objectFit="cover" style={{ borderRadius: "60% 50% 70% 40%"}}/>
            )}
            </ImageContainer>
            <Description>
              <TitleDescription>
                Takachiho Company は<br/>
                高千穂の魅力を<br />
                全国へ発信し続けます。
              </TitleDescription>
              <TextDescription>
                高千穂で育った人、高千穂に訪れて興味を持った人、<br/>
                そんなメンバー達が、神話の里と呼ばれる高千穂の文化や食事、<br />
                そして街並みなどを伝えていきます。
              </TextDescription>
              <MoreDetailContainer paddingRight="0px">
                <MoreDetailLink>
                  <MoreDetailText color="forestgreen" bodderColor="forestgreen">VIEW MORE</MoreDetailText>
                  <MoreDetailIcon  backgroundColor="forestgreen" color="white"/>
                </MoreDetailLink>
              </MoreDetailContainer>
            </Description>
          </Container>
        </CompanySection>
        <AnimationSection>
          <AnimationSliderContainer>
            <AnimationSliderFirstList>
              {images.map(image => {
                return (
                  <AnimationSliderItems key={image}>
                    <AnimationSliderImage src={image} />
                  </AnimationSliderItems>
                );
              })}
            </AnimationSliderFirstList>
            <AnimationSliderSecondList>
              {images.map(image => {
                return (      
                  <AnimationSliderItems key={image}>
                    <AnimationSliderImage src={image} />
                  </AnimationSliderItems>
                );
              })}
            </AnimationSliderSecondList>
          </AnimationSliderContainer>
          <AnimationTextContainer>
            <AnimationStaticText>
              宮崎から、高千穂の魅力を伝える。
            </AnimationStaticText>
            <AnimationTypingText>
              {text}<Cursor />
            </AnimationTypingText>
          </AnimationTextContainer>
        </AnimationSection>
        <EventSection>
          <EventTitle>EVENT</EventTitle>
          <EventSubTitle>イベント</EventSubTitle>
          <EventExamplesContainer>
            <EventExampleContainer>
              <EventExampleImage src={ImageTakachiho1.src} />
              <EventExampleTile>高千穂峡ライトアップ</EventExampleTile>
              <EventExampleText>日本の滝百選に指定された真名井の滝と柱状節理の峡谷をLED照明が青、黄色、紫、ピンクなど色が移り変わり真名井の滝を照らします。</EventExampleText>
            </EventExampleContainer>
            <EventExampleContainer>
              <EventExampleImage src={ImageTakachiho2.src} />
              <EventExampleTile>ボート漕ぎ体験</EventExampleTile>
              <EventExampleText>最大3名までのボートに乗って、渓谷を遊覧することができます。大変人気があるため事前予約制となっています。</EventExampleText>
            </EventExampleContainer>
          </EventExamplesContainer>
          <MoreDetailContainer paddingRight="250px">
            <MoreDetailLink>
              <MoreDetailText  color="white" bodderColor="white">VIEW MORE</MoreDetailText>
              <MoreDetailIcon backgroundColor="white" color="#659165" />
            </MoreDetailLink>
          </MoreDetailContainer>
        </EventSection>
        <NavSection>
          <NavList>
            <NavItem backgroundImage={ImageCompany.src}>
              <NavItemTitle>COMPANY</NavItemTitle>
              <NavItemTextContainer>
                <NavItemSubtitle>会社紹介</NavItemSubtitle>
                <NavItemIcon />
              </NavItemTextContainer>
              <NavItemLink />
            </NavItem>
            <NavItem backgroundImage={ImageBusiness.src}>
              <NavItemTitle>BUSINESS</NavItemTitle>
              <NavItemTextContainer>
                <NavItemSubtitle>事業内容</NavItemSubtitle>
                <NavItemIcon />
              </NavItemTextContainer>
              <NavItemLink />
            </NavItem>
            <NavItem backgroundImage={ImageService.src}>
              <NavItemTitle>SERVICE</NavItemTitle>
              <NavItemTextContainer>
                <NavItemSubtitle>取り扱いサービス</NavItemSubtitle>
                <NavItemIcon />
              </NavItemTextContainer>
              <NavItemLink />
            </NavItem>
            <NavItem backgroundImage={ImageRecruitment.src}>
              <NavItemTitle>RECRUIT</NavItemTitle>
              <NavItemTextContainer>
                <NavItemSubtitle>採用情報</NavItemSubtitle>
                <NavItemIcon />
              </NavItemTextContainer>
              <NavItemLink />
            </NavItem>
          </NavList>
        </NavSection>
        <NewsSection>
          <NewsTitle>NEWS</NewsTitle>
          <NewsSubTitle>お知らせ</NewsSubTitle>
          <NewsList>
            <NewsItem>
              <NewsDay>2022.10.25</NewsDay>
              <NewsText>来年度より新卒採用を始めます！</NewsText>
            </NewsItem>
            <NewsItem>
              <NewsDay>2022.9.23</NewsDay>
              <NewsText>
                SNS運用を始めました！<br />
                是非一度、訪れてみてください。皆様の訪問を心よりお待ちしています。
              </NewsText>
            </NewsItem>
          </NewsList>
          <MoreDetailContainer paddingRight="250px">
            <MoreDetailLink>
                <MoreDetailText  color="forestgreen" bodderColor="white">VIEW MORE</MoreDetailText>
                <MoreDetailIcon backgroundColor="forestgreen" color="white" />
              </MoreDetailLink>
          </MoreDetailContainer>
        </NewsSection>
      </Main>
    </>
  )
}
