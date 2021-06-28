export interface IChapter {
  id: number;
  name: string;
  description: string;
  user_id: number;
  created_at: Date;
  updated_at: Date;
}
export interface ICourse {
  id: number;
  is_active: boolean;
  name: string;
  description: string;
  student_count: number;
  user_id: number;
  created_at: Date;
  updated_at: Date;
  chapters: Array<IChapter>;
}
