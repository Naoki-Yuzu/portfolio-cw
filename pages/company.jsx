import React from 'react';
import styled from 'styled-components';
import AboutDescription from '../components/AboutDescription';
import SectionSubTitle from '../components/SectionSubTitle';
import SectionTitle from '../components/SectionTitle';
import ImagePeople from '../public/images/image_people.jpg';
import ImageHuman from '../public/images/image_human.jpg';

const items = [
  {
    title: "会社名",
    text: "Takachiho Company",
  },
  {
    title: "所在地",
    text: "宮崎県宮崎市1丁目1番1号 ひむかいビル1F",
  },
  {
    title: "代表者",
    text: "宮崎 ひなた",
  },
  {
    title: "創業日",
    text: "2022年1月1日",
  },
  {
    title: "資本金",
    text: "5,000,000円",
  },
  {
    title: "従業員数",
    text: "10名",
  },
  {
    title: "事業内容",
    text: "地方創生事業",
  },
];

const CompanySection = styled.section`
  @media (max-width: 770px) {
    padding: 50px 15px 0px;
  }
  padding: 50px 100px 0px;
`;

const GreetingText = styled.p`
  @media (max-width: 770px) {
    font-size: 14px;
    text-align: left;
    padding: 0px 15px;
  }
  color: black;
  font-size: 16px;
  font-family: "ヒラギノ明朝 ProN W3", 游ゴシック ,sans-serif ;
  letter-spacing: 0.8px;
  text-align: center;
  line-height: 2.8;
  margin-bottom: 40px;
`;

const CompanyImage = styled.img`
  @media (max-width: 770px) {
    height: 40%;
    width: 90%;
  }
  height: 40%;
  width: 80%;
  max-width: 850px;
  max-height: 470px;
  object-fit: cover;
  display: block;
  margin: 0px auto;
  border-radius: 20px;
`;

const HumanInfoContainer = styled.div`
  @media (max-width: 770px) {
    padding: 70px 0px;
    position: relative;
  }
  padding: 120px 0px 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const HumanImage = styled.img`
  @media (max-width: 770px) {
    height: 300px;
    width: 300px;
    position: absolute;
    top: 190px;
  }
  width: 400px;
  height: 400px;
  object-fit: cover;
  object-position: 0 100%;
  border-radius: 50%;
`;

const HumanDescriptionContainer = styled.div`
  @media (max-width: 770px) {
      width: 300px;
    }
  width: 40%;
`;

const PositionText = styled.p`
  color: forestgreen;
  font-size: 14px;
  margin-bottom: 16px;
  letter-spacing: 0.7px;
`;

const NameTextOfEn = styled.p`
  font-size: 30px;
  font-family: "ヒラギノ明朝 ProN W3", 游ゴシック ,sans-serif ;
  margin-bottom: 18px;
  letter-spacing: 1.5px;
`

const NameTextOfJa = styled.p`
  @media (max-width: 770px) {
    margin-bottom: 350px;
  }
  font-size: 20px;
  font-family: "ヒラギノ明朝 ProN W3", 游ゴシック ,sans-serif ;
  margin-bottom: 50px;
  letter-spacing: 1px;
`;

const CareerText = styled.p`
  font-size: 14px;
  line-height: 2;
  letter-spacing: 0.7px;
` ;

const AboutSection = styled.section`
  @media (max-width: 770px) {
    padding: 50px 15px 50px;
  }
  padding: 120px 100px 120px;
  background-color: #659165;
`;

const AboutDescriptionContainer = styled.div`
  @media (max-width: 770px) {
      width: 90%;
    }
  width: 700px;
  border-bottom: 1px solid white;
  margin: 0 auto;
`;

const Company = () => {
  return (
    <section>
      <CompanySection>
        <SectionTitle color="forestgreen">COMPANY</SectionTitle>
        <SectionSubTitle color="forestgreen">会社紹介</SectionSubTitle>
        <GreetingText>
          株式会社Takachiho Companyのホームページをご覧頂き、誠にありがとうございます。<br />
          メンバー全員が高千穂を愛しており、高千穂のことを誰よりも知っています。<br />
          そういったことを活かし、<br />
          様々な角度から高千穂の魅力をお伝えできればと思っています。<br />  
        </GreetingText>
        <CompanyImage src={ImagePeople.src} />
        <HumanInfoContainer>
          <HumanImage src={ImageHuman.src} />
          <HumanDescriptionContainer>
            <PositionText>代表取締役社長</PositionText>
            <NameTextOfEn>Miyazaki Hinata</NameTextOfEn>
            <NameTextOfJa>宮崎 ひなた</NameTextOfJa>
            <CareerText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
              Itaque impedit doloribus,<br /> 
              aliquid dolorem ut doloremque cum sunt provident aut minus veritatis sint dolores, <br />
              nulla eligendi officiis iste iusto perspiciatis error.
            </CareerText>
          </HumanDescriptionContainer>
        </HumanInfoContainer>
      </CompanySection>
      <AboutSection>
        <SectionTitle color="white">ABOUT</SectionTitle>
        <SectionSubTitle color="white">会社概要</SectionSubTitle>
        <AboutDescriptionContainer>
          {items.map(item => {
            return (
                <AboutDescription key={item.title} title={item.title} text={item.text} />
              ); 
          })}
        </AboutDescriptionContainer>
      </AboutSection>
    </section>
  );
};

export default Company;