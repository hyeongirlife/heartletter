import { Module } from '@nestjs/common';
import { LetterController } from './letter.controller';
import { LetterService } from './letter.service';
import { OpenAiService } from './openai.service';

@Module({
  controllers: [LetterController],
  providers: [LetterService, OpenAiService],
})
export class LetterModule {}
