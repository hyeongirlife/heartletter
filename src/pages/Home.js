import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaPen, FaHeart, FaMagic } from 'react-icons/fa';

const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 1rem;
  background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
  border-radius: 10px;
  margin-bottom: 3rem;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 1.5rem;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 3.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: white;
  max-width: 600px;
  margin: 0 auto 2rem;
`;

const CreateButton = styled(Link)`
  display: inline-block;
  background-color: white;
  color: ${props => props.theme.primary};
  font-weight: bold;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    color: ${props => props.theme.primary};
  }
`;

const FeaturesSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeatureCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  box-shadow: ${props => props.theme.shadow};
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.primary};
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  margin-bottom: 1rem;
  color: ${props => props.theme.textDark};
`;

const FeatureDescription = styled.p`
  color: ${props => props.theme.textLight};
`;

const Home = () => {
  return (
    <>
      <HeroSection>
        <HeroTitle>마음을 담은 편지, 하트레터</HeroTitle>
        <HeroSubtitle>
          말로 표현하기 어려운 마음을 아름다운 편지로 전해보세요.
          하트레터가 당신의 진심을 담은 편지 작성을 도와드립니다.
        </HeroSubtitle>
        <CreateButton to="/create">
          편지 작성하기
        </CreateButton>
      </HeroSection>
      
      <FeaturesSection>
        <FeatureCard>
          <FeatureIcon>
            <FaPen />
          </FeatureIcon>
          <FeatureTitle>맞춤형 편지</FeatureTitle>
          <FeatureDescription>
            상대방과의 관계, 전하고 싶은 감정에 맞춰
            개인화된 편지를 작성해드립니다.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureIcon>
            <FaHeart />
          </FeatureIcon>
          <FeatureTitle>다양한 스타일</FeatureTitle>
          <FeatureDescription>
            로맨틱, 감성적, 유머러스 등 다양한 스타일의
            편지 템플릿을 제공합니다.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureIcon>
            <FaMagic />
          </FeatureIcon>
          <FeatureTitle>쉽고 빠르게</FeatureTitle>
          <FeatureDescription>
            몇 가지 질문에 답하면 AI가 당신의 마음을
            담은 편지 초안을 작성해드립니다.
          </FeatureDescription>
        </FeatureCard>
      </FeaturesSection>
    </>
  );
};

export default Home;
