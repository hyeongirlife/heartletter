import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { GenerateLetterDto } from './dto/generate-letter.dto';

@Injectable()
export class OpenAiService {
  private apiKey: string;
  private apiUrl = 'https://api.openai.com/v1/chat/completions';

  constructor(private configService: ConfigService) {
    this.apiKey = this.configService.get<string>('OPENAI_API_KEY');
  }

  async generateLetter(letterDto: GenerateLetterDto): Promise<string> {
    try {
      const prompt = this.createPrompt(letterDto);
      
      const response = await axios.post(
        this.apiUrl,
        {
          model: 'gpt-4o',  // gpt-4o로 모델 변경
          messages: [
            { 
              role: 'system', 
              content: '당신은 감성적이고 진심 어린 연애편지를 작성하는 전문가입니다.' 
            },
            { role: 'user', content: prompt }
          ],
          temperature: 0.7,
          max_tokens: this.getMaxTokensByLength(letterDto.length),
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.apiKey}`
          }
        }
      );

      return response.data.choices[0].message.content.trim();
    } catch (error) {
      console.error('OpenAI API 오류:', error);
      throw new Error('편지 생성 중 오류가 발생했습니다.');
    }
  }

  private createPrompt(letterDto: GenerateLetterDto): string {
    return `
      당신은 연애편지 작성 전문가입니다. 다음 정보를 바탕으로 진심이 담긴 감동적인 연애편지를 작성해주세요.

      [기본 정보]
      - 받는 사람: ${letterDto.recipientName}
      - 관계: ${letterDto.relationship}
      - 관계 기간: ${letterDto.duration || '언급 없음'}

      [감정 및 상황]
      - 전달하고 싶은 주요 감정: ${letterDto.emotion}
      - 특별한 상황/이벤트: ${letterDto.occasion || '일상적인 표현'}

      [개인화 요소]
      - 추억/특별한 순간: ${letterDto.memories || '언급 없음'}
      - 상대방의 특징/좋아하는 점: ${letterDto.traits || '언급 없음'}
      - 포함하고 싶은 키워드/문구: ${letterDto.keywords || '없음'}

      [스타일 가이드]
      - 편지 분위기: ${letterDto.mood}
      - 편지 길이: ${letterDto.length}
      ${letterDto.specialRequest ? `- 특별 요청: ${letterDto.specialRequest}` : ''}

      ${this.getMoodGuidance(letterDto.mood)}

      다음 형식으로 작성해주세요:
      1. 호칭으로 시작 (예: "사랑하는 [이름]에게,")
      2. 도입부 (현재 감정이나 편지를 쓰게 된 계기)
      3. 본문 (구체적인 추억, 감정, 상대방의 좋은 점 등)
      4. 마무리 (앞으로의 바람, 약속 등)
      5. 맺음말 (예: "사랑을 담아,")

      자연스럽고 진정성 있는 문체로 작성해주세요. 과도한 미사여구보다는 진심이 느껴지는 표현을 사용해주세요.
    `;
  }

  private getMoodGuidance(mood: string): string {
    switch (mood) {
      case '로맨틱':
        return '사랑의 깊이와 진심을 표현하는 감미로운 표현을 사용해주세요. 시적인 비유나 은유를 적절히 활용하되, 과하지 않게 해주세요.';
      case '감성적':
        return '깊은 감정과 마음의 울림을 전달하는 표현을 사용해주세요. 상대방에 대한 그리움과 소중함을 강조해주세요.';
      case '유머러스':
        return '상대방과의 재미있는 추억이나 농담을 포함해주세요. 사랑스러운 장난기가 느껴지되, 진심이 전달되도록 해주세요.';
      case '시적':
        return '아름다운 비유와 은유를 활용한 시적인 표현을 사용해주세요. 감정을 섬세하게 표현하되 자연스러움을 유지해주세요.';
      case '감사 표현':
        return '상대방이 나에게 해준 일들과 그로 인한 감사함을 중심으로 작성해주세요. 구체적인 사례를 포함하면 좋습니다.';
      default:
        return '진심 어린 마음이 전달되도록 자연스러운 표현을 사용해주세요.';
    }
  }

  private getMaxTokensByLength(length: string): number {
    switch (length) {
      case '짧은 메시지':
        return 300;
      case '중간 길이':
        return 600;
      case '긴 편지':
        return 1000;
      default:
        return 600;
    }
  }
}
