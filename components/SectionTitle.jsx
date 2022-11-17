import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  color: ${props => props.color};
  font-family: "ヒラギノ明朝 ProN W3", 游ゴシック ,sans-serif ;
  font-size: 30px;
  margin-bottom: 15px;
  text-align: center;
`;

const SectionTitle = ({children, color}) => {
  return (
      <Title color={color}>{children}</Title>
  );
};

export default SectionTitle;