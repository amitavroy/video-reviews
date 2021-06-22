import { IComment } from './IComment';

export interface IVideo {
  id: number;
  url: string;
  title: string;
  description: string;
  like_count: number;
  abuse_count: number;
  video_id: string;
  comments: Array<IComment>;
  isLiked: boolean;
}
