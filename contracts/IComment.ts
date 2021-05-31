import { IUser } from './IUser';

export interface IComment {
  id: number;
  user_id: number;
  video_id: number;
  comment: string;
  user: IUser;
}
