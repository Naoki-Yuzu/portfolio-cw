import React from 'react';
import styled from 'styled-components';

const SubTitle = styled.p`
  color: ${props => props.color};
  font-family: "ヒラギノ明朝 ProN W3", 游ゴシック, sans-serif;
  font-size: 15px;
  padding-bottom: 50px;
  text-align: center;
`;

const SectionSubTitle = ({color, children}) => {
  return (
    <SubTitle color={color}>{children}</SubTitle>
  );
};

export default SectionSubTitle;