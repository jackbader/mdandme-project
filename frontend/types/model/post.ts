import { ResponsePostDto } from '../dto/response-post-dto';
import Comment from './comment';

export interface PostProps {
  post_url: string;
  title: string;
  created_at: string;
  num_hugs: number;
  patient_description: string;
  comments: Comment[];
}

export default class Post implements PostProps {
  public readonly post_url: string;
  public readonly title: string;
  public readonly created_at: string;
  public readonly num_hugs: number;
  public readonly patient_description;
  public readonly comments: Comment[] = [];

  protected constructor(obj: PostProps) {
    this.post_url = obj.post_url;
    this.title = obj.title;
    this.created_at = obj.created_at;
    this.num_hugs = obj.num_hugs;
    this.patient_description = obj.patient_description;
    this.comments = obj.comments;
  }

  public static create(obj: PostProps): Post {
    return new Post(obj);
  }

  public static fromDto(dto: ResponsePostDto): Post {
    return Post.create({
      post_url: dto.post_url,
      title: dto.title,
      created_at: dto.created_at,
      num_hugs: dto.num_hugs,
      patient_description: dto.patient_description,
      comments: Comment.fromDto(dto.comments),
    });
  }
}
