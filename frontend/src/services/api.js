import axios from 'axios';

// API 기본 설정
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// 편지 생성 API
export const generateLetter = async (formData) => {
  try {
    // 백엔드 API 호출
    const response = await api.post('/letter/generate', formData);
    return response;
  } catch (error) {
    console.error('편지 생성 오류:', error);
    throw error;
  }
};

export default api;
