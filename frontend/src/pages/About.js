import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

const ContentSection = styled.section`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadow};
`;

const About = () => {
  return (
    <Container>
      <PageTitle>하트레터 소개</PageTitle>
      <ContentSection>
        <h2>마음을 전하는 가장 아름다운 방법</h2>
        <p>
          하트레터는 사랑하는 사람에게 마음을 전하고 싶지만 어떻게 표현해야 할지 모르는 분들을 위해 만들어진 서비스입니다.
          몇 가지 질문에 답하면 AI가 당신의 마음을 담은 아름다운 편지를 작성해 드립니다.
        </p>
        <p>
          작성된 편지는 자유롭게 수정하고 개인화할 수 있으며, 저장하거나 다운로드하여 사용할 수 있습니다.
        </p>
        <h3>주요 기능</h3>
        <ul>
          <li>맞춤형 편지 작성</li>
          <li>다양한 스타일과 분위기 제공</li>
          <li>편지 저장 및 관리</li>
          <li>다운로드 및 공유 기능</li>
        </ul>
      </ContentSection>
    </Container>
  );
};

export default About;
