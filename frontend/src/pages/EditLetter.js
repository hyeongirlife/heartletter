import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

const EditLetter = () => {
  return (
    <Container>
      <PageTitle>편지 수정하기</PageTitle>
      <p>이 페이지는 아직 개발 중입니다.</p>
    </Container>
  );
};

export default EditLetter;
