import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Card, Button, ProgressBar } from 'react-bootstrap';
import BasicInfoForm from '../components/forms/BasicInfoForm';
import EmotionForm from '../components/forms/EmotionForm';
import PersonalizationForm from '../components/forms/PersonalizationForm';
import LetterPreview from '../components/letter/LetterPreview';

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
    keywords: ''
  });
  const [letterContent, setLetterContent] = useState('');
  
  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;
  
  const handleNext = () => {
    setStep(step + 1);
    
    // 마지막 단계에서 편지 생성
    if (step === 3) {
      generateLetter();
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
  
  const generateLetter = () => {
    // 실제로는 API 호출이나 알고리즘을 통해 편지 생성
    // 여기서는 예시로 간단한 템플릿 사용
    const letter = `
      사랑하는 ${formData.recipientName}에게,
      
      오늘 이렇게 편지를 쓰게 되어 기쁩니다. 우리가 ${formData.relationship}으로 지낸 지도 ${formData.duration}이 되었네요.
      
      ${formData.occasion}을 맞이하여, 평소에 말하지 못했던 내 마음을 전하고 싶어요. 당신의 ${formData.traits}에 항상 감동받고 있어요.
      
      ${formData.memories}의 추억은 내게 정말 특별해요. 그때 당신과 함께했던 시간들이 내게는 보물 같은 기억으로 남아있습니다.
      
      앞으로도 당신과 함께하는 시간들이 기대돼요. 항상 ${formData.emotion}한 마음으로 당신을 생각합니다.
      
      사랑을 담아,
    `;
    
    setLetterContent(letter);
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
              <Button variant="primary" onClick={handleNext}>편지 생성하기</Button>
            </NavigationButtons>
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
