import React from 'react';
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import { FaCopy, FaDownload } from 'react-icons/fa';

const PreviewContainer = styled.div`
  margin-bottom: 2rem;
`;

const LetterPaper = styled.div`
  background-color: #fff9f9;
  border: 1px solid #f0e0e0;
  border-radius: 5px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  font-family: 'Nanum Myeongjo', serif;
  white-space: pre-wrap;
  min-height: 300px;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const LetterPreview = ({ content, setContent }) => {
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    alert('편지 내용이 클립보드에 복사되었습니다.');
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = '하트레터_편지.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <PreviewContainer>
      <h4>편지 미리보기</h4>
      <p>아래 내용을 자유롭게 수정하세요.</p>
      
      <LetterPaper>
        {content}
      </LetterPaper>
      
      <ActionButtons>
        <Button variant="outline-primary" onClick={handleCopy}>
          <FaCopy /> 복사하기
        </Button>
        <Button variant="outline-success" onClick={handleDownload}>
          <FaDownload /> 다운로드
        </Button>
      </ActionButtons>
      
      <Form.Group>
        <Form.Label>편지 내용 수정</Form.Label>
        <Form.Control
          as="textarea"
          rows={10}
          value={content}
          onChange={handleContentChange}
        />
      </Form.Group>
    </PreviewContainer>
  );
};

export default LetterPreview;
