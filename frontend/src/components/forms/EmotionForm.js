import React from 'react';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';

const FormGroup = styled(Form.Group)`
  margin-bottom: 1.5rem;
`;

const EmotionForm = ({ formData, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <Form>
      <FormGroup controlId="emotion">
        <Form.Label>전달하고 싶은 주요 감정</Form.Label>
        <Form.Select
          name="emotion"
          value={formData.emotion}
          onChange={handleChange}
        >
          <option value="">감정을 선택하세요</option>
          <option value="사랑">사랑</option>
          <option value="감사">감사</option>
          <option value="그리움">그리움</option>
          <option value="미안함">미안함</option>
          <option value="설렘">설렘</option>
          <option value="행복">행복</option>
        </Form.Select>
      </FormGroup>

      <FormGroup controlId="occasion">
        <Form.Label>특별한 상황 (해당되는 경우)</Form.Label>
        <Form.Select
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
        >
          <option value="">상황을 선택하세요</option>
          <option value="기념일">기념일</option>
          <option value="생일">생일</option>
          <option value="프로포즈">프로포즈</option>
          <option value="화해">화해</option>
          <option value="고백">고백</option>
          <option value="일상">일상</option>
        </Form.Select>
      </FormGroup>
    </Form>
  );
};

export default EmotionForm;
