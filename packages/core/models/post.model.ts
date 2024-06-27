type Post = {
  id: string;
  rootPostId?: string;
  parentPostId?: string;
  ownerId: string;
  content: string;
  attachmentUrls?: string[];
  viewCount: number;
  likeCount: number;
  commentCount: number;
  repostCount: number;
  isRepost: boolean;
  isReply: boolean;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt?: Date | null;
};

export default Post;
