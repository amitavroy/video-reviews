export interface ICourse {
  id: number;
  is_active: boolean;
  name: string;
  description: string;
  student_count: number;
  user_id: number;
  created_at: Date;
  updated_at: Date;
}
