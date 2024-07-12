import { ResponseCommentDto } from './response-comment-dto';

export interface ResponsePostDto {
  post_url: string;
  title: string;
  created_at: string;
  num_hugs: number;
  patient_description: string;
  comments: Record<string, ResponseCommentDto>;
}
