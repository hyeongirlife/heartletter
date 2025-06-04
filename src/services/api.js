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
    // 실제 API가 없으므로 임시로 Promise 반환
    return new Promise((resolve) => {
      setTimeout(() => {
        const letter = `
          사랑하는 ${formData.recipientName}에게,
          
          오늘 이렇게 편지를 쓰게 되어 기쁩니다. 우리가 ${formData.relationship}으로 지낸 지도 ${formData.duration}이 되었네요.
          
          ${formData.occasion}을 맞이하여, 평소에 말하지 못했던 내 마음을 전하고 싶어요. 당신의 ${formData.traits}에 항상 감동받고 있어요.
          
          ${formData.memories}의 추억은 내게 정말 특별해요. 그때 당신과 함께했던 시간들이 내게는 보물 같은 기억으로 남아있습니다.
          
          앞으로도 당신과 함께하는 시간들이 기대돼요. 항상 ${formData.emotion}한 마음으로 당신을 생각합니다.
          
          사랑을 담아,
        `;
        resolve({ data: { content: letter } });
      }, 1000);
    });
  } catch (error) {
    console.error('편지 생성 오류:', error);
    throw error;
  }
};

export default api;
