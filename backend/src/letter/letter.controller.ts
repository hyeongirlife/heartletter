import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { LetterService } from './letter.service';
import { GenerateLetterDto } from './dto/generate-letter.dto';

@Controller('letter')
export class LetterController {
  constructor(private readonly letterService: LetterService) {}

  @Post('generate')
  async generateLetter(@Body() generateLetterDto: GenerateLetterDto) {
    try {
      return await this.letterService.generateLetter(generateLetterDto);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: '편지 생성 중 오류가 발생했습니다.',
          message: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
