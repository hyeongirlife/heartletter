import React from 'react';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';

const FormGroup = styled(Form.Group)`
  margin-bottom: 1.5rem;
`;

const BasicInfoForm = ({ formData, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <Form>
      <FormGroup controlId="recipientName">
        <Form.Label>상대방 이름</Form.Label>
        <Form.Control
          type="text"
          name="recipientName"
          value={formData.recipientName}
          onChange={handleChange}
          placeholder="편지를 받을 상대방의 이름을 입력하세요"
        />
      </FormGroup>

      <FormGroup controlId="relationship">
        <Form.Label>관계</Form.Label>
        <Form.Select
          name="relationship"
          value={formData.relationship}
          onChange={handleChange}
        >
          <option value="">관계를 선택하세요</option>
          <option value="연인">연인</option>
          <option value="짝사랑">짝사랑</option>
          <option value="배우자">배우자</option>
          <option value="썸타는 사이">썸타는 사이</option>
          <option value="첫 데이트">첫 데이트</option>
        </Form.Select>
      </FormGroup>

      <FormGroup controlId="duration">
        <Form.Label>관계 기간 (해당되는 경우)</Form.Label>
        <Form.Control
          type="text"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          placeholder="예: 3개월, 2년"
        />
      </FormGroup>
    </Form>
  );
};

export default BasicInfoForm;
