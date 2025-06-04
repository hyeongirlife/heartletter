import React from 'react';
import styled from 'styled-components';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { FaEdit, FaTrash, FaDownload } from 'react-icons/fa';

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadow};
`;

const LetterCard = styled(Card)`
  margin-bottom: 1.5rem;
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadow};
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const LetterActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const MyLetters = () => {
  // 임시 데이터
  const letters = [];
  
  return (
    <Container>
      <PageTitle>내 편지함</PageTitle>
      
      {letters.length === 0 ? (
        <EmptyState>
          <h3>저장된 편지가 없습니다</h3>
          <p>새로운 편지를 작성해보세요!</p>
          <Button variant="primary" href="/create">편지 작성하기</Button>
        </EmptyState>
      ) : (
        <Row>
          {letters.map((letter, index) => (
            <Col md={6} lg={4} key={index}>
              <LetterCard>
                <Card.Header>{letter.recipientName}에게</Card.Header>
                <Card.Body>
                  <Card.Title>{letter.occasion || '편지'}</Card.Title>
                  <Card.Text>
                    {letter.content.substring(0, 100)}...
                  </Card.Text>
                  <LetterActions>
                    <Button variant="outline-primary" size="sm">
                      <FaEdit /> 수정
                    </Button>
                    <Button variant="outline-success" size="sm">
                      <FaDownload /> 다운로드
                    </Button>
                    <Button variant="outline-danger" size="sm">
                      <FaTrash /> 삭제
                    </Button>
                  </LetterActions>
                </Card.Body>
                <Card.Footer className="text-muted">
                  작성일: {letter.createdAt}
                </Card.Footer>
              </LetterCard>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default MyLetters;
