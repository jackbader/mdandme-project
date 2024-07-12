import { ResponseCommentDto } from '../dto/response-comment-dto';

export interface CommentProps {
  id: number;
  parent_id: number | null;
  display_name: string;
  text: string;
  created_at: string;
}

export default class Comment implements CommentProps {
  public readonly id: number;
  public readonly parent_id: number | null;
  public readonly display_name: string;
  public readonly text: string;
  public readonly created_at: string;
  public readonly replies: Comment[] = [];

  protected constructor(obj: CommentProps) {
    this.id = obj.id;
    this.parent_id = obj.parent_id;
    this.display_name = obj.display_name;
    this.text = obj.text;
    this.created_at = obj.created_at;
  }

  public static fromDto(comments: Record<string, ResponseCommentDto>): Comment[] {
    const commentArray = Object.values(comments);

    const rootComments = commentArray.filter((comment) => comment.parent_id === null);
    const rootCommentObjects = rootComments.map((comment) => new Comment(comment));
    const replyComments = commentArray.filter((comment) => comment.parent_id !== null);
    const replyCommentObjects = replyComments.map((comment) => new Comment(comment));

    for (const reply of replyCommentObjects) {
      const parent = rootCommentObjects.find((comment) => comment.id === reply.parent_id);
      if (parent !== undefined) {
        parent.replies.push(reply);
      }
    }

    return rootCommentObjects;
  }
}
