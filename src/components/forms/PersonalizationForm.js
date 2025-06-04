import React from 'react';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';

const FormGroup = styled(Form.Group)`
  margin-bottom: 1.5rem;
`;

const PersonalizationForm = ({ formData, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <Form>
      <FormGroup controlId="memories">
        <Form.Label>추억이나 특별한 순간</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="memories"
          value={formData.memories}
          onChange={handleChange}
          placeholder="함께한 특별한 추억이나 순간을 적어주세요"
        />
      </FormGroup>

      <FormGroup controlId="traits">
        <Form.Label>상대방의 특징이나 좋아하는 점</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="traits"
          value={formData.traits}
          onChange={handleChange}
          placeholder="상대방의 어떤 점이 좋은지 적어주세요"
        />
      </FormGroup>

      <FormGroup controlId="keywords">
        <Form.Label>포함하고 싶은 특정 문구나 키워드</Form.Label>
        <Form.Control
          type="text"
          name="keywords"
          value={formData.keywords}
          onChange={handleChange}
          placeholder="편지에 꼭 포함하고 싶은 단어나 문구를 적어주세요"
        />
      </FormGroup>
    </Form>
  );
};

export default PersonalizationForm;
