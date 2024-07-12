export interface ResponseCommentDto {
  id: number;
  parent_id: number | null;
  display_name: string;
  text: string;
  created_at: string;
}
