export interface PostProps {
  title: string;
  patient_description: string;
}

export default class Post implements PostProps {
  public readonly title: string;
  public readonly patient_description;

  protected constructor(obj: PostProps) {
    this.title = obj.title;
    this.patient_description = obj.patient_description;
  }
}
