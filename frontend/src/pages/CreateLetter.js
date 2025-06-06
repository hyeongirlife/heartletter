import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Card, Button, ProgressBar, Spinner, Alert } from 'react-bootstrap';
import BasicInfoForm from '../components/forms/BasicInfoForm';
import EmotionForm from '../components/forms/EmotionForm';
import PersonalizationForm from '../components/forms/PersonalizationForm';
import LetterPreview from '../components/letter/LetterPreview';
import axios from 'axios';

// CORS 이슈 방지를 위한 axios 설정
axios.defaults.withCredentials = false;

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

const StepCard = styled(Card)`
  margin-bottom: 2rem;
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadow};
`;

const StepHeader = styled(Card.Header)`
  background-color: ${props => props.theme.primary};
  color: white;
  font-weight: bold;
  padding: 1rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const StepBody = styled(Card.Body)`
  padding: 2rem;
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const StepProgress = styled(ProgressBar)`
  margin-bottom: 2rem;
  height: 10px;
`;

const CreateLetter = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    recipientName: '',
    relationship: '',
    duration: '',
    emotion: '',
    occasion: '',
    memories: '',
    traits: '',
    keywords: '',
    mood: '로맨틱',
    length: '중간 길이',
    specialRequest: ''
  });
  const [letterContent, setLetterContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;
  
  const handleNext = () => {
    if (step === 3) {
      generateLetter();
    } else {
      setStep(step + 1);
    }
  };
  
  const handlePrevious = () => {
    setStep(step - 1);
  };
  
  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const generateLetter = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // 전체 API 경로를 명시적으로 지정
      const response = await axios.post('http://localhost:5001/api/letter/generate', formData);
      
      if (response.data && response.data.success) {
        setLetterContent(response.data.content);
        setStep(step + 1);
      } else {
        throw new Error('편지 생성에 실패했습니다.');
      }
    } catch (err) {
      console.error('편지 생성 오류:', err);
      setError(err.response?.data?.message || '편지 생성 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Container>
      <PageTitle>마음을 담은 편지 작성하기</PageTitle>
      <StepProgress now={progress} variant="danger" />
      
      {step === 1 && (
        <StepCard>
          <StepHeader>Step 1: 기본 정보</StepHeader>
          <StepBody>
            <BasicInfoForm 
              formData={formData} 
              onChange={handleInputChange} 
            />
            <NavigationButtons>
              <div></div>
              <Button variant="primary" onClick={handleNext}>다음</Button>
            </NavigationButtons>
          </StepBody>
        </StepCard>
      )}
      
      {step === 2 && (
        <StepCard>
          <StepHeader>Step 2: 감정 및 상황</StepHeader>
          <StepBody>
            <EmotionForm 
              formData={formData} 
              onChange={handleInputChange} 
            />
            <NavigationButtons>
              <Button variant="outline-secondary" onClick={handlePrevious}>이전</Button>
              <Button variant="primary" onClick={handleNext}>다음</Button>
            </NavigationButtons>
          </StepBody>
        </StepCard>
      )}
      
      {step === 3 && (
        <StepCard>
          <StepHeader>Step 3: 개인화 요소</StepHeader>
          <StepBody>
            <PersonalizationForm 
              formData={formData} 
              onChange={handleInputChange} 
            />
            <NavigationButtons>
              <Button variant="outline-secondary" onClick={handlePrevious}>이전</Button>
              <Button 
                variant="primary" 
                onClick={handleNext}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    {' '}편지 생성 중...
                  </>
                ) : '편지 생성하기'}
              </Button>
            </NavigationButtons>
            {error && (
              <Alert variant="danger" className="mt-3">
                {error}
              </Alert>
            )}
          </StepBody>
        </StepCard>
      )}
      
      {step === 4 && (
        <StepCard>
          <StepHeader>Step 4: 편지 미리보기 및 수정</StepHeader>
          <StepBody>
            <LetterPreview content={letterContent} setContent={setLetterContent} />
            <NavigationButtons>
              <Button variant="outline-secondary" onClick={handlePrevious}>이전</Button>
              <Button variant="success">저장하기</Button>
            </NavigationButtons>
          </StepBody>
        </StepCard>
      )}
    </Container>
  );
};

export default CreateLetter;
