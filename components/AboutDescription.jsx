import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  @media (max-width: 770px) {
    width: 90%;
    padding: 25px 5px;
  }
  width: 700px;
  margin: 0 auto;  
  display: flex;
  padding: 25px 48px;
  border-top: 1px solid white;
`;

const Title = styled.p`
  @media (max-width: 770px) {
      width: 30%;
    }
    width: 100px;
    color: white;
    font-size: 16px;
    margin-right: 30px;
    line-height: 1.63;
    `;

const Text = styled.p`
  @media (max-width: 770px) {
      width: 70%;
    }
  color: white;
  font-size: 16px;
  line-height: 1.63;
`;

const AboutDescription = ({title, text}) => {
  return (
      <Container>
        <Title >{title}</Title>
        <Text >{text}</Text>
      </Container>
  );
};

export default AboutDescription;