import { Injectable } from "@nestjs/common";
import { OpenAiService } from "./openai.service";
import { GenerateLetterDto } from "./dto/generate-letter.dto";

@Injectable()
export class LetterService {
  constructor(private readonly openAiService: OpenAiService) {}

  async generateLetter(letterDto: GenerateLetterDto) {
    try {
      const content = await this.openAiService.generateLetter(letterDto);

      return {
        success: true,
        content,
        createdAt: new Date().toISOString(),
      };
    } catch (error) {
      console.error("편지 생성 오류:", error);
      throw error;
    }
  }
}
