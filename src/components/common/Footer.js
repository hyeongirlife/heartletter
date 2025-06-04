import React from 'react';
import styled from 'styled-components';
import { FaHeart, FaGithub } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 2rem 0;
  margin-top: 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FooterText = styled.p`
  color: ${props => props.theme.textLight};
  margin-bottom: 1rem;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const FooterLink = styled.a`
  color: ${props => props.theme.textLight};
  text-decoration: none;
  display: flex;
  align-items: center;
  
  &:hover {
    color: ${props => props.theme.primary};
  }
  
  svg {
    margin-right: 0.25rem;
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>
          마음을 전하는 가장 아름다운 방법, 하트레터
        </FooterText>
        <FooterText>
          © {year} HeartLetter. All rights reserved.
        </FooterText>
        <FooterLinks>
          <FooterLink href="#">
            <FaHeart /> 서비스 이용약관
          </FooterLink>
          <FooterLink href="https://github.com/hyeongirlife/heartletter" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </FooterLink>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
