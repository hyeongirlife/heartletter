import { IsString, IsOptional, IsEnum } from 'class-validator';

export enum MoodType {
  ROMANTIC = '로맨틱',
  EMOTIONAL = '감성적',
  HUMOROUS = '유머러스',
  POETIC = '시적',
  GRATEFUL = '감사 표현',
}

export enum LengthType {
  SHORT = '짧은 메시지',
  MEDIUM = '중간 길이',
  LONG = '긴 편지',
}

export class GenerateLetterDto {
  @IsString()
  recipientName: string;

  @IsString()
  relationship: string;

  @IsString()
  @IsOptional()
  duration?: string;

  @IsString()
  emotion: string;

  @IsString()
  @IsOptional()
  occasion?: string;

  @IsString()
  @IsOptional()
  memories?: string;

  @IsString()
  @IsOptional()
  traits?: string;

  @IsString()
  @IsOptional()
  keywords?: string;

  @IsEnum(MoodType)
  @IsOptional()
  mood?: MoodType = MoodType.ROMANTIC;

  @IsEnum(LengthType)
  @IsOptional()
  length?: LengthType = LengthType.MEDIUM;

  @IsString()
  @IsOptional()
  specialRequest?: string;
}
