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

      <FormGroup controlId="mood">
        <Form.Label>편지 분위기</Form.Label>
        <Form.Select
          name="mood"
          value={formData.mood}
          onChange={handleChange}
        >
          <option value="로맨틱">로맨틱</option>
          <option value="감성적">감성적</option>
          <option value="유머러스">유머러스</option>
          <option value="시적">시적</option>
          <option value="감사 표현">감사 표현</option>
        </Form.Select>
      </FormGroup>

      <FormGroup controlId="length">
        <Form.Label>편지 길이</Form.Label>
        <Form.Select
          name="length"
          value={formData.length}
          onChange={handleChange}
        >
          <option value="짧은 메시지">짧은 메시지</option>
          <option value="중간 길이">중간 길이</option>
          <option value="긴 편지">긴 편지</option>
        </Form.Select>
      </FormGroup>

      <FormGroup controlId="specialRequest">
        <Form.Label>특별 요청사항 (선택)</Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          name="specialRequest"
          value={formData.specialRequest}
          onChange={handleChange}
          placeholder="편지 생성에 대한 추가 요청사항이 있으면 적어주세요"
        />
      </FormGroup>
    </Form>
  );
};

export default PersonalizationForm;
